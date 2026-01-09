/**
 * Client-side Rate Limiter
 * Prevents API abuse by limiting request frequency
 */

import { securityMonitor } from './security-monitor';

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

class RateLimiter {
  private requests: Map<string, number[]> = new Map();

  check(key: string, config: RateLimitConfig): boolean {
    const now = Date.now();
    const windowStart = now - config.windowMs;

    // Get existing requests for this key
    const timestamps = this.requests.get(key) || [];
    
    // Filter out old requests outside the time window
    const recentRequests = timestamps.filter(time => time > windowStart);

    // Check if limit exceeded
    if (recentRequests.length >= config.maxRequests) {
      securityMonitor.log('rate_limit', `Rate limit exceeded for ${key}`);
      return false;
    }

    // Add current request
    recentRequests.push(now);
    this.requests.set(key, recentRequests);

    // Cleanup old keys periodically
    if (Math.random() < 0.01) {
      this.cleanup();
    }

    return true;
  }

  private cleanup(): void {
    const now = Date.now();
    this.requests.forEach((timestamps, key) => {
      const recent = timestamps.filter(time => time > now - 60000);
      if (recent.length === 0) {
        this.requests.delete(key);
      } else {
        this.requests.set(key, recent);
      }
    });
  }

  reset(key: string): void {
    this.requests.delete(key);
  }
}

export const rateLimiter = new RateLimiter();

// Rate limit configurations
export const RATE_LIMITS = {
  GEMINI_API: { maxRequests: 5, windowMs: 60000 }, // 5 requests per minute
  AUTH: { maxRequests: 10, windowMs: 300000 }, // 10 requests per 5 minutes
  GENERAL: { maxRequests: 30, windowMs: 60000 }, // 30 requests per minute
} as const;
