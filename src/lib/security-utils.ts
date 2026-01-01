// Enhanced Security utilities for input validation, rate limiting, and protection

// CSRF Token Management
class CSRFManager {
  private token: string | null = null;
  
  generateToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    this.token = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    sessionStorage.setItem('csrf_token', this.token);
    return this.token;
  }
  
  getToken(): string {
    if (!this.token) {
      this.token = sessionStorage.getItem('csrf_token');
      if (!this.token) {
        return this.generateToken();
      }
    }
    return this.token;
  }
  
  validateToken(token: string): boolean {
    return token === this.getToken();
  }
  
  rotateToken(): string {
    return this.generateToken();
  }
}

export const csrfManager = new CSRFManager();

// Enhanced Rate Limiter with exponential backoff
export class RateLimiter {
  private requests: Map<string, { timestamps: number[]; blocked: boolean; blockedUntil: number }> = new Map();
  private readonly maxRequests: number;
  private readonly windowMs: number;
  private readonly blockDurationMs: number;

  constructor(maxRequests: number = 10, windowMs: number = 60000, blockDurationMs: number = 300000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.blockDurationMs = blockDurationMs;
  }

  isAllowed(key: string): boolean {
    const now = Date.now();
    let record = this.requests.get(key);
    
    if (!record) {
      record = { timestamps: [], blocked: false, blockedUntil: 0 };
      this.requests.set(key, record);
    }
    
    // Check if blocked
    if (record.blocked && now < record.blockedUntil) {
      return false;
    }
    
    // Reset block if time has passed
    if (record.blocked && now >= record.blockedUntil) {
      record.blocked = false;
      record.timestamps = [];
    }
    
    // Remove old requests outside the window
    record.timestamps = record.timestamps.filter(time => now - time < this.windowMs);
    
    if (record.timestamps.length >= this.maxRequests) {
      record.blocked = true;
      record.blockedUntil = now + this.blockDurationMs;
      logSecurityEvent('rate_limit_exceeded', { key, blockedUntil: record.blockedUntil });
      return false;
    }
    
    record.timestamps.push(now);
    return true;
  }

  reset(key: string): void {
    this.requests.delete(key);
  }
  
  getRemainingRequests(key: string): number {
    const record = this.requests.get(key);
    if (!record) return this.maxRequests;
    const validTimestamps = record.timestamps.filter(time => Date.now() - time < this.windowMs);
    return Math.max(0, this.maxRequests - validTimestamps.length);
  }
  
  getBlockedUntil(key: string): number | null {
    const record = this.requests.get(key);
    if (!record || !record.blocked) return null;
    return record.blockedUntil;
  }
}

export const progressRateLimiter = new RateLimiter(20, 60000, 300000);
export const authRateLimiter = new RateLimiter(5, 60000, 900000); // 5 attempts per minute, 15 min block
export const apiRateLimiter = new RateLimiter(100, 60000, 60000); // 100 requests per minute

// Enhanced input sanitization utilities
export const sanitizeString = (input: string, maxLength: number = 255): string => {
  if (typeof input !== 'string') return '';
  // Remove null bytes and control characters
  const cleaned = input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  return cleaned.trim().slice(0, maxLength);
};

export const sanitizeNumber = (input: unknown, min: number = 0, max: number = Number.MAX_SAFE_INTEGER): number | null => {
  const num = Number(input);
  if (isNaN(num) || !isFinite(num)) return null;
  return Math.min(Math.max(num, min), max);
};

export const sanitizeUrl = (url: string): string | null => {
  try {
    const parsed = new URL(url);
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return null;
    }
    return parsed.href;
  } catch {
    return null;
  }
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const validatePassword = (password: string): { valid: boolean; errors: string[]; strength: 'weak' | 'medium' | 'strong' } => {
  const errors: string[] = [];
  let score = 0;
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  } else {
    score += 1;
  }
  
  if (password.length >= 12) score += 1;
  if (password.length >= 16) score += 1;
  
  if (!/[A-Za-z]/.test(password)) {
    errors.push('Password must contain at least one letter');
  } else {
    score += 1;
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  } else {
    score += 1;
  }
  
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    score += 1;
  }
  
  if (password.length > 128) {
    errors.push('Password must be less than 128 characters');
  }
  
  // Check for common patterns
  const commonPatterns = ['password', '123456', 'qwerty', 'abc123', 'letmein'];
  if (commonPatterns.some(pattern => password.toLowerCase().includes(pattern))) {
    errors.push('Password contains common patterns');
    score = Math.max(0, score - 2);
  }
  
  const strength: 'weak' | 'medium' | 'strong' = score < 3 ? 'weak' : score < 5 ? 'medium' : 'strong';
  
  return {
    valid: errors.length === 0,
    errors,
    strength
  };
};

