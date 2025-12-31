// LearnAI Service Worker for PWA Offline Functionality
const CACHE_NAME = 'learnai-v1';
const STATIC_CACHE_NAME = 'learnai-static-v1';
const API_CACHE_NAME = 'learnai-api-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/placeholder.svg'
];

// API endpoints to cache
const API_ENDPOINTS = [
  '/api/lessons',
  '/api/quiz',
  '/api/profile'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  
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
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== API_CACHE_NAME && 
                cacheName !== CACHE_NAME) {
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
    // Strategy 1: Static Assets - Cache First
    if (isStaticAsset(url.pathname)) {
      return await cacheFirst(request, STATIC_CACHE_NAME);
    }
    
    // Strategy 2: API Calls - Network First with fallback
    if (isApiCall(url.pathname)) {
      return await networkFirstWithFallback(request, API_CACHE_NAME);
    }
    
    // Strategy 3: App Shell - Cache First with Network Fallback
    if (isAppShell(url.pathname)) {
      return await cacheFirstWithNetworkFallback(request, CACHE_NAME);
    }
    
    // Strategy 4: Everything else - Network First
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
    const networkResponse = await fetch(request);
    
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
        message: 'This content is not available offline' 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
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
         pathname.endsWith('.png') ||
         pathname.endsWith('.jpg') ||
         pathname.endsWith('.jpeg') ||
         pathname.endsWith('.svg') ||
         pathname.endsWith('.ico');
}

function isApiCall(pathname) {
  return pathname.startsWith('/api/') || 
         API_ENDPOINTS.some(endpoint => pathname.startsWith(endpoint));
}

function isAppShell(pathname) {
  return pathname === '/' ||
         pathname === '/lessons' ||
         pathname === '/quiz' ||
         pathname === '/profile' ||
         pathname === '/login';
}

// Offline page fallback
async function getOfflinePage() {
  return new Response(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>LearnAI - Offline</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: system-ui, -apple-system, sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            text-align: center;
          }
          .container {
            max-width: 400px;
            padding: 2rem;
          }
          .icon {
            font-size: 4rem;
            margin-bottom: 1rem;
          }
          h1 { color: #3b82f6; }
          button {
            background: #3b82f6;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            cursor: pointer;
            margin-top: 1rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="icon">🧠</div>
          <h1>You're Offline</h1>
          <p>It looks like you're offline. Don't worry, your learning progress is saved locally!</p>
          <p>You can still access cached lessons and take quizzes. Your data will sync when you're back online.</p>
          <button onclick="window.location.reload()">Try Again</button>
        </div>
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
});

async function uploadOfflineData() {
  try {
    console.log('[Service Worker] Uploading offline data...');
    
    // This would integrate with your backend/Supabase
    // to sync offline progress when back online
    
    const clients = await self.clients.matchAll();
    clients.forEach(client => {
      client.postMessage({
        type: 'SYNC_COMPLETE',
        success: true
      });
    });
    
  } catch (error) {
    console.error('[Service Worker] Failed to upload offline data:', error);
  }
}

// Push notification support
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New learning content available!',
    icon: '/placeholder.svg',
    badge: '/placeholder.svg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'explore',
        title: 'Start Learning',
        icon: '/placeholder.svg'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/placeholder.svg'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('LearnAI', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});