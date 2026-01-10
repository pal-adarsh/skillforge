/**
 * Bookmark Hook for Lessons
 * Provides functionality to bookmark/favorite lessons
 * Persists to localStorage (Supabase sync can be added when table is created)
 */

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export interface Bookmark {
  id: string;
  lessonId: string;
  userId: string;
  createdAt: Date;
  note?: string;
}

const LOCAL_STORAGE_KEY = 'lesson_bookmarks';

export function useBookmarks() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState(false);

  // Load bookmarks from localStorage
  const loadLocalBookmarks = useCallback((): Bookmark[] => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed.map((b: any) => ({
          ...b,
          createdAt: new Date(b.createdAt),
        })) : [];
      }
    } catch (error) {
      console.error('Error loading local bookmarks:', error);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
    return [];
  }, []);

  // Save bookmarks to localStorage
  const saveLocalBookmarks = useCallback((bookmarkList: Bookmark[]) => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookmarkList));
    } catch (error) {
      console.error('Error saving local bookmarks:', error);
    }
  }, []);

  // Fetch bookmarks (currently local storage only)
  const fetchBookmarks = useCallback(async () => {
    setLoading(true);
    const localBookmarks = loadLocalBookmarks();
    // Filter by user if logged in
    const userBookmarks = user 
      ? localBookmarks.filter(b => b.userId === user.id || b.userId === 'local')
      : localBookmarks;
    setBookmarks(userBookmarks);
    setLoading(false);
  }, [user, loadLocalBookmarks]);

  // Initialize bookmarks
  useEffect(() => {
    fetchBookmarks();
  }, [fetchBookmarks]);

  // Check if a lesson is bookmarked
  const isBookmarked = useCallback(
    (lessonId: string): boolean => {
      return bookmarks.some((b) => b.lessonId === lessonId);
    },
    [bookmarks]
  );

  // Get bookmark for a lesson
  const getBookmark = useCallback(
    (lessonId: string): Bookmark | undefined => {
      return bookmarks.find((b) => b.lessonId === lessonId);
    },
    [bookmarks]
  );

  // Add bookmark
  const addBookmark = useCallback(
    async (lessonId: string, note?: string): Promise<boolean> => {
      if (isBookmarked(lessonId)) {
        toast({
          title: 'Already Bookmarked',
          description: 'This lesson is already in your bookmarks.',
        });
        return false;
      }

      const newBookmark: Bookmark = {
        id: `bookmark-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        lessonId,
        userId: user?.id || 'local',
        createdAt: new Date(),
        note,
      };

      const updatedBookmarks = [newBookmark, ...bookmarks];
      setBookmarks(updatedBookmarks);
      saveLocalBookmarks(updatedBookmarks);

      toast({
        title: '🔖 Bookmarked!',
        description: 'Lesson added to your bookmarks.',
      });

      return true;
    },
    [bookmarks, isBookmarked, user, saveLocalBookmarks, toast]
  );

  // Remove bookmark
  const removeBookmark = useCallback(
    async (lessonId: string): Promise<boolean> => {
      const bookmark = getBookmark(lessonId);
      if (!bookmark) {
        return false;
      }

      const updatedBookmarks = bookmarks.filter((b) => b.lessonId !== lessonId);
      setBookmarks(updatedBookmarks);
      saveLocalBookmarks(updatedBookmarks);

      toast({
        title: 'Bookmark Removed',
        description: 'Lesson removed from your bookmarks.',
      });

      return true;
    },
    [bookmarks, getBookmark, saveLocalBookmarks, toast]
  );

  // Toggle bookmark
  const toggleBookmark = useCallback(
    async (lessonId: string, note?: string): Promise<boolean> => {
      if (isBookmarked(lessonId)) {
        return removeBookmark(lessonId);
      }
      return addBookmark(lessonId, note);
    },
    [isBookmarked, addBookmark, removeBookmark]
  );

  // Update bookmark note
  const updateBookmarkNote = useCallback(
    async (lessonId: string, note: string): Promise<boolean> => {
      const bookmark = getBookmark(lessonId);
      if (!bookmark) return false;

      const updatedBookmarks = bookmarks.map((b) =>
        b.lessonId === lessonId ? { ...b, note } : b
      );
      setBookmarks(updatedBookmarks);
      saveLocalBookmarks(updatedBookmarks);

      return true;
    },
    [bookmarks, getBookmark, saveLocalBookmarks]
  );

  // Get all bookmarked lesson IDs
  const getBookmarkedLessonIds = useCallback((): string[] => {
    return bookmarks.map((b) => b.lessonId);
  }, [bookmarks]);

  // Get bookmarks count
  const getBookmarksCount = useCallback((): number => {
    return bookmarks.length;
  }, [bookmarks]);

  return {
    bookmarks,
    loading,
    isBookmarked,
    getBookmark,
    addBookmark,
    removeBookmark,
    toggleBookmark,
    updateBookmarkNote,
    getBookmarkedLessonIds,
    getBookmarksCount,
    refreshBookmarks: fetchBookmarks,
  };
}
