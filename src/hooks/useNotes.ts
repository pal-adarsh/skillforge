import { useState, useEffect, useCallback } from 'react';
import { NotePage, createPage } from '@/components/notes/types';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const STORAGE_KEY = 'skillforge_notes';

export function useNotes() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [pages, setPages] = useState<NotePage[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);

  // Load notes from localStorage
  const loadFromLocal = useCallback(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved) as NotePage[];
      } catch {
        return [];
      }
    }
    return [];
  }, []);

  // Save notes to localStorage
  const saveToLocal = useCallback((pages: NotePage[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
  }, []);

  // Load notes on mount
  useEffect(() => {
    const localPages = loadFromLocal();
    setPages(localPages);
    setLoading(false);
  }, [loadFromLocal]);

  // Sync with local storage on changes
  useEffect(() => {
    if (!loading) {
      saveToLocal(pages);
    }
  }, [pages, loading, saveToLocal]);

  // Create a new page
  const createNewPage = useCallback((parentId: string | null = null, title = 'Untitled') => {
    const newPage = createPage(title, parentId);
    
    setPages(prev => {
      const updated = [...prev, newPage];
      
      // Update parent's children array if parent exists
      if (parentId) {
        return updated.map(p => 
          p.id === parentId 
            ? { ...p, children: [...p.children, newPage.id] }
            : p
        );
      }
      
      return updated;
    });

    return newPage;
  }, []);

  // Update a page
  const updatePage = useCallback((updatedPage: NotePage) => {
    setPages(prev => prev.map(p => p.id === updatedPage.id ? updatedPage : p));
  }, []);

  // Delete a page and its descendants
  const deletePage = useCallback((pageId: string) => {
    setPages(prev => {
      const pageToDelete = prev.find(p => p.id === pageId);
      if (!pageToDelete) return prev;

      // Get all descendant page IDs
      const getDescendants = (id: string): string[] => {
        const children = prev.filter(p => p.parentId === id);
        return [id, ...children.flatMap(c => getDescendants(c.id))];
      };
      
      const idsToDelete = new Set(getDescendants(pageId));

      // Remove deleted pages and update parent's children array
      let remaining = prev.filter(p => !idsToDelete.has(p.id));
      
      if (pageToDelete.parentId) {
        remaining = remaining.map(p => 
          p.id === pageToDelete.parentId
            ? { ...p, children: p.children.filter(c => c !== pageId) }
            : p
        );
      }
      
      return remaining;
    });
  }, []);

  // Duplicate a page
  const duplicatePage = useCallback((pageId: string) => {
    const pageToDuplicate = pages.find(p => p.id === pageId);
    if (!pageToDuplicate) return null;

    const newPage = createPage(`${pageToDuplicate.title} (Copy)`, pageToDuplicate.parentId);
    newPage.blocks = pageToDuplicate.blocks.map(b => ({
      ...b,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));
    newPage.icon = pageToDuplicate.icon;
    newPage.cover = pageToDuplicate.cover;
    newPage.tags = [...pageToDuplicate.tags];

    setPages(prev => [...prev, newPage]);
    return newPage;
  }, [pages]);

  // Move a page to a new parent
  const movePage = useCallback((pageId: string, newParentId: string | null) => {
    setPages(prev => {
      const pageToMove = prev.find(p => p.id === pageId);
      if (!pageToMove) return prev;

      return prev.map(p => {
        // Remove from old parent's children
        if (p.id === pageToMove.parentId) {
          return { ...p, children: p.children.filter(c => c !== pageId) };
        }
        // Add to new parent's children
        if (p.id === newParentId) {
          return { ...p, children: [...p.children, pageId] };
        }
        // Update the page itself
        if (p.id === pageId) {
          return { ...p, parentId: newParentId, updatedAt: new Date().toISOString() };
        }
        return p;
      });
    });
  }, []);

  // Toggle favorite status
  const toggleFavorite = useCallback((pageId: string) => {
    setPages(prev => prev.map(p => 
      p.id === pageId 
        ? { ...p, isFavorite: !p.isFavorite, updatedAt: new Date().toISOString() }
        : p
    ));
  }, []);

  // Archive a page
  const archivePage = useCallback((pageId: string) => {
    setPages(prev => prev.map(p => 
      p.id === pageId 
        ? { ...p, isArchived: true, updatedAt: new Date().toISOString() }
        : p
    ));
  }, []);

  // Restore a page from archive
  const restorePage = useCallback((pageId: string) => {
    setPages(prev => prev.map(p => 
      p.id === pageId 
        ? { ...p, isArchived: false, updatedAt: new Date().toISOString() }
        : p
    ));
  }, []);

  // Get breadcrumbs for a page
  const getBreadcrumbs = useCallback((pageId: string): { id: string; title: string }[] => {
    const breadcrumbs: { id: string; title: string }[] = [];
    let current = pages.find(p => p.id === pageId);
    
    while (current) {
      breadcrumbs.unshift({ id: current.id, title: current.title || 'Untitled' });
      current = current.parentId ? pages.find(p => p.id === current!.parentId) : undefined;
    }
    
    return breadcrumbs;
  }, [pages]);

  // Get child pages
  const getChildPages = useCallback((parentId: string | null) => {
    return pages.filter(p => p.parentId === parentId && !p.isArchived);
  }, [pages]);

  // Search pages
  const searchPages = useCallback((query: string) => {
    const lowerQuery = query.toLowerCase();
    return pages.filter(p => 
      !p.isArchived && (
        p.title.toLowerCase().includes(lowerQuery) ||
        p.tags.some(t => t.toLowerCase().includes(lowerQuery)) ||
        p.blocks.some(b => b.content.toLowerCase().includes(lowerQuery))
      )
    );
  }, [pages]);

  // Get statistics
  const getStats = useCallback(() => {
    const activePAges = pages.filter(p => !p.isArchived);
    return {
      totalPages: activePAges.length,
      favorites: activePAges.filter(p => p.isFavorite).length,
      archived: pages.filter(p => p.isArchived).length,
      totalBlocks: activePAges.reduce((sum, p) => sum + p.blocks.length, 0),
    };
  }, [pages]);

  return {
    pages,
    loading,
    syncing,
    createNewPage,
    updatePage,
    deletePage,
    duplicatePage,
    movePage,
    toggleFavorite,
    archivePage,
    restorePage,
    getBreadcrumbs,
    getChildPages,
    searchPages,
    getStats,
  };
}
