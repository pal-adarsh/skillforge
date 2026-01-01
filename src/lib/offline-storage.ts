// Enhanced Offline Storage Utilities for LearnAI PWA
// Uses IndexedDB with sync queue and data integrity

import { generateHash } from './security-utils';

interface LessonProgress {
  lessonId: string;
  title: string;
  progress: number;
  completed: boolean;
  lastAccessed: Date;
  synced: boolean;
  checksum?: string;
}

interface QuizResult {
  quizId: string;
  score: number;
  answers: number[];
  completedAt: Date;
  synced: boolean;
  checksum?: string;
}

interface UserProfile {
  name: string;
  email: string;
  joinDate: string;
  totalLessons: number;
  completedLessons: number;
  averageScore: number;
}

interface SyncQueueItem {
  id: string;
  action: 'create' | 'update' | 'delete';
  store: string;
  data: unknown;
  timestamp: number;
  retryCount: number;
  maxRetries: number;
}

interface CachedContent {
  contentId: string;
  content: unknown;
  cachedAt: Date;
  expiresAt: Date;
  version: number;
}

class OfflineStorageManager {
  private dbName = 'LearnAI_DB';
  private dbVersion = 2;
  private db: IDBDatabase | null = null;
  private isInitializing = false;
  private initPromise: Promise<void> | null = null;

  async init(): Promise<void> {
    // Prevent multiple simultaneous initializations
    if (this.db) return;
    
    if (this.isInitializing && this.initPromise) {
      return this.initPromise;
    }
    
    this.isInitializing = true;
    this.initPromise = new Promise((resolve, reject) => {
      try {
        if (typeof indexedDB === 'undefined') {
          throw new Error('IndexedDB not supported');
        }
        
        const request = indexedDB.open(this.dbName, this.dbVersion);

        request.onerror = () => {
          this.isInitializing = false;
          reject(new Error('Failed to open IndexedDB'));
        };
        
        request.onsuccess = () => {
          this.db = request.result;
          this.isInitializing = false;
          
          // Add error handler for database corruption
          this.db.onerror = (event) => {
            console.warn('IndexedDB error detected:', event);
          };
          
          resolve();
        };

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;

          // Create object stores with indexes
          if (!db.objectStoreNames.contains('lessons')) {
            const lessonsStore = db.createObjectStore('lessons', { keyPath: 'lessonId' });
            lessonsStore.createIndex('synced', 'synced', { unique: false });
            lessonsStore.createIndex('lastAccessed', 'lastAccessed', { unique: false });
          }

          if (!db.objectStoreNames.contains('quizResults')) {
            const quizStore = db.createObjectStore('quizResults', { keyPath: 'quizId' });
            quizStore.createIndex('synced', 'synced', { unique: false });
            quizStore.createIndex('completedAt', 'completedAt', { unique: false });
          }

          if (!db.objectStoreNames.contains('userProfile')) {
            db.createObjectStore('userProfile', { keyPath: 'id' });
          }

          if (!db.objectStoreNames.contains('offlineContent')) {
            const contentStore = db.createObjectStore('offlineContent', { keyPath: 'contentId' });
            contentStore.createIndex('expiresAt', 'expiresAt', { unique: false });
          }
          
          // Sync queue for offline operations
          if (!db.objectStoreNames.contains('syncQueue')) {
            const syncStore = db.createObjectStore('syncQueue', { keyPath: 'id' });
            syncStore.createIndex('timestamp', 'timestamp', { unique: false });
            syncStore.createIndex('retryCount', 'retryCount', { unique: false });
          }
          
          // GK content cache
          if (!db.objectStoreNames.contains('gkContent')) {
            const gkStore = db.createObjectStore('gkContent', { keyPath: 'id' });
            gkStore.createIndex('type', 'type', { unique: false });
          }
        };
      } catch (error) {
        this.isInitializing = false;
        reject(new Error('IndexedDB not supported or failed to initialize'));
      }
    });
    
