import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NotePage, Block, BlockType, createBlock, createPage, EMOJI_LIST } from './types';
import { BlockEditor } from './BlockEditor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Smile, 
  Image as ImageIcon, 
  MoreHorizontal,
  Star,
  StarOff,
  Trash2,
  Copy,
  FileText,
  ChevronRight,
  Home,
  MessageSquare,
  Clock,
  Hash
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Badge } from '@/components/ui/badge';

interface PageEditorProps {
  page: NotePage;
  onUpdatePage: (page: NotePage) => void;
  onDeletePage: (id: string) => void;
  onDuplicatePage: (id: string) => void;
  onNavigateToPage: (id: string) => void;
  breadcrumbs: { id: string; title: string }[];
  allPages: NotePage[];
}

export function PageEditor({
  page,
  onUpdatePage,
  onDeletePage,
  onDuplicatePage,
  onNavigateToPage,
  breadcrumbs,
  allPages,
}: PageEditorProps) {
  const [focusedBlockId, setFocusedBlockId] = useState<string | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleValue, setTitleValue] = useState(page.title);
  const [showTagInput, setShowTagInput] = useState(false);
  const [tagInputValue, setTagInputValue] = useState('');

  useEffect(() => {
    setTitleValue(page.title);
  }, [page.id, page.title]);

  const handleTitleChange = useCallback((newTitle: string) => {
    setTitleValue(newTitle);
  }, []);

  const handleTitleBlur = useCallback(() => {
    setIsEditingTitle(false);
    if (titleValue !== page.title) {
      onUpdatePage({
        ...page,
        title: titleValue || 'Untitled',
        updatedAt: new Date().toISOString(),
      });
    }
  }, [page, titleValue, onUpdatePage]);

  const handleUpdateBlock = useCallback((updatedBlock: Block) => {
    const newBlocks = page.blocks.map(b => 
      b.id === updatedBlock.id ? updatedBlock : b
    );
    onUpdatePage({
      ...page,
      blocks: newBlocks,
      updatedAt: new Date().toISOString(),
    });
  }, [page, onUpdatePage]);

  const handleDeleteBlock = useCallback((id: string) => {
    if (page.blocks.length <= 1) return;
    const newBlocks = page.blocks.filter(b => b.id !== id);
    onUpdatePage({
      ...page,
      blocks: newBlocks,
      updatedAt: new Date().toISOString(),
    });
  }, [page, onUpdatePage]);

  const handleAddBlock = useCallback((afterId: string, type: BlockType = 'paragraph') => {
    const index = page.blocks.findIndex(b => b.id === afterId);
    const newBlock = createBlock(type);
    const newBlocks = [
      ...page.blocks.slice(0, index + 1),
      newBlock,
      ...page.blocks.slice(index + 1),
    ];
    onUpdatePage({
      ...page,
      blocks: newBlocks,
      updatedAt: new Date().toISOString(),
    });
    setTimeout(() => setFocusedBlockId(newBlock.id), 50);
  }, [page, onUpdatePage]);

  const handleMoveBlock = useCallback((id: string, direction: 'up' | 'down') => {
    const index = page.blocks.findIndex(b => b.id === id);
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === page.blocks.length - 1)
    ) return;

    const newBlocks = [...page.blocks];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    [newBlocks[index], newBlocks[newIndex]] = [newBlocks[newIndex], newBlocks[index]];
    
    onUpdatePage({
      ...page,
      blocks: newBlocks,
      updatedAt: new Date().toISOString(),
    });
  }, [page, onUpdatePage]);

  const handleDuplicateBlock = useCallback((id: string) => {
    const index = page.blocks.findIndex(b => b.id === id);
    const blockToDuplicate = page.blocks[index];
    const duplicatedBlock = createBlock(blockToDuplicate.type, blockToDuplicate.content, blockToDuplicate.properties);
    const newBlocks = [
      ...page.blocks.slice(0, index + 1),
      duplicatedBlock,
      ...page.blocks.slice(index + 1),
    ];
    onUpdatePage({
      ...page,
      blocks: newBlocks,
      updatedAt: new Date().toISOString(),
    });
  }, [page, onUpdatePage]);

  const handleSetEmoji = useCallback((emoji: string) => {
    onUpdatePage({
      ...page,
      icon: emoji,
      updatedAt: new Date().toISOString(),
    });
    setShowEmojiPicker(false);
  }, [page, onUpdatePage]);

  const handleToggleFavorite = useCallback(() => {
    onUpdatePage({
      ...page,
      isFavorite: !page.isFavorite,
      updatedAt: new Date().toISOString(),
    });
  }, [page, onUpdatePage]);

  const handleAddTag = useCallback(() => {
    if (tagInputValue.trim() && !page.tags.includes(tagInputValue.trim())) {
      onUpdatePage({
        ...page,
        tags: [...page.tags, tagInputValue.trim()],
        updatedAt: new Date().toISOString(),
      });
      setTagInputValue('');
    }
    setShowTagInput(false);
  }, [page, tagInputValue, onUpdatePage]);

  const handleRemoveTag = useCallback((tag: string) => {
    onUpdatePage({
      ...page,
      tags: page.tags.filter(t => t !== tag),
      updatedAt: new Date().toISOString(),
    });
  }, [page, onUpdatePage]);

  // Get child pages
  const childPages = allPages.filter(p => p.parentId === page.id);

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="border-b px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Breadcrumbs */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink 
                  onClick={() => onNavigateToPage('')}
                  className="cursor-pointer hover:text-primary flex items-center gap-1"
                >
                  <Home className="h-4 w-4" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.id}>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink 
                        onClick={() => onNavigateToPage(crumb.id)}
                        className="cursor-pointer hover:text-primary"
                      >
                        {crumb.title}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleFavorite}
              className={cn(page.isFavorite && "text-yellow-500")}
            >
              {page.isFavorite ? <Star className="h-4 w-4 fill-current" /> : <StarOff className="h-4 w-4" />}
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onDuplicatePage(page.id)}>
                  <Copy className="h-4 w-4 mr-2" />
                  Duplicate Page
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={() => onDeletePage(page.id)}
                  className="text-destructive"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Page
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Content */}
      <ScrollArea className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-8">
          {/* Page Cover */}
          {page.cover && (
            <div className="relative h-48 -mx-6 -mt-8 mb-8 overflow-hidden rounded-b-lg">
              <img 
                src={page.cover} 
                alt="Page cover" 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Page Header */}
          <div className="mb-8">
            {/* Icon */}
            <div className="flex items-center gap-4 mb-4">
              <Popover open={showEmojiPicker} onOpenChange={setShowEmojiPicker}>
                <PopoverTrigger asChild>
                  <button className="text-5xl hover:bg-muted rounded-lg p-2 transition-colors">
                    {page.icon || '📄'}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-2">
                  <div className="grid grid-cols-8 gap-1">
                    {EMOJI_LIST.map((emoji) => (
                      <button
                        key={emoji}
                        onClick={() => handleSetEmoji(emoji)}
                        className="text-xl p-1 hover:bg-muted rounded transition-colors"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>

              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <ImageIcon className="h-4 w-4 mr-1" />
                  Add cover
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Add comment
                </Button>
              </div>
            </div>

            {/* Title */}
            {isEditingTitle ? (
              <Input
                value={titleValue}
                onChange={(e) => handleTitleChange(e.target.value)}
                onBlur={handleTitleBlur}
                onKeyDown={(e) => e.key === 'Enter' && handleTitleBlur()}
                className="text-4xl font-bold border-none px-0 h-auto focus-visible:ring-0"
                autoFocus
              />
            ) : (
              <h1 
                onClick={() => setIsEditingTitle(true)}
                className="text-4xl font-bold cursor-text hover:bg-muted/50 rounded px-1 -mx-1 py-1"
              >
                {page.title || 'Untitled'}
              </h1>
            )}

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              {page.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                  className="gap-1 cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => handleRemoveTag(tag)}
                >
                  <Hash className="h-3 w-3" />
                  {tag}
                </Badge>
              ))}
              {showTagInput ? (
                <Input
                  value={tagInputValue}
                  onChange={(e) => setTagInputValue(e.target.value)}
                  onBlur={handleAddTag}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
                  placeholder="Tag name"
                  className="h-6 w-24 text-xs"
                  autoFocus
                />
              ) : (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 text-xs text-muted-foreground"
                  onClick={() => setShowTagInput(true)}
                >
                  + Add tag
                </Button>
              )}
            </div>

            {/* Metadata */}
            <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Last edited {new Date(page.updatedAt).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Blocks */}
          <div className="space-y-1">
            <AnimatePresence mode="popLayout">
              {page.blocks.map((block, index) => (
                <BlockEditor
                  key={block.id}
                  block={block}
                  onUpdate={handleUpdateBlock}
                  onDelete={handleDeleteBlock}
                  onAddBlock={handleAddBlock}
                  onMoveBlock={handleMoveBlock}
                  onDuplicateBlock={handleDuplicateBlock}
                  isFirst={index === 0}
                  isLast={index === page.blocks.length - 1}
                  focusedBlockId={focusedBlockId}
                  onFocus={setFocusedBlockId}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Child Pages */}
          {childPages.length > 0 && (
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Sub-pages ({childPages.length})
              </h3>
              <div className="grid gap-2">
                {childPages.map((childPage) => (
                  <button
                    key={childPage.id}
                    onClick={() => onNavigateToPage(childPage.id)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
                  >
                    <span className="text-2xl">{childPage.icon || '📄'}</span>
                    <div>
                      <div className="font-medium">{childPage.title || 'Untitled'}</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(childPage.updatedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
