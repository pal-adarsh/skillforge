/**
 * Security Monitoring Utilities
 * Helps detect and log security-related events
 */

interface SecurityEvent {
  type: 'rate_limit' | 'invalid_input' | 'api_error' | 'auth_failure';
  timestamp: number;
  details: string;
}

class SecurityMonitor {
  private events: SecurityEvent[] = [];
  private maxEvents = 100;

  log(type: SecurityEvent['type'], details: string): void {
    const event: SecurityEvent = {
      type,
      timestamp: Date.now(),
      details,
    };

    this.events.push(event);

    // Keep only recent events
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }

    // Log to console in development
    if (import.meta.env.DEV) {
      console.warn(`[Security] ${type}:`, details);
    }
  }

  getRecentEvents(minutes: number = 5): SecurityEvent[] {
    const cutoff = Date.now() - minutes * 60 * 1000;
    return this.events.filter(event => event.timestamp > cutoff);
  }

  getEventsByType(type: SecurityEvent['type']): SecurityEvent[] {
    return this.events.filter(event => event.type === type);
  }

  clear(): void {
    this.events = [];
  }

  // Get security statistics
  getStats() {
    const now = Date.now();
    const last5min = now - 5 * 60 * 1000;
    const recent = this.events.filter(e => e.timestamp > last5min);

    return {
      total: this.events.length,
      last5Minutes: recent.length,
      byType: {
        rate_limit: recent.filter(e => e.type === 'rate_limit').length,
        invalid_input: recent.filter(e => e.type === 'invalid_input').length,
        api_error: recent.filter(e => e.type === 'api_error').length,
        auth_failure: recent.filter(e => e.type === 'auth_failure').length,
      },
    };
  }
}

export const securityMonitor = new SecurityMonitor();

// Add to window for debugging in production
if (typeof window !== 'undefined') {
  (window as any).__securityMonitor = securityMonitor;
}