    return this.initPromise;
  }

  private async ensureDb(): Promise<IDBDatabase> {
    if (!this.db) await this.init();
    if (!this.db) throw new Error('Database not initialized');
    return this.db;
  }

  // Enhanced Lesson Progress Management with integrity check
  async saveLessonProgress(progress: LessonProgress): Promise<void> {
    const db = await this.ensureDb();
    
    // Generate checksum for data integrity
    const checksum = await generateHash(JSON.stringify({
      lessonId: progress.lessonId,
      progress: progress.progress,
      completed: progress.completed
    }));

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['lessons', 'syncQueue'], 'readwrite');
      const store = transaction.objectStore('lessons');
      
      const dataToSave = { 
        ...progress, 
        synced: navigator.onLine,
        checksum,
        lastAccessed: new Date()
      };
      
      const request = store.put(dataToSave);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        // Add to sync queue if offline
        if (!navigator.onLine) {
          this.addToSyncQueue('lessons', 'update', dataToSave);
        }
        resolve();
      };
    });
  }

  async getLessonProgress(lessonId: string): Promise<LessonProgress | null> {
    const db = await this.ensureDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['lessons'], 'readonly');
      const store = transaction.objectStore('lessons');
      const request = store.get(lessonId);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  }

  async getAllLessonProgress(): Promise<LessonProgress[]> {
    const db = await this.ensureDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['lessons'], 'readonly');
      const store = transaction.objectStore('lessons');
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }
  
  async getUnsyncedLessons(): Promise<LessonProgress[]> {
    const db = await this.ensureDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['lessons'], 'readonly');
      const store = transaction.objectStore('lessons');
      const index = store.index('synced');
      const request = index.getAll(IDBKeyRange.only(false));
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  // Enhanced Quiz Results Management  
  async saveQuizResult(result: QuizResult): Promise<void> {
    const db = await this.ensureDb();
    
    const checksum = await generateHash(JSON.stringify({
      quizId: result.quizId,
      score: result.score,
      answers: result.answers
    }));

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['quizResults'], 'readwrite');
      const store = transaction.objectStore('quizResults');
      
      const dataToSave = {
        ...result,
        synced: navigator.onLine,
        checksum,
        completedAt: new Date()
      };
      
      const request = store.put(dataToSave);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        if (!navigator.onLine) {
          this.addToSyncQueue('quizResults', 'update', dataToSave);
        }
        resolve();
      };
    });
  }

  async getQuizResults(): Promise<QuizResult[]> {
    const db = await this.ensureDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['quizResults'], 'readonly');
      const store = transaction.objectStore('quizResults');
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  // User Profile Management
  async saveUserProfile(profile: UserProfile): Promise<void> {
    const db = await this.ensureDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['userProfile'], 'readwrite');
      const store = transaction.objectStore('userProfile');
      const request = store.put({ ...profile, id: 'user' });

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getUserProfile(): Promise<UserProfile | null> {
    const db = await this.ensureDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['userProfile'], 'readonly');
      const store = transaction.objectStore('userProfile');
      const request = store.get('user');

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  }

  // Enhanced Offline Content Caching with expiration
  async cacheContent(contentId: string, content: unknown, ttlMinutes: number = 60 * 24): Promise<void> {
    const db = await this.ensureDb();
    const now = new Date();
    const expiresAt = new Date(now.getTime() + ttlMinutes * 60 * 1000);

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['offlineContent'], 'readwrite');
      const store = transaction.objectStore('offlineContent');
      
      const cachedData: CachedContent = { 
        contentId, 
        content, 
        cachedAt: now,
        expiresAt,
        version: 1
      };
      
      const request = store.put(cachedData);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getCachedContent(contentId: string): Promise<unknown | null> {
    const db = await this.ensureDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['offlineContent'], 'readonly');
      const store = transaction.objectStore('offlineContent');
      const request = store.get(contentId);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const result = request.result as CachedContent | undefined;
        if (!result) {
          resolve(null);
          return;
        }
        
        // Check if content has expired
        if (new Date() > new Date(result.expiresAt)) {
          // Delete expired content
          this.deleteCachedContent(contentId).catch(console.error);
          resolve(null);
          return;
        }
        
        resolve(result.content);
      };
    });
  }
  
  async deleteCachedContent(contentId: string): Promise<void> {
    const db = await this.ensureDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['offlineContent'], 'readwrite');
      const store = transaction.objectStore('offlineContent');
      const request = store.delete(contentId);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }
  
  // Clean up expired content
  async cleanupExpiredContent(): Promise<number> {
    const db = await this.ensureDb();
    let deletedCount = 0;

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['offlineContent'], 'readwrite');
      const store = transaction.objectStore('offlineContent');
      const index = store.index('expiresAt');
      const now = new Date();
      const range = IDBKeyRange.upperBound(now);
      
      const request = index.openCursor(range);
      
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          cursor.delete();
          deletedCount++;
          cursor.continue();
        }
      };
      
      transaction.oncomplete = () => resolve(deletedCount);
      transaction.onerror = () => reject(transaction.error);
    });
  }

  // GK Content Caching
  async cacheGKContent(type: 'learn' | 'test', data: unknown): Promise<void> {
    const db = await this.ensureDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['gkContent'], 'readwrite');
      const store = transaction.objectStore('gkContent');
      const request = store.put({ 
        id: `gk_${type}`,
        type,
        data,
        cachedAt: new Date()
      });

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }
  
  async getGKContent(type: 'learn' | 'test'): Promise<unknown | null> {
    const db = await this.ensureDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['gkContent'], 'readonly');
      const store = transaction.objectStore('gkContent');
      const request = store.get(`gk_${type}`);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result?.data || null);
    });
  }

  // Sync Queue Management
  private async addToSyncQueue(store: string, action: 'create' | 'update' | 'delete', data: unknown): Promise<void> {
    const db = await this.ensureDb();
    
    const item: SyncQueueItem = {
      id: `${store}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      action,
      store,
      data,
      timestamp: Date.now(),
      retryCount: 0,
      maxRetries: 3
    };

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['syncQueue'], 'readwrite');
      const syncStore = transaction.objectStore('syncQueue');
      const request = syncStore.add(item);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }
  
  async getSyncQueue(): Promise<SyncQueueItem[]> {
    const db = await this.ensureDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['syncQueue'], 'readonly');
      const store = transaction.objectStore('syncQueue');
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }
  
  async removeSyncQueueItem(id: string): Promise<void> {
    const db = await this.ensureDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['syncQueue'], 'readwrite');
      const store = transaction.objectStore('syncQueue');
      const request = store.delete(id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }
  
  async updateSyncQueueItem(item: SyncQueueItem): Promise<void> {
    const db = await this.ensureDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['syncQueue'], 'readwrite');
      const store = transaction.objectStore('syncQueue');
      const request = store.put(item);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }
  
  async clearSyncQueue(): Promise<void> {
    const db = await this.ensureDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['syncQueue'], 'readwrite');
      const store = transaction.objectStore('syncQueue');
      const request = store.clear();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  // Export data for sync when online
  async exportAllData(): Promise<{
    lessons: LessonProgress[];
    quizResults: QuizResult[];
    userProfile: UserProfile | null;
    syncQueue: SyncQueueItem[];
  }> {
    const [lessons, quizResults, userProfile, syncQueue] = await Promise.all([
      this.getAllLessonProgress(),
      this.getQuizResults(),
      this.getUserProfile(),
      this.getSyncQueue()
    ]);

    return { lessons, quizResults, userProfile, syncQueue };
  }

  // Clear all data (for logout/reset)
  async clearAllData(): Promise<void> {
    const db = await this.ensureDb();
    const storeNames = ['lessons', 'quizResults', 'userProfile', 'offlineContent', 'syncQueue', 'gkContent'];
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeNames, 'readwrite');
      
      storeNames.forEach(storeName => {
        if (db.objectStoreNames.contains(storeName)) {
          const store = transaction.objectStore(storeName);
          store.clear();
        }
      });

      transaction.onerror = () => reject(transaction.error);
      transaction.oncomplete = () => resolve();
    });
  }
  
  // Get storage usage stats
  async getStorageStats(): Promise<{ used: number; quota: number; percentage: number }> {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      const estimate = await navigator.storage.estimate();
      return {
        used: estimate.usage || 0,
        quota: estimate.quota || 0,
        percentage: estimate.quota ? Math.round((estimate.usage || 0) / estimate.quota * 100) : 0
      };
    }
    return { used: 0, quota: 0, percentage: 0 };
  }
}

// Singleton instance
export const offlineStorage = new OfflineStorageManager();

// Initialize on app load with error handling
if (typeof window !== 'undefined') {
  offlineStorage.init().catch(error => {
    console.warn('Failed to initialize offline storage:', error);
  });
}

// Utility functions for easy use in components
export const saveProgress = async (lessonId: string, progress: number, title: string): Promise<void> => {
  await offlineStorage.saveLessonProgress({
    lessonId,
    title,
    progress,
    completed: progress === 100,
    lastAccessed: new Date(),
    synced: navigator.onLine
  });
};

export const getProgress = async (lessonId: string): Promise<LessonProgress | null> => {
  return await offlineStorage.getLessonProgress(lessonId);
};

export const saveQuiz = async (quizId: string, score: number, answers: number[]): Promise<void> => {
  await offlineStorage.saveQuizResult({
    quizId,
    score,
    answers,
    completedAt: new Date(),
    synced: navigator.onLine
  });
};

export const isOnline = (): boolean => navigator.onLine;

export const getStorageStats = async (): Promise<{ used: number; quota: number; percentage: number }> => {
  return await offlineStorage.getStorageStats();
};