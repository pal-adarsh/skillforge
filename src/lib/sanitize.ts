/**
 * Input Sanitization Utilities
 * Protects against XSS and injection attacks
 */

/**
 * Sanitizes HTML to prevent XSS attacks
 */
export function sanitizeHtml(html: string): string {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}

/**
 * Sanitizes user input for safe display
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim()
    .substring(0, 1000); // Limit length
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
  
  return answer
    .replace(/[<>{}]/g, '') // Remove potentially dangerous chars
    .trim()
    .substring(0, 500); // Reasonable answer length
}

/**
 * Content Security Policy helper
 */
export const CSP_DIRECTIVES = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://fonts.googleapis.com'],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'font-src': ["'self'", 'https://fonts.gstatic.com'],
  'img-src': ["'self'", 'data:', 'https:', 'blob:'],
  'connect-src': ["'self'", 'https://*.supabase.co', 'https://generativelanguage.googleapis.com'],
  'frame-ancestors': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
} as const;
