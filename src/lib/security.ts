/**
 * Security Utilities - Comprehensive Security Layer
 * Implements advanced security measures to prevent attacks
 */

import { logger } from './logger';

// ========================================
// CSRF Protection
// ========================================

export class CSRFManager {
  private static instance: CSRFManager;
  private token: string | null = null;

  private constructor() {
    this.initializeToken();
  }

  static getInstance(): CSRFManager {
    if (!CSRFManager.instance) {
      CSRFManager.instance = new CSRFManager();
    }
    return CSRFManager.instance;
  }

  private initializeToken(): void {
    // Check for existing token
    this.token = sessionStorage.getItem('csrf_token');
    
    if (!this.token) {
      this.regenerateToken();
    }
  }

  regenerateToken(): string {
    // Fallback for randomUUID in non-secure contexts
    const token = typeof crypto.randomUUID === 'function' 
      ? crypto.randomUUID() 
      : Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
    
    this.token = token;
    
    // Store in sessionStorage (cleared on tab close)
    sessionStorage.setItem('csrf_token', token);
    
    // Also set as secure cookie (HTTP-only can only be set by server)
    // For client-side, we use SameSite=Strict
    document.cookie = `csrf_token=${token}; SameSite=Strict; Secure; Path=/; Max-Age=43200`; // 12 hours
    
    logger.info('CSRF token regenerated');
    return token;
  }

  getToken(): string {
    if (!this.token) {
      return this.regenerateToken();
    }
    return this.token;
  }

  /**
   * Add CSRF token to request headers
   */
  addToHeaders(headers: Headers = new Headers()): Headers {
    headers.set('X-CSRF-Token', this.getToken());
    return headers;
  }

  /**
   * Validate CSRF token from response
   */
  validateToken(token: string): boolean {
    return token === this.token && token !== null;
  }

  /**
   * Clear CSRF token (logout)
   */
  clear(): void {
    this.token = null;
    sessionStorage.removeItem('csrf_token');
    document.cookie = 'csrf_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
}

// ========================================
// Session Security & Fingerprinting
// ========================================

interface SessionMetadata {
  fingerprint: string;
  createdAt: number;
  lastActivity: number;
  ipAddress?: string;
  userAgent: string;
  deviceId: string;
  timezone: string;
  language: string;
  screenResolution: string;
}

export class SecureSessionManager {
  private static readonly IDLE_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  private static readonly ABSOLUTE_TIMEOUT = 12 * 60 * 60 * 1000; // 12 hours
  private static readonly SESSION_KEY = 'secure_session_metadata';

  /**
   * Generate device fingerprint
   */
  static async generateFingerprint(): Promise<string> {
    const components = [
      navigator.userAgent,
      navigator.language,
      navigator.platform,
      screen.colorDepth,
      screen.width + 'x' + screen.height,
      new Date().getTimezoneOffset(),
      !!window.sessionStorage,
      !!window.localStorage,
      navigator.hardwareConcurrency || 'unknown',
      (navigator as any).deviceMemory || 'unknown', // Non-standard but widely supported
    ];

    const data = components.join('|||');
    
    // Fallback if crypto.subtle is not available
    if (!this.isSecureContext()) {
      // Simple hash approximation for non-secure contexts
      let hash = 0;
      for (let i = 0; i < data.length; i++) {
        const char = data.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
      }
      return 'insecure-' + Math.abs(hash).toString(16);
    }

    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Check if secure context is available
   */
  static isSecureContext(): boolean {
    return typeof window !== 'undefined' && 
           window.isSecureContext && 
           !!window.crypto && 
           !!window.crypto.subtle;
  }

  /**
   * Generate unique device ID (stored in localStorage)
   */
  static getDeviceId(): string {
    let deviceId = localStorage.getItem('device_id');
    
    if (!deviceId) {
      deviceId = typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : Math.random().toString(36).substring(2);
      localStorage.setItem('device_id', deviceId);
    }
    
    return deviceId;
  }

  /**
   * Create new session metadata
   */
  static async createSession(): Promise<SessionMetadata> {
    const fingerprint = await this.generateFingerprint();
    const metadata: SessionMetadata = {
      fingerprint,
      createdAt: Date.now(),
      lastActivity: Date.now(),
      userAgent: navigator.userAgent,
      deviceId: this.getDeviceId(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      screenResolution: `${screen.width}x${screen.height}`,
    };

    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(metadata));
    logger.info('Session created', { deviceId: metadata.deviceId });
    return metadata;
  }

  /**
   * Get current session metadata
   */
  static getSession(): SessionMetadata | null {
    const data = sessionStorage.getItem(this.SESSION_KEY);
    if (!data) return null;

    try {
      return JSON.parse(data) as SessionMetadata;
    } catch {
      return null;
    }
  }

  /**
   * Update last activity timestamp
   */
  static updateActivity(): void {
    const session = this.getSession();
    if (session) {
      session.lastActivity = Date.now();
      sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
    }
  }

  /**
   * Validate session security
   */
  static async validateSession(): Promise<{
    valid: boolean;
    reason?: string;
  }> {
    const session = this.getSession();
    
    if (!session) {
      return { valid: false, reason: 'No session found' };
    }

    const now = Date.now();

    // Check idle timeout
    if (now - session.lastActivity > this.IDLE_TIMEOUT) {
      logger.warn('Session idle timeout');
      return { valid: false, reason: 'Session idle timeout' };
    }

    // Check absolute timeout
    if (now - session.createdAt > this.ABSOLUTE_TIMEOUT) {
      logger.warn('Session absolute timeout');
      return { valid: false, reason: 'Session expired' };
    }

    // Verify fingerprint hasn't changed
    const currentFingerprint = await this.generateFingerprint();
    if (currentFingerprint !== session.fingerprint) {
      logger.error('Session fingerprint mismatch - possible hijacking attempt');
      return { valid: false, reason: 'Security validation failed' };
    }

    // Verify device ID
    if (this.getDeviceId() !== session.deviceId) {
      logger.error('Device ID mismatch - possible hijacking attempt');
      return { valid: false, reason: 'Security validation failed' };
    }

    return { valid: true };
  }

  /**
   * Clear session data
   */
  static clearSession(): void {
    sessionStorage.removeItem(this.SESSION_KEY);
    logger.info('Session cleared');
  }
}

// ========================================
// Password Security
// ========================================

export class PasswordSecurity {
  // Common passwords to reject
  private static readonly COMMON_PASSWORDS = new Set([
    'password', 'password123', '12345678', 'qwerty', 'abc123',
    'monkey', '1234567', 'letmein', 'trustno1', 'dragon',
    'baseball', 'iloveyou', 'master', 'sunshine', 'ashley',
    'bailey', 'passw0rd', 'shadow', '123123', '654321',
    'superman', 'qazwsx', 'michael', 'Football', 'welcome',
  ]);

