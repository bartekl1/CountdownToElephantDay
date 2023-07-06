const version = '1.16'
// Choose a cache name
const cacheName = `cache-v${version}`;
// List the files to precache
const precacheResources = [
    '/',
    '/favicon.ico',
    '/manifest.json',
    '/static/css/style.css',
    '/static/img/maskable_icons/maskable_icon_x192.png',
    '/static/img/icons/elephant192.png',
    '/static/img/icons/elephant.svg',
    '/static/img/slon_zwierze_szary_2.jpg',
    '/static/img/slon_zwierze_szary_wykadrowany.webp',
    '/static/js/modules/screenfull.js',
    '/static/js/languages.js',
    '/static/js/countdown.js',
    '/static/js/draggable.js',
    '/static/js/appearance.js',
    '/static/js/visit_counter.js',
    '/static/fonts/JetBrainsMono-Regular.woff2',
    '/static/img/elephant-outline-content.txt',
    '/static/img/cursor.png',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.min.css',
    'https://cdn.jsdelivr.net/npm/nosleep.js@0.12.0/dist/NoSleep.min.js',
    'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js'
];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
    console.log('Service worker install event!');

    event.waitUntil(
        caches.keys().then((keyList) =>
            Promise.all(
                keyList.map((key) => {
                    if (key != cacheName) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );

    event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
    console.log('Fetch intercepted for:', event.request.url);

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        }),
    );
});