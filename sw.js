// sw.js
const CACHE_NAME = 'pspo-quiz-cache-v2'; // J'ai incrémenté la version à v2
const urlsToCache = [
  './', 
  './index.html',
  './style.css',
  './script.js',
  './questions.js',
  './manifest.json',
  './favicon.png', // Votre favicon principal à la racine
  // Chemins corrigés pour les icônes dans le dossier /icons/
  './icons/favicon-72x72.png',
  './icons/favicon-96x96.png',
  './icons/favicon-128x128.png',
  './icons/favicon-144x144.png',
  './icons/favicon-152x152.png',
  './icons/favicon-192x192.png',
  './icons/favicon-384x384.png',
  './icons/favicon-512x512.png'
];

self.addEventListener('install', event => {
  console.log('[SW] Install event');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Opened cache:', CACHE_NAME);
        return cache.addAll(urlsToCache)
          .then(() => console.log('[SW] All initial assets added to cache'))
          .catch(error => {
            console.error('[SW] Failed to add assets to cache during install:', error);
            // Si une seule URL échoue, addAll() rejette. Il est bon de savoir laquelle.
            urlsToCache.forEach(url => {
              fetch(url).then(res => { if(!res.ok) console.error(`[SW] Failed to fetch ${url}: ${res.status}`) });
            });
          });
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          // console.log('[SW] Cache hit for:', event.request.url);
          return response; // Servir depuis le cache
        }
        // console.log('[SW] Network request for:', event.request.url);
        return fetch(event.request); // Sinon, récupérer depuis le réseau
      }
    )
  );
});

self.addEventListener('activate', event => {
  console.log('[SW] Activate event');
  const cacheWhitelist = [CACHE_NAME]; // Seul le cache actuel est conservé
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim(); // S'assurer que le SW actif contrôle la page immédiatement
});