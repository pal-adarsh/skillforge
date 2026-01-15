import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NotePage, createPage, createBlock } from '@/components/notes/types';
import { PageSidebar } from '@/components/notes/PageSidebar';
import { PageEditor } from '@/components/notes/PageEditor';
import { AIAssistantPanel } from '@/components/notes/AIAssistantPanel';
import { PageNavigationFlowchart } from '@/components/notes/MermaidFlowchart';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  FileText, 
  Plus, 
  Sparkles, 
  Network,
  BookOpen,
  PanelRightClose,
  PanelRight,
  Trash2,
  FolderOpen
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useFocusMode } from "@/hooks/useFocusMode";
import { FocusModeToggle } from "@/components/ui/focus-mode-toggle";

const STORAGE_KEY = 'skillforge_notes';

export default function Notes() {
  const { user } = useAuth();
  const { toast } = useToast();
  const { 
    isFocusModeEnabled, 
    toggleFocusMode, 
    screenTimeData, 
    tabSwitchCount,
    isFullscreen,
    exitFullscreen
  } = useFocusMode();
  const [pages, setPages] = useState<NotePage[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });
  const [currentPageId, setCurrentPageId] = useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showAIPanel, setShowAIPanel] = useState(true);
  const [showFlowchartDialog, setShowFlowchartDialog] = useState(false);

  // Persist pages to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
  }, [pages]);

  // Get current page
  const currentPage = pages.find(p => p.id === currentPageId) || null;

  // Get breadcrumbs for current page
  const getBreadcrumbs = useCallback((pageId: string): { id: string; title: string }[] => {
    const breadcrumbs: { id: string; title: string }[] = [];
    let current = pages.find(p => p.id === pageId);
    
    while (current) {
      breadcrumbs.unshift({ id: current.id, title: current.title || 'Untitled' });
      current = current.parentId ? pages.find(p => p.id === current!.parentId) : undefined;
    }
    
    return breadcrumbs;
  }, [pages]);

  const handleCreatePage = useCallback((parentId: string | null = null) => {
    const newPage = createPage('Untitled', parentId);
    
    setPages(prev => {
      const updated = [...prev, newPage];
      
      // If parent exists, update its children array
      if (parentId) {
        return updated.map(p => 
          p.id === parentId 
            ? { ...p, children: [...p.children, newPage.id] }
            : p
        );
      }
      
      return updated;
    });
    
    setCurrentPageId(newPage.id);
    
    toast({
      title: 'Page created',
      description: 'New page has been created',
    });
  }, [toast]);

  const handleUpdatePage = useCallback((updatedPage: NotePage) => {
    setPages(prev => prev.map(p => p.id === updatedPage.id ? updatedPage : p));
  }, []);

  const handleDeletePage = useCallback((pageId: string) => {
    const pageToDelete = pages.find(p => p.id === pageId);
    if (!pageToDelete) return;

    // Get all descendant page IDs
    const getDescendants = (id: string): string[] => {
      const children = pages.filter(p => p.parentId === id);
      return [id, ...children.flatMap(c => getDescendants(c.id))];
    };
    
    const idsToDelete = new Set(getDescendants(pageId));

    setPages(prev => {
      // Remove deleted pages
      const remaining = prev.filter(p => !idsToDelete.has(p.id));
      
      // Remove from parent's children array
      if (pageToDelete.parentId) {
        return remaining.map(p => 
          p.id === pageToDelete.parentId
            ? { ...p, children: p.children.filter(c => c !== pageId) }
            : p
        );
      }
      
      return remaining;
    });

    // Navigate away if deleting current page
    if (idsToDelete.has(currentPageId || '')) {
      setCurrentPageId(pageToDelete.parentId || pages.find(p => !idsToDelete.has(p.id))?.id || null);
    }

    toast({
      title: 'Page deleted',
      description: `"${pageToDelete.title || 'Untitled'}" has been deleted`,
    });
  }, [pages, currentPageId, toast]);

  const handleDuplicatePage = useCallback((pageId: string) => {
    const pageToDuplicate = pages.find(p => p.id === pageId);
    if (!pageToDuplicate) return;

    const newPage: NotePage = {
      ...createPage(`${pageToDuplicate.title} (Copy)`, pageToDuplicate.parentId),
      blocks: pageToDuplicate.blocks.map(b => ({
        ...createBlock(b.type, b.content, b.properties),
      })),
      icon: pageToDuplicate.icon,
      cover: pageToDuplicate.cover,
      tags: [...pageToDuplicate.tags],
    };

    setPages(prev => [...prev, newPage]);
    setCurrentPageId(newPage.id);

    toast({
      title: 'Page duplicated',
      description: 'A copy of the page has been created',
    });
  }, [pages, toast]);

  const handleNavigateToPage = useCallback((pageId: string) => {
    if (pageId === '') {
      setCurrentPageId(null);
    } else {
      setCurrentPageId(pageId);
    }
  }, []);

  // Empty state
  if (pages.length === 0 && !currentPageId) {
    return (
      <div className="min-h-screen pt-20 pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center py-20"
          >
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <FileText className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Welcome to Notes</h1>
              <p className="text-muted-foreground mb-8">
                Create powerful, AI-enhanced notes with Notion-like blocks, flowcharts, and multi-language support.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <Card className="p-4 text-left">
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium mb-1">Block-based Editor</h3>
                <p className="text-sm text-muted-foreground">
                  Create rich notes with headings, lists, code blocks, and more.
                </p>
              </Card>
              <Card className="p-4 text-left">
                <Sparkles className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium mb-1">AI Assistant</h3>
                <p className="text-sm text-muted-foreground">
                  Ask questions, generate summaries, and create flowcharts.
                </p>
              </Card>
              <Card className="p-4 text-left">
                <Network className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium mb-1">Visual Navigation</h3>
                <p className="text-sm text-muted-foreground">
                  View your notes structure as interactive flowcharts.
                </p>
              </Card>
            </div>

            <Button size="lg" onClick={() => handleCreatePage()}>
              <Plus className="h-5 w-5 mr-2" />
              Create Your First Page
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen pt-16 flex flex-col">
      {/* Focus Mode Toggle - Upper Right */}
      <div className="fixed top-20 right-4 z-40">
        <FocusModeToggle
          isEnabled={isFocusModeEnabled}
          onToggle={toggleFocusMode}
          totalTime={screenTimeData.totalTime}
          focusTime={screenTimeData.focusTime}
          tabSwitchCount={tabSwitchCount}
          isFullscreen={isFullscreen}
          onExitFullscreen={exitFullscreen}
        />
      </div>
      
      {/* Header */}
      <div className="border-b px-4 py-2 flex items-center justify-between bg-background/95 backdrop-blur">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          <span className="font-semibold">Notes</span>
          <Badge variant="secondary">{pages.length} pages</Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <Dialog open={showFlowchartDialog} onOpenChange={setShowFlowchartDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Network className="h-4 w-4 mr-2" />
                View Structure
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
              <DialogHeader>
                <DialogTitle>Page Structure</DialogTitle>
              </DialogHeader>
              <PageNavigationFlowchart
                pages={pages.map(p => ({
                  id: p.id,
                  title: p.title,
                  parentId: p.parentId,
                  icon: p.icon,
                }))}
                onSelectPage={(id) => {
                  handleNavigateToPage(id);
                  setShowFlowchartDialog(false);
                }}
                currentPageId={currentPageId || undefined}
              />
            </DialogContent>
          </Dialog>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowAIPanel(!showAIPanel)}
          >
            {showAIPanel ? <PanelRightClose className="h-4 w-4" /> : <PanelRight className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          {/* Sidebar */}
          <ResizablePanel 
            defaultSize={20} 
            minSize={sidebarCollapsed ? 3 : 15}
            maxSize={sidebarCollapsed ? 5 : 30}
          >
            <PageSidebar
              pages={pages}
              currentPageId={currentPageId}
              onSelectPage={handleNavigateToPage}
              onCreatePage={handleCreatePage}
              onDeletePage={handleDeletePage}
              isCollapsed={sidebarCollapsed}
              onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
            />
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Editor */}
          <ResizablePanel defaultSize={showAIPanel ? 55 : 80} minSize={40}>
            {currentPage ? (
              <PageEditor
                page={currentPage}
                onUpdatePage={handleUpdatePage}
                onDeletePage={handleDeletePage}
                onDuplicatePage={handleDuplicatePage}
                onNavigateToPage={handleNavigateToPage}
                breadcrumbs={getBreadcrumbs(currentPage.id)}
                allPages={pages}
              />
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
                <FolderOpen className="h-16 w-16 mb-4 opacity-50" />
                <p className="text-lg mb-2">Select a page to start editing</p>
                <p className="text-sm mb-4">Or create a new page from the sidebar</p>
                <Button variant="outline" onClick={() => handleCreatePage()}>
                  <Plus className="h-4 w-4 mr-2" />
                  New Page
                </Button>
              </div>
            )}
          </ResizablePanel>

          {/* AI Panel */}
          {showAIPanel && (
            <>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
                <div className="h-full p-2">
                  <AIAssistantPanel
                    currentPage={currentPage}
                    allPages={pages}
                    onUpdatePage={handleUpdatePage}
                  />
                </div>
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
