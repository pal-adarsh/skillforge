import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NotePage, NotePageTree } from './types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  ChevronRight,
  ChevronDown,
  Plus,
  Search,
  Star,
  Trash2,
  MoreHorizontal,
  FileText,
  FolderOpen,
  Settings,
  PanelLeftClose,
  PanelLeft,
  Hash,
  Clock,
  Archive
} from 'lucide-react';

interface PageSidebarProps {
  pages: NotePage[];
  currentPageId: string | null;
  onSelectPage: (id: string) => void;
  onCreatePage: (parentId?: string | null) => void;
  onDeletePage: (id: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

interface PageTreeItemProps {
  page: NotePage;
  allPages: NotePage[];
  level: number;
  currentPageId: string | null;
  onSelectPage: (id: string) => void;
  onCreatePage: (parentId?: string | null) => void;
  onDeletePage: (id: string) => void;
}

function PageTreeItem({
  page,
  allPages,
  level,
  currentPageId,
  onSelectPage,
  onCreatePage,
  onDeletePage,
}: PageTreeItemProps) {
  const [isOpen, setIsOpen] = useState(true);
  const children = allPages.filter(p => p.parentId === page.id && !p.isArchived);
  const hasChildren = children.length > 0;
  const isActive = currentPageId === page.id;

  return (
    <div>
      <div
        className={cn(
          "group flex items-center gap-1 py-1 px-2 rounded-lg cursor-pointer transition-colors",
          isActive ? "bg-primary/10 text-primary" : "hover:bg-muted/50"
        )}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
      >
        {hasChildren ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="p-0.5 hover:bg-muted rounded"
          >
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        ) : (
          <span className="w-5" />
        )}

        <button
          onClick={() => onSelectPage(page.id)}
          className="flex items-center gap-2 flex-1 min-w-0 text-left"
        >
          <span className="text-lg shrink-0">{page.icon || '📄'}</span>
          <span className="truncate text-sm">{page.title || 'Untitled'}</span>
          {page.isFavorite && (
            <Star className="h-3 w-3 text-yellow-500 fill-current shrink-0" />
          )}
        </button>

        <div className="opacity-0 group-hover:opacity-100 flex items-center gap-0.5">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={(e) => {
              e.stopPropagation();
              onCreatePage(page.id);
            }}
          >
            <Plus className="h-3 w-3" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={(e) => e.stopPropagation()}
              >
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onCreatePage(page.id)}>
                <Plus className="h-4 w-4 mr-2" />
                Add sub-page
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={() => onDeletePage(page.id)}
                className="text-destructive"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {children.map((child) => (
              <PageTreeItem
                key={child.id}
                page={child}
                allPages={allPages}
                level={level + 1}
                currentPageId={currentPageId}
                onSelectPage={onSelectPage}
                onCreatePage={onCreatePage}
                onDeletePage={onDeletePage}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PageSidebar({
  pages,
  currentPageId,
  onSelectPage,
  onCreatePage,
  onDeletePage,
  isCollapsed,
  onToggleCollapse,
}: PageSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFavorites, setShowFavorites] = useState(true);
  const [showRecent, setShowRecent] = useState(true);

  const rootPages = pages.filter(p => !p.parentId && !p.isArchived);
  const favoritePages = pages.filter(p => p.isFavorite && !p.isArchived);
  const recentPages = [...pages]
    .filter(p => !p.isArchived)
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5);

  const filteredPages = searchQuery
    ? pages.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  if (isCollapsed) {
    return (
      <div className="w-12 border-r flex flex-col items-center py-4 gap-2">
        <Button variant="ghost" size="icon" onClick={onToggleCollapse}>
          <PanelLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => onCreatePage()}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="w-64 border-r flex flex-col bg-muted/30">
      {/* Header */}
      <div className="p-3 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          <span className="font-semibold">Notes</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => onCreatePage()}>
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onToggleCollapse}>
            <PanelLeftClose className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="p-3">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search pages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 h-8"
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {/* Search Results */}
          {searchQuery && (
            <div className="mb-4">
              <div className="px-2 py-1 text-xs font-medium text-muted-foreground">
                Search Results
              </div>
              {filteredPages.length === 0 ? (
                <div className="px-2 py-4 text-sm text-muted-foreground text-center">
                  No pages found
                </div>
              ) : (
                filteredPages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => {
                      onSelectPage(page.id);
                      setSearchQuery('');
                    }}
                    className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-muted/50 text-left"
                  >
                    <span>{page.icon || '📄'}</span>
                    <span className="truncate text-sm">{page.title || 'Untitled'}</span>
                  </button>
                ))
              )}
            </div>
          )}

          {!searchQuery && (
            <>
              {/* Favorites */}
              {favoritePages.length > 0 && (
                <Collapsible open={showFavorites} onOpenChange={setShowFavorites}>
                  <CollapsibleTrigger className="flex items-center gap-1 px-2 py-1 w-full text-xs font-medium text-muted-foreground hover:text-foreground">
                    {showFavorites ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                    <Star className="h-3 w-3" />
                    Favorites
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {favoritePages.map((page) => (
                      <button
                        key={page.id}
                        onClick={() => onSelectPage(page.id)}
                        className={cn(
                          "w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left transition-colors",
                          currentPageId === page.id ? "bg-primary/10 text-primary" : "hover:bg-muted/50"
                        )}
                      >
                        <span>{page.icon || '📄'}</span>
                        <span className="truncate text-sm">{page.title || 'Untitled'}</span>
                      </button>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              )}

              {/* Recent */}
              <Collapsible open={showRecent} onOpenChange={setShowRecent} className="mt-2">
                <CollapsibleTrigger className="flex items-center gap-1 px-2 py-1 w-full text-xs font-medium text-muted-foreground hover:text-foreground">
                  {showRecent ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                  <Clock className="h-3 w-3" />
                  Recent
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {recentPages.map((page) => (
                    <button
                      key={page.id}
                      onClick={() => onSelectPage(page.id)}
                      className={cn(
                        "w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left transition-colors",
                        currentPageId === page.id ? "bg-primary/10 text-primary" : "hover:bg-muted/50"
                      )}
                    >
                      <span>{page.icon || '📄'}</span>
                      <span className="truncate text-sm">{page.title || 'Untitled'}</span>
                    </button>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* All Pages */}
              <div className="mt-4">
                <div className="flex items-center justify-between px-2 py-1">
                  <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                    <FolderOpen className="h-3 w-3" />
                    All Pages
                  </span>
                </div>
                {rootPages.map((page) => (
                  <PageTreeItem
                    key={page.id}
                    page={page}
                    allPages={pages}
                    level={0}
                    currentPageId={currentPageId}
                    onSelectPage={onSelectPage}
                    onCreatePage={onCreatePage}
                    onDeletePage={onDeletePage}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-2 border-t">
        <Button variant="ghost" className="w-full justify-start gap-2 h-8" onClick={() => onCreatePage()}>
          <Plus className="h-4 w-4" />
          <span className="text-sm">New Page</span>
        </Button>
      </div>
    </div>
  );
}
