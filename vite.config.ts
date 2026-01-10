import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Performance optimizations
    rollupOptions: {
      output: {
        // Code splitting for better caching
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['framer-motion', 'lucide-react', 'recharts'],
          'vendor-utils': ['date-fns', 'zod', 'uuid'],
          'vendor-ai': ['@google/generative-ai'],
          'vendor-pdf': ['pdfjs-dist'],
          'vendor-markdown': ['react-markdown', 'react-syntax-highlighter', 'mermaid'],
        },
      },
    },
    // Enable source maps for production debugging
    sourcemap: mode === 'development',
    // Minification
    minify: 'esbuild',
    // Target modern browsers
    target: 'es2020',
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      '@google/generative-ai',
    ],
    exclude: ['pdfjs-dist'],
  },
  // Enable gzip compression preview
  preview: {
    port: 4173,
    host: true,
  },
}));