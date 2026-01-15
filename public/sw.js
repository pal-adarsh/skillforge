// Enhanced LearnAI Service Worker for PWA Offline Functionality
const CACHE_NAME = 'learnai-v3';
const STATIC_CACHE_NAME = 'learnai-static-v3';
const API_CACHE_NAME = 'learnai-api-v3';
const CONTENT_CACHE_NAME = 'learnai-content-v3';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/placeholder.svg'
];

// App shell routes for offline access
const APP_SHELL_ROUTES = [
  '/',
  '/dashboard',
  '/lessons',
  '/quiz',
  '/profile',
  '/login',
  '/gk',
  '/leaderboard',
  '/rewards',
  '/notes',
  '/pomodoro',
  '/pdf'
];

// API endpoints to cache
const API_ENDPOINTS = [
  '/api/lessons',
  '/api/quiz',
  '/api/profile'
];

// Supabase endpoints (cache for offline)
const SUPABASE_PATTERNS = [
  /supabase\.co\/rest\/v1/,
  /supabase\.co\/storage\/v1/
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing v2...');
  
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        console.log('[Service Worker] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      }),
      
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating v2...');
  
  const currentCaches = [STATIC_CACHE_NAME, API_CACHE_NAME, CACHE_NAME, CONTENT_CACHE_NAME];
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!currentCaches.includes(cacheName)) {
              console.log('[Service Worker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      
      // Claim all clients
      self.clients.claim()
    ])
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  event.respondWith(handleFetch(request));
});

async function handleFetch(request) {
  const url = new URL(request.url);
  
  try {
    // Strategy 1: Static Assets - Cache First with Background Update
    if (isStaticAsset(url.pathname)) {
      return await cacheFirstWithUpdate(request, STATIC_CACHE_NAME);
    }
    
    // Strategy 2: Supabase API - Network First with Stale While Revalidate
    if (isSupabaseCall(url.href)) {
      return await staleWhileRevalidate(request, API_CACHE_NAME);
    }
    
    // Strategy 3: API Calls - Network First with fallback
    if (isApiCall(url.pathname)) {
      return await networkFirstWithFallback(request, API_CACHE_NAME);
    }
    
    // Strategy 4: App Shell - Cache First with Network Fallback
    if (isAppShell(url.pathname)) {
      return await cacheFirstWithNetworkFallback(request, CACHE_NAME);
    }
    
    // Strategy 5: GK Content - Stale While Revalidate
    if (url.pathname.includes('/gk') || url.pathname.includes('/lessons')) {
      return await staleWhileRevalidate(request, CONTENT_CACHE_NAME);
    }
    
    // Strategy 6: Everything else - Network First
    return await networkFirst(request);
    
  } catch (error) {
    console.error('[Service Worker] Fetch failed:', error);
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return await getOfflinePage();
    }
    
    throw error;
  }
}

// Cache First with Background Update Strategy
async function cacheFirstWithUpdate(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  // Start background update
  const updatePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      await cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => null);
  
  if (cachedResponse) {
    // Return cached response, update in background
    return cachedResponse;
  }
  
  // No cache, wait for network
  const networkResponse = await updatePromise;
  if (networkResponse) return networkResponse;
  
  throw new Error('No cache or network response');
}

