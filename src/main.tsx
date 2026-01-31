import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import TestApp from "./App.test.tsx"; // Uncomment to test minimal app
import "./index.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { validateEnvironment } from "./lib/env-validator";

console.log('Starting application initialization...');

// Global error handler for catching unhandled promise rejections and errors
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled rejection caught:', event.reason);
});

// Validate environment variables before app starts
try {
  const result = validateEnvironment();
  console.log('Environment validation result:', result);
} catch (error) {
  console.error('Failed to initialize application:', error);
}

const rootElement = document.getElementById("root");
console.log('Root element:', rootElement);

if (!rootElement) {
  throw new Error('Root element not found');
}

console.log('Creating React root...');
const root = createRoot(rootElement);

console.log('Rendering app...');
try {
  root.render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
  console.log('App rendered successfully');
} catch (error) {
  console.error('Error rendering app:', error);
  // Fallback: render error message
  root.render(
    <div style={{ padding: '20px', color: 'white', background: '#1a1a1a' }}>
      <h1>Application Error</h1>
      <p>Failed to load the application. Please check the console for details.</p>
      <pre>{String(error)}</pre>
    </div>
  );
}

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration.scope);
        
        // Check for updates periodically
        setInterval(() => {
          registration.update();
        }, 60000); // Check every minute
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}