// XSS prevention with DOMPurify-like sanitization
export const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };
  return text.replace(/[&<>"'`=/]/g, char => map[char] || char);
};

// Secure random ID generation
export const generateSecureId = (length: number = 16): string => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Content Security Policy helpers
export const validateUserContent = (content: string): boolean => {
  // Check for potentially dangerous patterns
  const dangerousPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
    /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
    /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi,
    /data:/gi,
    /vbscript:/gi,
  ];
  
  return !dangerousPatterns.some(pattern => pattern.test(content));
};

// SQL Injection prevention helper (for edge functions)
export const escapeSqlString = (str: string): string => {
  return str.replace(/'/g, "''").replace(/\\/g, '\\\\');
};

// Session management
class SessionManager {
  private readonly SESSION_KEY = 'app_session';
  private readonly SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 hours
  
  createSession(userId: string): void {
    const session = {
      userId,
      createdAt: Date.now(),
      lastActivity: Date.now(),
      fingerprint: this.generateFingerprint()
    };
    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
  }
  
  validateSession(): boolean {
    const sessionData = sessionStorage.getItem(this.SESSION_KEY);
    if (!sessionData) return false;
    
    try {
      const session = JSON.parse(sessionData);
      const now = Date.now();
      
      // Check session timeout
      if (now - session.lastActivity > this.SESSION_TIMEOUT) {
        this.destroySession();
        return false;
      }
      
      // Validate fingerprint
      if (session.fingerprint !== this.generateFingerprint()) {
        logSecurityEvent('session_fingerprint_mismatch', { userId: session.userId });
        this.destroySession();
        return false;
      }
      
      // Update last activity
      session.lastActivity = now;
      sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
      return true;
    } catch {
      this.destroySession();
      return false;
    }
  }
  
  destroySession(): void {
    sessionStorage.removeItem(this.SESSION_KEY);
    csrfManager.rotateToken();
  }
  
  private generateFingerprint(): string {
    const components = [
      navigator.userAgent,
      navigator.language,
      screen.width,
      screen.height,
      new Date().getTimezoneOffset()
    ];
    return btoa(components.join('|'));
  }
}

export const sessionManager = new SessionManager();

// Integrity hash for sensitive data
export const generateHash = async (data: string): Promise<string> => {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
};

// Audit logging for security events
interface SecurityEvent {
  timestamp: number;
  event: string;
  details: Record<string, unknown>;
}

const securityEvents: SecurityEvent[] = [];
const MAX_EVENTS = 100;

export const logSecurityEvent = (event: string, details: Record<string, unknown> = {}): void => {
  const securityEvent: SecurityEvent = {
    timestamp: Date.now(),
    event,
    details: { ...details, userAgent: navigator.userAgent }
  };
  
  securityEvents.push(securityEvent);
  
  // Keep only last N events
  if (securityEvents.length > MAX_EVENTS) {
    securityEvents.shift();
  }
  
  if (import.meta.env.DEV) {
    console.warn(`[Security] ${event}`, details);
  }
};

export const getSecurityEvents = (): SecurityEvent[] => {
  return [...securityEvents];
};

// Input validation schemas
export const validators = {
  isUUID: (value: string): boolean => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(value);
  },
  
  isPositiveInteger: (value: unknown): boolean => {
    const num = Number(value);
    return Number.isInteger(num) && num > 0;
  },
  
  isDateString: (value: string): boolean => {
    const date = new Date(value);
    return !isNaN(date.getTime());
  },
  
  isSafeFilename: (filename: string): boolean => {
    const unsafePatterns = /[<>:"/\\|?*\x00-\x1f]/;
    return !unsafePatterns.test(filename) && filename.length <= 255;
  }
};