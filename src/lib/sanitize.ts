/**
 * Input Sanitization Utilities
 * Protects against XSS and injection attacks using DOMPurify
 */

import DOMPurify from 'dompurify';
import { logger } from './logger';

// ========================================
// DOMPurify Configuration
// ========================================

// Default configuration for general HTML sanitization
const DEFAULT_CONFIG: DOMPurify.Config = {
  ALLOWED_TAGS: [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'p', 'br', 'hr',
    'ul', 'ol', 'li',
    'strong', 'em', 'b', 'i', 'u', 's', 'strike',
    'a', 'code', 'pre', 'blockquote',
    'table', 'thead', 'tbody', 'tr', 'th', 'td',
    'img', 'figure', 'figcaption',
    'div', 'span',
  ],
  ALLOWED_ATTR: [
    'href', 'title', 'alt', 'src', 'width', 'height',
    'class', 'id',
  ],
  ALLOW_DATA_ATTR: false,
  ALLOW_UNKNOWN_PROTOCOLS: false,
};

// Mermaid-specific configuration (allows SVG)
const MERMAID_CONFIG: DOMPurify.Config = {
  ALLOWED_TAGS: [
    ...DEFAULT_CONFIG.ALLOWED_TAGS as string[],
    'svg', 'g', 'path', 'rect', 'circle', 'line', 'text', 'defs',
    'marker', 'polygon', 'polyline', 'ellipse', 'style', 'foreignObject',
  ],
  ALLOWED_ATTR: [
    ...DEFAULT_CONFIG.ALLOWED_ATTR as string[],
    'd', 'fill', 'stroke', 'stroke-width', 'transform', 'viewBox',
    'x', 'y', 'x1', 'x2', 'y1', 'y2', 'cx', 'cy', 'r', 'rx', 'ry',
    'points', 'marker-end', 'marker-start', 'font-size', 'text-anchor',
    'dominant-baseline', 'dx', 'dy', 'opacity', 'fill-opacity', 'stroke-opacity',
    'xmlns', 'xmlns:xlink', 'style',
  ],
  ADD_TAGS: ['switch'],
  ADD_ATTR: ['requiredFeatures', 'requiredExtensions', 'systemLanguage'],
};

// ========================================
// Core Sanitization Functions
// ========================================

/**
 * Sanitizes HTML using DOMPurify to prevent XSS attacks
 */
export function sanitizeHtml(html: string): string {
  if (!html || typeof html !== 'string') return '';
  
  try {
    // Add hook to force rel="noopener noreferrer" on links with target="_blank"
    DOMPurify.addHook('afterSanitizeAttributes', (node) => {
      if (node.tagName === 'A' && node.hasAttribute('target')) {
        node.setAttribute('rel', 'noopener noreferrer');
      }
    });
    
    const clean = DOMPurify.sanitize(html, DEFAULT_CONFIG);
    DOMPurify.removeHook('afterSanitizeAttributes');
    return clean;
  } catch (error) {
    logger.error('Error sanitizing HTML', error);
    return '';
  }
}

/**
 * Sanitizes Mermaid diagram SVG output
 */
export function sanitizeMermaid(svg: string): string {
  if (!svg || typeof svg !== 'string') return '';
  
  try {
    return DOMPurify.sanitize(svg, MERMAID_CONFIG);
  } catch (error) {
    logger.error('Error sanitizing Mermaid SVG', error);
    return '';
  }
}

/**
 * Strips all HTML tags, returning plain text
 */
export function stripHtml(html: string): string {
  if (!html || typeof html !== 'string') return '';
  
  try {
    return DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
  } catch (error) {
    logger.error('Error stripping HTML', error);
    return '';
  }
}

/**
 * Sanitizes user input for safe display (legacy function, now uses DOMPurify)
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  
  // Use DOMPurify for safety, but also apply length limit
  const sanitized = DOMPurify.sanitize(input, { ALLOWED_TAGS: [] });
  return sanitized.trim().substring(0, 1000);
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Validates URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
}

/**
 * Removes dangerous characters from JSON strings
 */
export function sanitizeJsonInput(input: string): string {
  return input.replace(/[<>]/g, '');
}

/**
 * Validates and sanitizes user answers
 */
export function sanitizeAnswer(answer: string): string {
  if (!answer) return '';
  
  // Use DOMPurify for safety
  const sanitized = DOMPurify.sanitize(answer, { ALLOWED_TAGS: [] });
  return sanitized.trim().substring(0, 500);
}

/**
 * Sanitize a URL to prevent javascript: and other dangerous protocols
 */
export function sanitizeUrl(url: string): string {
  if (!url || typeof url !== 'string') return '';
  
  const trimmedUrl = url.trim().toLowerCase();
  
  // Block dangerous protocols
  const dangerousProtocols = [
    'javascript:',
    'vbscript:',
    'data:text/html',
    'data:application',
  ];

  for (const protocol of dangerousProtocols) {
    if (trimmedUrl.startsWith(protocol)) {
      logger.warn('Blocked dangerous URL protocol', { url: url.substring(0, 50) });
      return '';
    }
  }

  return url;
}

/**
 * Escape HTML entities in a string (for displaying as text)
 */
export function escapeHtml(str: string): string {
  if (!str || typeof str !== 'string') return '';
  
  const escapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;',
  };

  return str.replace(/[&<>"'`]/g, (char) => escapeMap[char] || char);
}

/**
 * Check if a string contains potential XSS patterns
 */
export function hasDangerousPatterns(str: string): boolean {
  if (!str || typeof str !== 'string') return false;

  const dangerousPatterns = [
    /<script\b/i,
    /javascript:/i,
    /on\w+\s*=/i, // onclick=, onerror=, etc.
    /data:text\/html/i,
    /<iframe\b/i,
    /<object\b/i,
    /<embed\b/i,
    /expression\s*\(/i,
  ];

  return dangerousPatterns.some(pattern => pattern.test(str));
}

/**
 * Content Security Policy helper (updated for security)
 */
export const CSP_DIRECTIVES = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'"], // Removed unsafe-eval
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'font-src': ["'self'", 'https://fonts.gstatic.com'],
  'img-src': ["'self'", 'data:', 'https:', 'blob:'],
  'connect-src': ["'self'", 'https://*.supabase.co', 'https://generativelanguage.googleapis.com'],
  'frame-ancestors': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'object-src': ["'none'"],
  'upgrade-insecure-requests': [],
} as const;

export default {
  sanitizeHtml,
  sanitizeMermaid,
  stripHtml,
  sanitizeInput,
  sanitizeAnswer,
  sanitizeUrl,
  escapeHtml,
  hasDangerousPatterns,
  isValidEmail,
  isValidUrl,
};
