// Offline Storage Utilities for LearnAI PWA
// Uses IndexedDB for robust offline data management

interface LessonProgress {
  lessonId: string;
  title: string;
  progress: number;
  completed: boolean;
  lastAccessed: Date;
}

interface QuizResult {
  quizId: string;
  score: number;
  answers: number[];
  completedAt: Date;
}

interface UserProfile {
  name: string;
  email: string;
  joinDate: string;
  totalLessons: number;
  completedLessons: number;
  averageScore: number;
}

class OfflineStorageManager {
  private dbName = 'LearnAI_DB';
  private dbVersion = 1;
  private db: IDBDatabase | null = null;

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const request = indexedDB.open(this.dbName, this.dbVersion);

        request.onerror = () => reject(new Error('Failed to open IndexedDB'));
        request.onsuccess = () => {
          this.db = request.result;
          
          // Add error handler for database corruption
          this.db.onerror = (event) => {
            console.warn('IndexedDB error detected:', event);
          };
          
          resolve();
        };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Create object stores
        if (!db.objectStoreNames.contains('lessons')) {
          db.createObjectStore('lessons', { keyPath: 'lessonId' });
        }

        if (!db.objectStoreNames.contains('quizResults')) {
          db.createObjectStore('quizResults', { keyPath: 'quizId' });
        }

        if (!db.objectStoreNames.contains('userProfile')) {
          db.createObjectStore('userProfile', { keyPath: 'id' });
        }

        if (!db.objectStoreNames.contains('offlineContent')) {
          db.createObjectStore('offlineContent', { keyPath: 'contentId' });
        }
      };
      } catch (error) {
        reject(new Error('IndexedDB not supported or failed to initialize'));
      }
    });
  }

  // Lesson Progress Management
  async saveLessonProgress(progress: LessonProgress): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['lessons'], 'readwrite');
      const store = transaction.objectStore('lessons');
      const request = store.put(progress);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getLessonProgress(lessonId: string): Promise<LessonProgress | null> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['lessons'], 'readonly');
      const store = transaction.objectStore('lessons');
      const request = store.get(lessonId);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  }

  async getAllLessonProgress(): Promise<LessonProgress[]> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['lessons'], 'readonly');
      const store = transaction.objectStore('lessons');
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  // Quiz Results Management  
  async saveQuizResult(result: QuizResult): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['quizResults'], 'readwrite');
      const store = transaction.objectStore('quizResults');
      const request = store.put(result);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getQuizResults(): Promise<QuizResult[]> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['quizResults'], 'readonly');
      const store = transaction.objectStore('quizResults');
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  // User Profile Management
  async saveUserProfile(profile: UserProfile): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['userProfile'], 'readwrite');
      const store = transaction.objectStore('userProfile');
      const request = store.put({ ...profile, id: 'user' });

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getUserProfile(): Promise<UserProfile | null> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['userProfile'], 'readonly');
      const store = transaction.objectStore('userProfile');
      const request = store.get('user');

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  }

  // Offline Content Caching
  async cacheContent(contentId: string, content: any): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['offlineContent'], 'readwrite');
      const store = transaction.objectStore('offlineContent');
      const request = store.put({ contentId, content, cachedAt: new Date() });

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getCachedContent(contentId: string): Promise<any> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['offlineContent'], 'readonly');
      const store = transaction.objectStore('offlineContent');
      const request = store.get(contentId);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result?.content || null);
    });
  }

  // Export data for sync when online
  async exportAllData(): Promise<{
    lessons: LessonProgress[];
    quizResults: QuizResult[];
    userProfile: UserProfile | null;
  }> {
    const [lessons, quizResults, userProfile] = await Promise.all([
      this.getAllLessonProgress(),
      this.getQuizResults(),
      this.getUserProfile()
    ]);

    return { lessons, quizResults, userProfile };
  }

  // Clear all data (for logout/reset)
  async clearAllData(): Promise<void> {
    if (!this.db) await this.init();

    const storeNames = ['lessons', 'quizResults', 'userProfile', 'offlineContent'];
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(storeNames, 'readwrite');
      
      storeNames.forEach(storeName => {
        const store = transaction.objectStore(storeName);
        store.clear();
      });

      transaction.onerror = () => reject(transaction.error);
      transaction.oncomplete = () => resolve();
    });
  }
}

// Singleton instance
export const offlineStorage = new OfflineStorageManager();

// Initialize on app load
offlineStorage.init().catch(console.error);

// Utility functions for easy use in components
export const saveProgress = async (lessonId: string, progress: number, title: string) => {
  await offlineStorage.saveLessonProgress({
    lessonId,
    title,
    progress,
    completed: progress === 100,
    lastAccessed: new Date()
  });
};

export const getProgress = async (lessonId: string) => {
  return await offlineStorage.getLessonProgress(lessonId);
};

export const saveQuiz = async (quizId: string, score: number, answers: number[]) => {
  await offlineStorage.saveQuizResult({
    quizId,
    score,
    answers,
    completedAt: new Date()
  });
};

export const isOnline = () => navigator.onLine;