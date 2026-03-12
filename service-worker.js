/**
 * CLEAR PWA - Service Worker
 * Versión: 2.0.0
 * Estrategia: Cache First para recursos estáticos, Network First para datos
 */

const CACHE_NAME = 'clear-pwa-v2.0.0';
const DATA_CACHE_NAME = 'clear-data-v2.0.0';

// Archivos estáticos a cachear en la instalación
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './js/resources_config.js',
  './icon-192x192.png',
  './icon-512x512.png'
];

// Archivos de datos (JSON) - se cachean pero se actualizan
const DATA_ASSETS = [
  './data/external_links.json',
  './data/prek.json',
  './data/kinder.json',
  './data/grade_1.json',
  './data/grade_2.json',
  './data/grade_3.json',
  './data/grade_4.json',
  './data/grade_5.json',
  './data/grade_6.json'
];

// ============================================
// INSTALACIÓN
// ============================================
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker: Instalando...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Service Worker: Cacheando archivos estáticos');
        // Cachear archivos estáticos, pero no fallar si alguno no existe
        return cache.addAll(STATIC_ASSETS.map(url => new Request(url, {cache: 'reload'})))
          .catch((err) => {
            console.warn('⚠️ Algunos archivos no se pudieron cachear:', err);
            // Continuar de todas formas
            return Promise.resolve();
          });
      })
      .then(() => {
        console.log('✅ Service Worker: Instalación completada');
        return self.skipWaiting();
      })
  );
});

// ============================================
// ACTIVACIÓN
// ============================================
self.addEventListener('activate', (event) => {
  console.log('🔄 Service Worker: Activando...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Eliminar caches antiguos
          if (cacheName !== CACHE_NAME && cacheName !== DATA_CACHE_NAME) {
            console.log('🗑️ Service Worker: Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker: Activado y listo');
      return self.clients.claim();
    })
  );
});

// ============================================
// FETCH - Estrategia de caché
// ============================================
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Ignorar requests que no sean GET
  if (request.method !== 'GET') {
    return;
  }
  
  // Ignorar requests externos (YouTube, etc.)
  if (url.origin !== location.origin) {
    return;
  }
  
  // Estrategia para archivos JSON: Network First, fallback a Cache
  if (request.url.includes('.json')) {
    event.respondWith(
      caches.open(DATA_CACHE_NAME).then((cache) => {
        return fetch(request)
          .then((response) => {
            // Si la respuesta es exitosa, actualizar cache
            if (response.status === 200) {
              cache.put(request, response.clone());
            }
            return response;
          })
          .catch(() => {
            // Si falla la red, usar cache
            console.log('📶 Offline: Usando cache para', request.url);
            return cache.match(request);
          });
      })
    );
    return;
  }
  
  // Estrategia para recursos estáticos: Cache First, fallback a Network
  event.respondWith(
    caches.match(request).then((response) => {
      if (response) {
        // Encontrado en cache
        return response;
      }
      
      // No está en cache, intentar red
      return fetch(request).then((response) => {
        // No cachear respuestas no exitosas
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        
        // Cachear la respuesta para futuras peticiones
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseToCache);
        });
        
        return response;
      }).catch((error) => {
        console.error('❌ Error en fetch:', error);
        // Aquí podrías retornar una página offline personalizada
        return new Response('Offline - No se pudo cargar el recurso', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({
            'Content-Type': 'text/plain'
          })
        });
      });
    })
  );
});

// ============================================
// MENSAJES del cliente
// ============================================
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => caches.delete(cacheName))
      );
    }).then(() => {
      event.ports[0].postMessage({ success: true });
    });
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ 
      version: CACHE_NAME,
      dataVersion: DATA_CACHE_NAME 
    });
  }
});

// ============================================
// SYNC - Para sincronización en background
// ============================================
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-resources') {
    event.waitUntil(
      caches.open(DATA_CACHE_NAME).then((cache) => {
        return Promise.all(
          DATA_ASSETS.map((url) => 
            fetch(url)
              .then((response) => {
                if (response.status === 200) {
                  return cache.put(url, response);
                }
              })
              .catch(() => console.log('No se pudo sincronizar:', url))
          )
        );
      })
    );
  }
});

console.log('🚀 Service Worker cargado - CLEAR PWA v2.0.0');
