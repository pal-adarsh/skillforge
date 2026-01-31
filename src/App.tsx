import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { PWAInstallBanner } from "@/components/ui/pwa-install-banner";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Loader2 } from "lucide-react";
import { SecureSessionManager, csrfManager } from "@/lib/security";
import { logger } from "@/lib/logger";
import { validateEnvironment } from "@/lib/env-validator";

// Lazy load pages for better performance (code splitting)
const Landing = lazy(() => import("./pages/Landing"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Lessons = lazy(() => import("./pages/Lessons"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Profile = lazy(() => import("./pages/Profile"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const Rewards = lazy(() => import("./pages/Rewards"));
const GeneralKnowledge = lazy(() => import("./pages/GeneralKnowledge"));
const Notes = lazy(() => import("./pages/Notes"));
const Pomodoro = lazy(() => import("./pages/Pomodoro"));
const PDFAnalyzer = lazy(() => import("./pages/PDFAnalyzer"));
const Docs = lazy(() => import("./pages/Docs"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

// Configure React Query with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

// Security and session initialization
const SecurityInitializer = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log('SecurityInitializer: Starting...');
    
    // Validate environment on startup
    try {
      const envResult = validateEnvironment();
      if (envResult.warnings.length > 0) {
        logger.warn('Environment validation warnings', envResult.warnings);
      }
      console.log('SecurityInitializer: Environment validated');
    } catch (error) {
      console.error('SecurityInitializer: Environment validation failed', error);
    }

    // Initialize session security
    SecureSessionManager.createSession()
      .then(() => console.log('SecurityInitializer: Session created'))
      .catch(err => {
        console.error('SecurityInitializer: Failed to create secure session', err);
        logger.error('Failed to create secure session', err);
      });

    // Initialize CSRF token
    try {
      csrfManager.regenerateToken();
      console.log('SecurityInitializer: CSRF token generated');
    } catch (error) {
      console.error('SecurityInitializer: CSRF token generation failed', error);
    }

    // Validate session periodically
    const sessionCheck = setInterval(async () => {
      try {
        const result = await SecureSessionManager.validateSession();
        if (!result.valid) {
          logger.warn('Session validation failed', result.reason);
          // Clear invalid session
          SecureSessionManager.clearSession();
        } else {
          // Update activity timestamp
          SecureSessionManager.updateActivity();
        }
      } catch (error) {
        console.error('SecurityInitializer: Session check failed', error);
      }
    }, 5 * 60 * 1000); // Check every 5 minutes

    // Activity tracking
    const trackActivity = () => {
      try {
        SecureSessionManager.updateActivity();
      } catch (error) {
        console.error('SecurityInitializer: Activity tracking failed', error);
      }
    };
    window.addEventListener('click', trackActivity);
    window.addEventListener('keydown', trackActivity);
    window.addEventListener('scroll', trackActivity);

    console.log('SecurityInitializer: Initialized successfully');

    return () => {
      clearInterval(sessionCheck);
      window.removeEventListener('click', trackActivity);
      window.removeEventListener('keydown', trackActivity);
      window.removeEventListener('scroll', trackActivity);
    };
  }, []);

  return <>{children}</>;
};

const App = () => {
  console.log('App: Rendering...');
  
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <SecurityInitializer>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AuthProvider>
                <div className="min-h-screen bg-background">
                  <Navigation />
                  <PWAInstallBanner />
                  <Suspense fallback={<PageLoader />}>
                    <Routes>
                      <Route path="/" element={<Landing />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/dashboard" element={
                        <ProtectedRoute>
                          <Dashboard />
                        </ProtectedRoute>
                      } />
                      <Route path="/lessons" element={
                        <ProtectedRoute>
                          <Lessons />
                        </ProtectedRoute>
                      } />
                      <Route path="/lessons/:classId" element={
                        <ProtectedRoute>
                          <Lessons />
                        </ProtectedRoute>
                      } />
                      <Route path="/quiz" element={
                        <ProtectedRoute>
                          <Quiz />
                        </ProtectedRoute>
                      } />
                      <Route path="/profile" element={
                        <ProtectedRoute>
                          <Profile />
                        </ProtectedRoute>
                      } />
                      <Route path="/leaderboard" element={
                        <ProtectedRoute>
                          <Leaderboard />
                        </ProtectedRoute>
                      } />
                      <Route path="/rewards" element={
                        <ProtectedRoute>
                          <Rewards />
                        </ProtectedRoute>
                      } />
                      <Route path="/gk" element={
                        <ProtectedRoute>
                          <GeneralKnowledge />
                        </ProtectedRoute>
                      } />
                      <Route path="/notes" element={
                        <ProtectedRoute>
                          <Notes />
                        </ProtectedRoute>
                      } />
                      <Route path="/docs" element={
                        <ProtectedRoute>
                          <Docs />
                        </ProtectedRoute>
                      } />
                      <Route path="/pomodoro" element={
                        <ProtectedRoute>
                          <Pomodoro />
                        </ProtectedRoute>
                      } />
                      <Route path="/pdf" element={
                        <ProtectedRoute>
                          <PDFAnalyzer />
                        </ProtectedRoute>
                      } />
                      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </div>
              </AuthProvider>
            </BrowserRouter>
          </SecurityInitializer>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
