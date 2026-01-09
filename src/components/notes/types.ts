import { v4 as uuidv4 } from 'uuid';

export type BlockType = 
  | 'paragraph' 
  | 'heading1' 
  | 'heading2' 
  | 'heading3' 
  | 'bulleted-list' 
  | 'numbered-list' 
  | 'todo' 
  | 'toggle' 
  | 'quote' 
  | 'callout' 
  | 'divider' 
  | 'code' 
  | 'image' 
  | 'table'
  | 'page-link'
  | 'embed';

export interface Block {
  id: string;
  type: BlockType;
  content: string;
  children?: Block[];
  properties?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface NotePage {
  id: string;
  title: string;
  icon?: string;
  cover?: string;
  parentId: string | null;
  blocks: Block[];
  children: string[]; // Child page IDs
  createdAt: string;
  updatedAt: string;
  isFavorite: boolean;
  isArchived: boolean;
  tags: string[];
}

export interface NotePageTree {
  page: NotePage;
  children: NotePageTree[];
}

export function createBlock(type: BlockType, content: string = '', properties?: Record<string, any>): Block {
  const now = new Date().toISOString();
  return {
    id: uuidv4(),
    type,
    content,
    properties,
    children: type === 'toggle' ? [] : undefined,
    createdAt: now,
    updatedAt: now,
  };
}

export function createPage(title: string, parentId: string | null = null): NotePage {
  const now = new Date().toISOString();
  return {
    id: uuidv4(),
    title,
    parentId,
    blocks: [createBlock('paragraph', '')],
    children: [],
    createdAt: now,
    updatedAt: now,
    isFavorite: false,
    isArchived: false,
    tags: [],
  };
}

export const BLOCK_TYPES: { type: BlockType; label: string; icon: string; shortcut: string }[] = [
  { type: 'paragraph', label: 'Text', icon: 'type', shortcut: '/text' },
  { type: 'heading1', label: 'Heading 1', icon: 'heading', shortcut: '/h1' },
  { type: 'heading2', label: 'Heading 2', icon: 'heading', shortcut: '/h2' },
  { type: 'heading3', label: 'Heading 3', icon: 'heading', shortcut: '/h3' },
  { type: 'bulleted-list', label: 'Bulleted List', icon: 'list', shortcut: '/bullet' },
  { type: 'numbered-list', label: 'Numbered List', icon: 'list-ordered', shortcut: '/number' },
  { type: 'todo', label: 'To-do List', icon: 'check-square', shortcut: '/todo' },
  { type: 'toggle', label: 'Toggle List', icon: 'chevron-right', shortcut: '/toggle' },
  { type: 'quote', label: 'Quote', icon: 'quote', shortcut: '/quote' },
  { type: 'callout', label: 'Callout', icon: 'megaphone', shortcut: '/callout' },
  { type: 'divider', label: 'Divider', icon: 'minus', shortcut: '/divider' },
  { type: 'code', label: 'Code Block', icon: 'code', shortcut: '/code' },
  { type: 'image', label: 'Image', icon: 'image', shortcut: '/image' },
  { type: 'table', label: 'Table', icon: 'table', shortcut: '/table' },
  { type: 'page-link', label: 'Link to Page', icon: 'file', shortcut: '/page' },
  { type: 'embed', label: 'Embed', icon: 'globe', shortcut: '/embed' },
];

export const EMOJI_LIST = [
  '📝', '📚', '💡', '🎯', '🚀', '⭐', '💻', '🔥', '✨', '📌',
  '🎨', '🎵', '📊', '📈', '🧠', '💪', '🏆', '🎉', '📅', '⏰',
  '🔔', '📁', '🗂️', '📋', '✅', '❌', '⚡', '🌟', '💎', '🎁',
  '🔒', '🔓', '🔑', '💰', '📱', '💼', '🎓', '🌈', '☀️', '🌙',
];

export function generateId(): string {
  return uuidv4();
}
