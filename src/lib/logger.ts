/**
 * Centralized Logging System
 * Provides consistent logging with different levels and optional error tracking
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
  data?: unknown;
  error?: Error;
}

interface LoggerConfig {
  minLevel: LogLevel;
  enableConsole: boolean;
  enableRemote: boolean;
  maxStoredLogs: number;
}

class Logger {
  private config: LoggerConfig;
  private logs: LogEntry[] = [];
  private readonly MAX_LOGS = 500;

  constructor() {
    this.config = {
      minLevel: import.meta.env.DEV ? LogLevel.DEBUG : LogLevel.WARN,
      enableConsole: true,
      enableRemote: import.meta.env.PROD,
      maxStoredLogs: this.MAX_LOGS,
    };
  }

  private formatMessage(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level}] ${message}`;
  }

  private storeLog(entry: LogEntry): void {
    this.logs.push(entry);
    if (this.logs.length > this.config.maxStoredLogs) {
      this.logs = this.logs.slice(-this.config.maxStoredLogs);
    }
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.config.minLevel;
  }

  private sendToRemote(entry: LogEntry): void {
    if (!this.config.enableRemote) return;
    
    // In production, send to error tracking service (Sentry, LogRocket, etc.)
    // This is a placeholder for integration
    if (entry.level >= LogLevel.ERROR) {
      // TODO: Integrate with Sentry or similar service
      // Example: Sentry.captureException(entry.error || new Error(entry.message));
    }
  }

  debug(message: string, ...data: unknown[]): void {
    if (!this.shouldLog(LogLevel.DEBUG)) return;

    const entry: LogEntry = {
      level: LogLevel.DEBUG,
      message,
      timestamp: new Date(),
      data: data.length > 0 ? data : undefined,
    };

    this.storeLog(entry);

    if (this.config.enableConsole) {
      console.debug(this.formatMessage('DEBUG', message), ...data);
    }
  }

  info(message: string, ...data: unknown[]): void {
    if (!this.shouldLog(LogLevel.INFO)) return;

    const entry: LogEntry = {
      level: LogLevel.INFO,
      message,
      timestamp: new Date(),
      data: data.length > 0 ? data : undefined,
    };

    this.storeLog(entry);

    if (this.config.enableConsole) {
      console.info(this.formatMessage('INFO', message), ...data);
    }
  }

  warn(message: string, ...data: unknown[]): void {
    if (!this.shouldLog(LogLevel.WARN)) return;

    const entry: LogEntry = {
      level: LogLevel.WARN,
      message,
      timestamp: new Date(),
      data: data.length > 0 ? data : undefined,
    };

    this.storeLog(entry);
    this.sendToRemote(entry);

    if (this.config.enableConsole) {
      console.warn(this.formatMessage('WARN', message), ...data);
    }
  }

  error(message: string, error?: Error | unknown, ...data: unknown[]): void {
    if (!this.shouldLog(LogLevel.ERROR)) return;

    const entry: LogEntry = {
      level: LogLevel.ERROR,
      message,
      timestamp: new Date(),
      error: error instanceof Error ? error : undefined,
      data: data.length > 0 ? data : undefined,
    };

    this.storeLog(entry);
    this.sendToRemote(entry);

    if (this.config.enableConsole) {
      console.error(this.formatMessage('ERROR', message), error, ...data);
    }
  }

  /**
   * Get recent logs for debugging
   */
  getRecentLogs(count: number = 50): LogEntry[] {
    return this.logs.slice(-count);
  }

  /**
   * Get logs by level
   */
  getLogsByLevel(level: LogLevel): LogEntry[] {
    return this.logs.filter(log => log.level === level);
  }

  /**
   * Clear stored logs
   */
  clearLogs(): void {
    this.logs = [];
  }

  /**
   * Update logger configuration
   */
  configure(config: Partial<LoggerConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Get error statistics
   */
  getErrorStats(): { total: number; byLevel: Record<string, number> } {
    const byLevel = {
      debug: this.logs.filter(l => l.level === LogLevel.DEBUG).length,
      info: this.logs.filter(l => l.level === LogLevel.INFO).length,
      warn: this.logs.filter(l => l.level === LogLevel.WARN).length,
      error: this.logs.filter(l => l.level === LogLevel.ERROR).length,
    };

    return {
      total: this.logs.length,
      byLevel,
    };
  }
}

// Export singleton instance
export const logger = new Logger();

// Export for debugging
if (typeof window !== 'undefined') {
  (window as unknown as { __logger: Logger }).__logger = logger;
}

export default logger;
