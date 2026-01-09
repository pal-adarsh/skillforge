import React, { useState, useRef, useCallback, KeyboardEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Block, BlockType, BLOCK_TYPES, createBlock } from './types';
import { 
  GripVertical, 
  Plus, 
  Trash2, 
  Type, 
  Heading1, 
  Heading2, 
  Heading3, 
  List, 
  ListOrdered,
  CheckSquare,
  ChevronRight,
  ChevronDown,
  Quote,
  AlertCircle,
  Code,
  Minus,
  Image,
  Table,
  FileText,
  Globe,
  MoreHorizontal,
  Copy,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';

interface BlockEditorProps {
  block: Block;
  onUpdate: (block: Block) => void;
  onDelete: (id: string) => void;
  onAddBlock: (afterId: string, type?: BlockType) => void;
  onMoveBlock: (id: string, direction: 'up' | 'down') => void;
  onDuplicateBlock: (id: string) => void;
  isFirst: boolean;
  isLast: boolean;
  focusedBlockId: string | null;
  onFocus: (id: string) => void;
}

const ICON_MAP: Record<BlockType, React.ElementType> = {
  'paragraph': Type,
  'heading1': Heading1,
  'heading2': Heading2,
  'heading3': Heading3,
  'bulleted-list': List,
  'numbered-list': ListOrdered,
  'todo': CheckSquare,
  'toggle': ChevronRight,
  'quote': Quote,
  'callout': AlertCircle,
  'divider': Minus,
  'code': Code,
  'image': Image,
  'table': Table,
  'page-link': FileText,
  'embed': Globe,
};

export function BlockEditor({
  block,
  onUpdate,
  onDelete,
  onAddBlock,
  onMoveBlock,
  onDuplicateBlock,
  isFirst,
  isLast,
  focusedBlockId,
  onFocus,
}: BlockEditorProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [showBlockPicker, setShowBlockPicker] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const isFocused = focusedBlockId === block.id;

  const handleContentChange = useCallback(() => {
    if (contentRef.current) {
      const newContent = contentRef.current.innerText;
      if (newContent !== block.content) {
        onUpdate({
          ...block,
          content: newContent,
          updatedAt: new Date().toISOString(),
        });
      }
    }
  }, [block, onUpdate]);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    // Handle slash command
    if (e.key === '/' && contentRef.current?.innerText === '') {
      e.preventDefault();
      setShowBlockPicker(true);
    }
    
    // Handle Enter key
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleContentChange();
      onAddBlock(block.id);
    }
    
    // Handle Backspace on empty block
    if (e.key === 'Backspace' && contentRef.current?.innerText === '') {
      e.preventDefault();
      onDelete(block.id);
    }
  }, [block.id, handleContentChange, onAddBlock, onDelete]);

  const handleTypeChange = useCallback((newType: BlockType) => {
    onUpdate({
      ...block,
      type: newType,
      updatedAt: new Date().toISOString(),
    });
    setShowBlockPicker(false);
    contentRef.current?.focus();
  }, [block, onUpdate]);

  const handleTodoToggle = useCallback(() => {
    onUpdate({
      ...block,
      properties: {
        ...block.properties,
        checked: !block.properties?.checked,
      },
      updatedAt: new Date().toISOString(),
    });
  }, [block, onUpdate]);

  const filteredBlockTypes = BLOCK_TYPES.filter(bt => 
    bt.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bt.shortcut.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderBlockContent = () => {
    switch (block.type) {
      case 'heading1':
        return (
          <div
            ref={contentRef}
            contentEditable
            suppressContentEditableWarning
            onBlur={handleContentChange}
            onKeyDown={handleKeyDown}
            onFocus={() => onFocus(block.id)}
            className="text-3xl font-bold outline-none w-full py-1"
            data-placeholder="Heading 1"
          >
            {block.content}
          </div>
        );
      
      case 'heading2':
        return (
          <div
            ref={contentRef}
            contentEditable
            suppressContentEditableWarning
            onBlur={handleContentChange}
            onKeyDown={handleKeyDown}
            onFocus={() => onFocus(block.id)}
            className="text-2xl font-semibold outline-none w-full py-1"
            data-placeholder="Heading 2"
          >
            {block.content}
          </div>
        );
      
      case 'heading3':
        return (
          <div
            ref={contentRef}
            contentEditable
            suppressContentEditableWarning
            onBlur={handleContentChange}
            onKeyDown={handleKeyDown}
            onFocus={() => onFocus(block.id)}
            className="text-xl font-semibold outline-none w-full py-1"
            data-placeholder="Heading 3"
          >
            {block.content}
          </div>
        );
      
      case 'bulleted-list':
        return (
          <div className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
            <div
              ref={contentRef}
              contentEditable
              suppressContentEditableWarning
              onBlur={handleContentChange}
              onKeyDown={handleKeyDown}
              onFocus={() => onFocus(block.id)}
              className="outline-none w-full py-1"
              data-placeholder="List item"
            >
              {block.content}
            </div>
          </div>
        );
      
      case 'numbered-list':
        return (
          <div className="flex items-start gap-2">
            <span className="text-muted-foreground shrink-0">
              {(block.properties?.index || 1)}.
            </span>
            <div
              ref={contentRef}
              contentEditable
              suppressContentEditableWarning
              onBlur={handleContentChange}
              onKeyDown={handleKeyDown}
              onFocus={() => onFocus(block.id)}
              className="outline-none w-full py-1"
              data-placeholder="List item"
            >
              {block.content}
            </div>
          </div>
        );
      
      case 'todo':
        return (
          <div className="flex items-start gap-2">
            <Checkbox
              checked={block.properties?.checked || false}
              onCheckedChange={handleTodoToggle}
              className="mt-1"
            />
            <div
              ref={contentRef}
              contentEditable
              suppressContentEditableWarning
              onBlur={handleContentChange}
              onKeyDown={handleKeyDown}
              onFocus={() => onFocus(block.id)}
              className={cn(
                "outline-none w-full py-1",
                block.properties?.checked && "line-through text-muted-foreground"
              )}
              data-placeholder="To-do"
            >
              {block.content}
            </div>
          </div>
        );
      
      case 'toggle':
        return (
          <div>
            <div className="flex items-start gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 shrink-0"
                onClick={() => setIsToggleOpen(!isToggleOpen)}
              >
                {isToggleOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>
              <div
                ref={contentRef}
                contentEditable
                suppressContentEditableWarning
                onBlur={handleContentChange}
                onKeyDown={handleKeyDown}
                onFocus={() => onFocus(block.id)}
                className="outline-none w-full py-1"
                data-placeholder="Toggle"
              >
                {block.content}
              </div>
            </div>
            <AnimatePresence>
              {isToggleOpen && block.children && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="ml-6 pl-4 border-l-2 border-muted mt-2"
                >
                  {/* Child blocks would be rendered here */}
                  <div className="text-sm text-muted-foreground py-2">
                    Click to add nested content
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      
      case 'quote':
        return (
          <div className="border-l-4 border-primary pl-4 py-1">
            <div
              ref={contentRef}
              contentEditable
              suppressContentEditableWarning
              onBlur={handleContentChange}
              onKeyDown={handleKeyDown}
              onFocus={() => onFocus(block.id)}
              className="outline-none w-full italic text-muted-foreground"
              data-placeholder="Quote"
            >
              {block.content}
            </div>
          </div>
        );
      
      case 'callout':
        return (
          <div className="flex gap-3 p-4 rounded-lg bg-muted/50 border">
            <span className="text-xl">{block.properties?.emoji || '💡'}</span>
            <div
              ref={contentRef}
              contentEditable
              suppressContentEditableWarning
              onBlur={handleContentChange}
              onKeyDown={handleKeyDown}
              onFocus={() => onFocus(block.id)}
              className="outline-none w-full"
              data-placeholder="Callout"
            >
              {block.content}
            </div>
          </div>
        );
      
      case 'divider':
        return <hr className="border-t border-muted my-4" />;
      
      case 'code':
        return (
          <div className="rounded-lg bg-muted/50 border overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/30">
              <span className="text-xs text-muted-foreground font-mono">
                {block.properties?.language || 'Plain text'}
              </span>
            </div>
            <div
              ref={contentRef}
              contentEditable
              suppressContentEditableWarning
              onBlur={handleContentChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  document.execCommand('insertLineBreak');
                  e.preventDefault();
                }
              }}
              onFocus={() => onFocus(block.id)}
              className="p-4 font-mono text-sm outline-none whitespace-pre-wrap"
              data-placeholder="// Code"
            >
              {block.content}
            </div>
          </div>
        );
      
      case 'image':
        return (
          <div className="rounded-lg overflow-hidden border bg-muted/50">
            {block.properties?.url ? (
              <img 
                src={block.properties.url} 
                alt={block.content || 'Image'} 
                className="w-full"
              />
            ) : (
              <div className="flex items-center justify-center p-8 text-muted-foreground">
                <Image className="h-8 w-8 mr-2" />
                <span>Add image URL</span>
              </div>
            )}
          </div>
        );
      
      default:
        return (
          <div
            ref={contentRef}
            contentEditable
            suppressContentEditableWarning
            onBlur={handleContentChange}
            onKeyDown={handleKeyDown}
            onFocus={() => onFocus(block.id)}
            className="outline-none w-full py-1 min-h-[1.5em]"
            data-placeholder="Type '/' for commands"
          >
            {block.content}
          </div>
        );
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={cn(
        "group relative flex items-start gap-1 py-1 px-2 -mx-2 rounded-lg transition-colors",
        isFocused && "bg-muted/30",
        "hover:bg-muted/20"
      )}
    >
      {/* Block Controls */}
      <div className={cn(
        "flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 pt-1",
        isFocused && "opacity-100"
      )}>
        <Popover open={showBlockPicker} onOpenChange={setShowBlockPicker}>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Plus className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-0" align="start">
            <div className="p-2 border-b">
              <input
                type="text"
                placeholder="Search blocks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-2 py-1 text-sm bg-transparent outline-none"
                autoFocus
              />
            </div>
            <ScrollArea className="h-64">
              <div className="p-1">
                {filteredBlockTypes.map((bt) => {
                  const Icon = ICON_MAP[bt.type];
                  return (
                    <button
                      key={bt.type}
                      onClick={() => handleTypeChange(bt.type)}
                      className="w-full flex items-center gap-2 px-2 py-1.5 rounded hover:bg-muted text-left"
                    >
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{bt.label}</span>
                      <span className="text-xs text-muted-foreground ml-auto">
                        {bt.shortcut}
                      </span>
                    </button>
                  );
                })}
              </div>
            </ScrollArea>
          </PopoverContent>
        </Popover>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6 cursor-grab">
              <GripVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => onDuplicateBlock(block.id)}>
              <Copy className="h-4 w-4 mr-2" />
              Duplicate
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onMoveBlock(block.id, 'up')}
              disabled={isFirst}
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Move Up
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onMoveBlock(block.id, 'down')}
              disabled={isLast}
            >
              <ArrowDown className="h-4 w-4 mr-2" />
              Move Down
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={() => onDelete(block.id)}
              className="text-destructive"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Block Content */}
      <div className="flex-1 min-w-0">
        {renderBlockContent()}
      </div>
    </motion.div>
  );
}