  /**
   * Check password strength
   */
  static checkStrength(password: string): {
    score: number; // 0-4
    feedback: string[];
    isStrong: boolean;
  } {
    const feedback: string[] = [];
    let score = 0;

    // Length check
    if (password.length >= 12) score++;
    else feedback.push('Use at least 12 characters');

    if (password.length >= 16) score++;

    // Character variety
    if (/[a-z]/.test(password)) score++;
    else feedback.push('Include lowercase letters');

    if (/[A-Z]/.test(password)) score++;
    else feedback.push('Include uppercase letters');

    if (/[0-9]/.test(password)) score++;
    else feedback.push('Include numbers');

    if (/[@$!%*?&#^()_+=\-[\]{}|\\:;"'<>,.\/]/.test(password)) score++;
    else feedback.push('Include special characters');

    // Penalize for patterns
    if (/(.)\1{2,}/.test(password)) {
      score = Math.max(0, score - 1);
      feedback.push('Avoid repeated characters');
    }

    if (/(?:abc|bcd|cde|012|123|234|345|456|567|678|789)/i.test(password)) {
      score = Math.max(0, score - 1);
      feedback.push('Avoid sequential characters');
    }

    if (/(?:qwerty|asdfgh|zxcvbn)/i.test(password)) {
      score = Math.max(0, score - 1);
      feedback.push('Avoid keyboard patterns');
    }

    // Check against common passwords
    if (this.COMMON_PASSWORDS.has(password.toLowerCase())) {
      score = 0;
      feedback.push('This password is too common');
    }

    // Normalize score to 0-4
    score = Math.min(4, Math.max(0, score));

    return {
      score,
      feedback,
      isStrong: score >= 4 && feedback.length === 0,
    };
  }

  /**
   * Generate strong password
   */
  static generateStrongPassword(length: number = 16): string {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const special = '@$!%*?&#^()_+-=[]{}|;:,.<>';
    const allChars = lowercase + uppercase + numbers + special;

    let password = '';
    
    // Ensure at least one of each type
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];

    // Fill the rest
    for (let i = password.length; i < length; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle
    return password.split('').sort(() => Math.random() - 0.5).join('');
  }
}

// ========================================
// Content Security
// ========================================

export class ContentSecurity {
  /**
   * Detect potentially malicious content
   */
  static detectMaliciousPatterns(content: string): {
    isSafe: boolean;
    threats: string[];
  } {
    const threats: string[] = [];

    // XSS patterns
    if (/<script[^>]*>.*?<\/script>/gi.test(content)) {
      threats.push('Detected <script> tags');
    }

    if (/javascript:/gi.test(content)) {
      threats.push('Detected javascript: protocol');
    }

    if (/on\w+\s*=/gi.test(content)) {
      threats.push('Detected inline event handlers');
    }

    // SQL injection patterns
    if (/(\bUNION\b.*\bSELECT\b|\bDROP\b.*\bTABLE\b)/gi.test(content)) {
      threats.push('Detected potential SQL injection');
    }

    // Command injection
    if (/[;&|`$(){}[\]<>]/.test(content) && content.length > 100) {
      threats.push('Detected shell metacharacters');
    }

    // Path traversal
    if (/\.\.[\/\\]/.test(content)) {
      threats.push('Detected path traversal attempt');
    }

    return {
      isSafe: threats.length === 0,
      threats,
    };
  }

  /**
   * Sanitize filename for safe storage
   */
  static sanitizeFilename(filename: string): string {
    // Remove path separators and special chars
    return filename
      .replace(/[^a-zA-Z0-9._-]/g, '_')
      .replace(/\.{2,}/g, '.')
      .substring(0, 255);
  }

  /**
   * Validate file type by magic numbers
   */
  static async validateFileType(file: File, expectedType: string): Promise<boolean> {
    const buffer = await file.slice(0, 4).arrayBuffer();
    const bytes = new Uint8Array(buffer);
    const hex = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');

    const signatures: Record<string, string[]> = {
      'application/pdf': ['25504446'], // %PDF
      'image/png': ['89504e47'],
      'image/jpeg': ['ffd8ffe0', 'ffd8ffe1', 'ffd8ffe2'],
      'image/gif': ['47494638'],
    };

    const validSignatures = signatures[expectedType] || [];
    return validSignatures.some(sig => hex.startsWith(sig));
  }
}

// ========================================
// Export singleton instances
// ========================================

export const csrfManager = CSRFManager.getInstance();

export default {
  csrfManager,
  SecureSessionManager,
  PasswordSecurity,
  ContentSecurity,
};
