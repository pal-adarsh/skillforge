import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { validateEnvironment } from "./lib/env-validator";

// Validate environment variables before app starts
try {
  validateEnvironment();
} catch (error) {
  console.error('Failed to initialize application:', error);
}

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
