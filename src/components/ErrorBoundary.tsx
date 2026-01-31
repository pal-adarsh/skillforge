import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { logger } from '@/lib/logger';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in child component tree,
 * logs errors, and displays a fallback UI
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Generate unique error ID for tracking
    const errorId = `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    return { hasError: true, error, errorId };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log to centralized logger
    logger.error('React Error Boundary caught an error', error, {
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
    });

    // Call optional error handler
    this.props.onError?.(error, errorInfo);

    // Store error info for display
    this.setState({ errorInfo });

    // In production, send to error tracking service
    if (import.meta.env.PROD) {
      this.reportError(error, errorInfo);
    }
  }

  private reportError(error: Error, errorInfo: ErrorInfo): void {
    // TODO: Integrate with Sentry or similar service
    // Example:
    // Sentry.captureException(error, { extra: { componentStack: errorInfo.componentStack } });
    
    // For now, we store in localStorage for debugging
    try {
      const errorReport = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorId: this.state.errorId,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      };
      
      const existingReports = JSON.parse(localStorage.getItem('error_reports') || '[]');
      existingReports.push(errorReport);
      
      // Keep only last 10 reports
      const recentReports = existingReports.slice(-10);
      localStorage.setItem('error_reports', JSON.stringify(recentReports));
    } catch {
      // Silently fail if localStorage is full
    }
  }

  private handleReload = (): void => {
    window.location.reload();
  };

  private handleGoHome = (): void => {
    window.location.href = '/';
  };

  private handleRetry = (): void => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background">
          <Card className="max-w-lg w-full glass-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full bg-destructive/10">
                <AlertTriangle className="h-12 w-12 text-destructive" />
              </div>
              <CardTitle className="text-2xl">Something went wrong</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center text-muted-foreground">
                We're sorry for the inconvenience. An unexpected error has occurred.
              </p>
              
              {import.meta.env.DEV && this.state.error && (
                <div className="p-4 bg-muted rounded-lg overflow-auto max-h-40">
                  <p className="font-mono text-sm text-destructive">
                    {this.state.error.message}
                  </p>
                  {this.state.error.stack && (
                    <pre className="mt-2 text-xs text-muted-foreground whitespace-pre-wrap">
                      {this.state.error.stack}
                    </pre>
                  )}
                </div>
              )}

              {this.state.errorId && (
                <p className="text-center text-xs text-muted-foreground">
                  Error ID: {this.state.errorId}
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-2 justify-center pt-4">
                <Button onClick={this.handleRetry} variant="default" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </Button>
                <Button onClick={this.handleReload} variant="outline" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Reload Page
                </Button>
                <Button onClick={this.handleGoHome} variant="ghost" className="gap-2">
                  <Home className="h-4 w-4" />
                  Go Home
                </Button>
              </div>

              {import.meta.env.DEV && (
                <div className="pt-4 border-t">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full gap-2 text-muted-foreground"
                    onClick={() => {
                      console.group('Error Details');
                      console.error('Error:', this.state.error);
                      console.error('Component Stack:', this.state.errorInfo?.componentStack);
                      console.groupEnd();
                    }}
                  >
                    <Bug className="h-4 w-4" />
                    Log Error Details to Console
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * HOC to wrap components with error boundary
 */
export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallback?: ReactNode
): React.FC<P> {
  return function WithErrorBoundaryWrapper(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
}

export default ErrorBoundary;