// Cache First Strategy
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  
  if (networkResponse.ok) {
    const cache = await caches.open(cacheName);
    await cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// Network First Strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Network First with API Fallback
async function networkFirstWithFallback(request, cacheName) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    const networkResponse = await fetch(request, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      await cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    
    throw new Error('Network response not ok');
  } catch (error) {
    console.log('[Service Worker] Network failed, trying cache:', request.url);
    
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline data for API calls
    return new Response(
      JSON.stringify({ 
        offline: true, 
        message: 'This content is not available offline',
        cachedAt: null
      }),
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'X-Offline-Response': 'true'
        }
      }
    );
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  // Start network fetch in background
  const fetchPromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      await cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => null);
  
  // Return cached response immediately if available
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Otherwise wait for network
  const networkResponse = await fetchPromise;
  if (networkResponse) return networkResponse;
  
  // Fallback response
  return new Response(
    JSON.stringify({ offline: true, message: 'Content unavailable' }),
    { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

// Cache First with Network Fallback
async function cacheFirstWithNetworkFallback(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    // Update cache in background
    fetch(request).then(async (networkResponse) => {
      if (networkResponse.ok) {
        const cache = await caches.open(cacheName);
        await cache.put(request, networkResponse);
      }
    }).catch(() => {
      // Ignore network errors for background updates
    });
    
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  
  if (networkResponse.ok) {
    const cache = await caches.open(cacheName);
    await cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// Helper functions to determine caching strategy
function isStaticAsset(pathname) {
  return pathname.includes('/assets/') || 
         pathname.includes('/images/') ||
         pathname.endsWith('.js') ||
         pathname.endsWith('.css') ||
         pathname.endsWith('.woff2') ||
         pathname.endsWith('.woff') ||
         pathname.endsWith('.ttf') ||
         pathname.endsWith('.png') ||
         pathname.endsWith('.jpg') ||
         pathname.endsWith('.jpeg') ||
         pathname.endsWith('.svg') ||
         pathname.endsWith('.ico') ||
         pathname.endsWith('.webp');
}

function isApiCall(pathname) {
  return pathname.startsWith('/api/') || 
         API_ENDPOINTS.some(endpoint => pathname.startsWith(endpoint));
}

function isSupabaseCall(href) {
  return SUPABASE_PATTERNS.some(pattern => pattern.test(href));
}

function isAppShell(pathname) {
  return APP_SHELL_ROUTES.includes(pathname) ||
         pathname === '/' ||
         pathname.startsWith('/dashboard') ||
         pathname.startsWith('/lessons') ||
         pathname.startsWith('/quiz') ||
         pathname.startsWith('/profile') ||
         pathname.startsWith('/gk') ||
         pathname.startsWith('/leaderboard') ||
         pathname.startsWith('/rewards') ||
         pathname.startsWith('/notes') ||
         pathname.startsWith('/pomodoro') ||
         pathname.startsWith('/pdf');
}

// Enhanced Offline page fallback
async function getOfflinePage() {
  return new Response(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>SkillForge - Offline</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#1e293b">
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: system-ui, -apple-system, sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #e2e8f0;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 1rem;
          }
          .container {
            max-width: 400px;
            text-align: center;
            animation: fadeIn 0.5s ease-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          h1 { 
            color: #3b82f6; 
            font-size: 1.75rem;
            margin-bottom: 1rem;
          }
          p { 
            line-height: 1.6; 
            margin-bottom: 1rem;
            color: #94a3b8;
          }
          .features {
            background: rgba(59, 130, 246, 0.1);
            border-radius: 1rem;
            padding: 1.5rem;
            margin: 1.5rem 0;
            text-align: left;
          }
          .features h3 {
            color: #60a5fa;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 0.75rem;
          }
          .features ul {
            list-style: none;
          }
          .features li {
            padding: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
            color: #cbd5e1;
          }
          .features li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #22c55e;
          }
          button {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
            border: none;
            padding: 0.875rem 2rem;
            border-radius: 0.75rem;
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
          }
          button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
          }
          button:active {
            transform: translateY(0);
          }
          .status {
            margin-top: 1.5rem;
            font-size: 0.875rem;
            color: #64748b;
          }
          .status-dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            background: #ef4444;
            border-radius: 50%;
            margin-right: 0.5rem;
            animation: blink 1.5s infinite;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="icon">🧠</div>
          <h1>You're Offline</h1>
          <p>Don't worry! Your learning continues even without internet.</p>
          
          <div class="features">
            <h3>Available Offline</h3>
            <ul>
              <li>Access cached lessons</li>
              <li>Take practice quizzes</li>
              <li>View your progress</li>
              <li>Auto-sync when back online</li>
            </ul>
          </div>
          
          <button onclick="window.location.reload()">Try Again</button>
          
          <div class="status">
            <span class="status-dot"></span>
            Waiting for connection...
          </div>
        </div>
        
        <script>
          // Auto-reload when back online
          window.addEventListener('online', () => {
            window.location.reload();
          });
        </script>
      </body>
    </html>
  `, {
    status: 200,
    headers: { 'Content-Type': 'text/html' }
  });
}

// Background sync for uploading offline data
self.addEventListener('sync', (event) => {
  console.log('[Service Worker] Background sync triggered:', event.tag);
  
  if (event.tag === 'upload-offline-data') {
    event.waitUntil(uploadOfflineData());
  }
  
  if (event.tag === 'sync-progress') {
    event.waitUntil(syncProgress());
  }
});

async function uploadOfflineData() {
  try {
    console.log('[Service Worker] Uploading offline data...');
    
    const clients = await self.clients.matchAll();
    clients.forEach(client => {
      client.postMessage({
        type: 'SYNC_STARTED'
      });
    });
    
    // Notify clients to handle sync (they have access to IndexedDB)
    clients.forEach(client => {
      client.postMessage({
        type: 'SYNC_COMPLETE',
        success: true
      });
    });
    
  } catch (error) {
    console.error('[Service Worker] Failed to upload offline data:', error);
    
    const clients = await self.clients.matchAll();
    clients.forEach(client => {
      client.postMessage({
        type: 'SYNC_FAILED',
        error: error.message
      });
    });
  }
}

async function syncProgress() {
  console.log('[Service Worker] Syncing progress...');
  
  const clients = await self.clients.matchAll();
  clients.forEach(client => {
    client.postMessage({
      type: 'SYNC_PROGRESS_REQUEST'
    });
  });
}

// Push notification support
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  
  const options = {
    body: data.body || 'New learning content available!',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      url: data.url || '/',
      primaryKey: data.primaryKey || '1'
    },
    actions: [
      {
        action: 'explore',
        title: 'Start Learning',
        icon: '/favicon.ico'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ],
    tag: data.tag || 'skillforge-notification',
    renotify: true
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'SkillForge', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  const url = event.notification.data?.url || '/';
  
  if (event.action === 'explore' || !event.action) {
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then((clientList) => {
        // Check if there's already a window open
        for (const client of clientList) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            client.navigate(url);
            return client.focus();
          }
        }
        // Open new window if none exists
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
    );
  }
});

// Periodic background sync (for browsers that support it)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'content-sync') {
    event.waitUntil(syncContent());
  }
});

async function syncContent() {
  console.log('[Service Worker] Periodic content sync...');
  
  // Refresh important cached content
  const cache = await caches.open(CONTENT_CACHE_NAME);
  
  try {
    // Pre-fetch important content for offline use
    const urlsToRefresh = [
      '/',
      '/dashboard',
      '/lessons',
      '/gk'
    ];
    
    for (const url of urlsToRefresh) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          await cache.put(url, response);
        }
      } catch (e) {
        // Ignore individual fetch failures
      }
    }
  } catch (error) {
    console.error('[Service Worker] Content sync failed:', error);
  }
}

// Message handler for client communication
self.addEventListener('message', (event) => {
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data.type === 'CACHE_URLS') {
    const urls = event.data.urls || [];
    caches.open(CONTENT_CACHE_NAME).then((cache) => {
      cache.addAll(urls).catch(console.error);
    });
  }
  
  if (event.data.type === 'CLEAR_CACHE') {
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => caches.delete(cacheName))
      );
    });
  }
});