const CACHE_NAME = 'tecnico-angel-v1';
const urlsToCache = [
  './',
  './index.html',
  './styles/style.css', // Asegúrate de incluir tus archivos CSS principales
  './js/main.js'       // Asegúrate de incluir tus scripts JS
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar peticiones para servir desde caché
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});