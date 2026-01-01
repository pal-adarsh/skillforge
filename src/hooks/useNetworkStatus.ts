import { useState, useEffect, useCallback, useRef } from 'react';
import { offlineStorage } from '@/lib/offline-storage';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface NetworkState {
  isOnline: boolean;
  isSlowConnection: boolean;
  connectionType: string | null;
  lastOnline: Date | null;
  syncStatus: 'idle' | 'syncing' | 'error' | 'success';
  pendingSyncItems: number;
}

interface SyncResult {
  success: boolean;
  synced: number;
  failed: number;
}

export const useNetworkStatus = () => {
  const [networkState, setNetworkState] = useState<NetworkState>({
    isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
    isSlowConnection: false,
    connectionType: null,
    lastOnline: null,
    syncStatus: 'idle',
    pendingSyncItems: 0
  });
  
  const syncInProgress = useRef(false);
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get connection info
  const updateConnectionInfo = useCallback(() => {
    const connection = (navigator as Navigator & { 
      connection?: { 
        effectiveType: string; 
        downlink: number;
        saveData: boolean;
      } 
    }).connection;
    
    if (connection) {
      const isSlowConnection = 
        connection.effectiveType === 'slow-2g' || 
        connection.effectiveType === '2g' ||
        connection.downlink < 1;
        
      setNetworkState(prev => ({
        ...prev,
        isSlowConnection,
        connectionType: connection.effectiveType
      }));
    }
  }, []);

  // Sync offline data to server
  const syncOfflineData = useCallback(async (): Promise<SyncResult> => {
    if (syncInProgress.current || !navigator.onLine) {
      return { success: false, synced: 0, failed: 0 };
    }
    
    syncInProgress.current = true;
    setNetworkState(prev => ({ ...prev, syncStatus: 'syncing' }));
    
    let synced = 0;
    let failed = 0;
    
    try {
      const syncQueue = await offlineStorage.getSyncQueue();
      
      for (const item of syncQueue) {
        try {
          // Process based on store and action
          if (item.store === 'lessons') {
            const data = item.data as { lessonId: string; progress: number; completed: boolean };
            
            // Get current user
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) continue;
            
            // Upsert lesson progress
            const { error } = await supabase
              .from('lesson_progress')
              .upsert({
                user_id: user.id,
                lesson_id: data.lessonId,
                progress_percentage: data.progress,
                completed: data.completed,
                category: 'general', // Default category
                updated_at: new Date().toISOString()
              }, {
                onConflict: 'user_id,lesson_id'
              });
              
            if (error) throw error;
          } else if (item.store === 'quizResults') {
            const data = item.data as { quizId: string; score: number; answers: number[] };
            
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) continue;
            
            const { error } = await supabase
              .from('quiz_progress')
              .insert({
                user_id: user.id,
                quiz_id: data.quizId,
                score: data.score,
                answers: data.answers,
                completed: true,
                category: 'general',
                difficulty: 'medium'
              });
              
            if (error) throw error;
          }
          
          // Remove from sync queue on success
          await offlineStorage.removeSyncQueueItem(item.id);
          synced++;
        } catch (error) {
          console.error('Sync error for item:', item.id, error);
          
          // Increment retry count
          item.retryCount++;
          
          if (item.retryCount >= item.maxRetries) {
            // Remove after max retries
            await offlineStorage.removeSyncQueueItem(item.id);
          } else {
            // Update with new retry count
            await offlineStorage.updateSyncQueueItem(item);
          }
          
          failed++;
        }
      }
      
      const remainingQueue = await offlineStorage.getSyncQueue();
      
      setNetworkState(prev => ({ 
        ...prev, 
        syncStatus: failed > 0 ? 'error' : 'success',
        pendingSyncItems: remainingQueue.length
      }));
      
      if (synced > 0) {
        toast.success(`Synced ${synced} items successfully`);
      }
      
      if (failed > 0) {
        toast.error(`Failed to sync ${failed} items`);
      }
      
      return { success: true, synced, failed };
    } catch (error) {
      console.error('Sync failed:', error);
      setNetworkState(prev => ({ ...prev, syncStatus: 'error' }));
      return { success: false, synced, failed };
    } finally {
      syncInProgress.current = false;
    }
  }, []);

  // Update pending sync count
  const updatePendingCount = useCallback(async () => {
    try {
      const queue = await offlineStorage.getSyncQueue();
      setNetworkState(prev => ({
        ...prev,
        pendingSyncItems: queue.length
      }));
    } catch (error) {
      console.error('Failed to get sync queue:', error);
    }
  }, []);

  // Handle online event
  const handleOnline = useCallback(() => {
    setNetworkState(prev => ({
      ...prev,
      isOnline: true,
      lastOnline: new Date()
    }));
    
    toast.success('Back online! Syncing your data...', { duration: 3000 });
    
    // Sync offline data when coming back online
    syncOfflineData();
    updateConnectionInfo();
  }, [syncOfflineData, updateConnectionInfo]);

  // Handle offline event
  const handleOffline = useCallback(() => {
    setNetworkState(prev => ({
      ...prev,
      isOnline: false,
      syncStatus: 'idle'
    }));
    
    toast.info('You are offline. Your progress will be saved locally.', { duration: 5000 });
  }, []);

  // Retry sync with exponential backoff
  const retrySync = useCallback((retryCount: number = 0) => {
    const maxRetries = 3;
    const baseDelay = 5000; // 5 seconds
    
    if (retryCount >= maxRetries) {
      toast.error('Sync failed after multiple attempts. Will try again later.');
      return;
    }
    
    const delay = baseDelay * Math.pow(2, retryCount);
    
    retryTimeoutRef.current = setTimeout(async () => {
      if (!navigator.onLine) return;
      
      const result = await syncOfflineData();
      
      if (!result.success || result.failed > 0) {
        retrySync(retryCount + 1);
      }
    }, delay);
  }, [syncOfflineData]);

  // Force sync
  const forceSync = useCallback(async (): Promise<SyncResult> => {
    if (!navigator.onLine) {
      toast.error('Cannot sync while offline');
      return { success: false, synced: 0, failed: 0 };
    }
    
    return syncOfflineData();
  }, [syncOfflineData]);

  // Setup event listeners
  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Update connection info on mount and when connection changes
    updateConnectionInfo();
    updatePendingCount();
    
    const connection = (navigator as Navigator & { 
      connection?: { 
        addEventListener: (event: string, handler: () => void) => void;
        removeEventListener: (event: string, handler: () => void) => void;
      } 
    }).connection;
    
    if (connection) {
      connection.addEventListener('change', updateConnectionInfo);
    }
    
    // Periodic sync check (every 5 minutes when online)
    const periodicSyncInterval = setInterval(() => {
      if (navigator.onLine) {
        updatePendingCount();
      }
    }, 5 * 60 * 1000);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      
      if (connection) {
        connection.removeEventListener('change', updateConnectionInfo);
      }
      
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
      
      clearInterval(periodicSyncInterval);
    };
  }, [handleOnline, handleOffline, updateConnectionInfo, updatePendingCount]);

  // Sync on mount if online and has pending items
  useEffect(() => {
    const initialSync = async () => {
      if (navigator.onLine) {
        const queue = await offlineStorage.getSyncQueue();
        if (queue.length > 0) {
          syncOfflineData();
        }
      }
    };
    
    initialSync();
  }, [syncOfflineData]);

  return {
    ...networkState,
    syncOfflineData: forceSync,
    retrySync,
    updatePendingCount
  };
};
