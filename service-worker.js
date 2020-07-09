const CACHE_NAME = 'Jawara-v16.1.3';
const urlsToCache = [
    '/',
    '/index.html',
    '/service-worker.js',
    '/manifest.json',
    '/nav.html',
    '/detail-club.html',
    '/detail-match.html',
    '/pages/beranda.html',
    '/pages/jadwal.html',
    '/pages/klasemen.html',
    '/pages/top-scorer.html',
    '/pages/favorit.html',
    '/js/materialize.min.js',
    '/js/nav.js',
    '/js/api.js',
    '/js/idb.js',
    '/js/db.js',
    '/js/dateConvert.js',
    '/js/components/latest_jadwal.js',
    '/js/components/jadwal.js',
    '/js/components/klasemen.js',
    '/js/components/topscorer.js',
    '/js/components/detail_club.js',
    '/js/components/detail_match.js',
    '/js/components/saved_club.js',
    '/js/components/saved_match.js',
    '/css/materialize.min.css',
    '/css/style.css',
    '/assets/icons/favicon.png',
    '/assets/icons/icon-192x192.png',
    '/assets/icons/icon-512x512.png',
    '/assets/images/banner.jpg',
    '/assets/images/logo.png',
    '/assets/images/player.png',
];

self.addEventListener('install', function(event) {
    console.log('ServiceWorker: Menginstall...');

    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('ServiceWorker: Membuka cache...');
            return cache.addAll(urlsToCache);
        })
    )
})

self.addEventListener('fetch', function(event) {
    const base_url = 'https://api.football-data.org/v2/';

    if (event.request.url.indexOf(base_url) > -1) {
        event.respondWith(
            caches.open(CACHE_NAME).then(function(cache) {
                return fetch(event.request).then(function(response) {
                    cache.put(event.request.url, response.clone());
                    return response;
                })
            })
        );
    } else {
        event.respondWith(
            caches.match(event.request).then(function(response) {
                return response || fetch (event.request);
            })
        )
    }
});

self.addEventListener('activate', function(event) {
    console.log('Aktivasi service worker baru');

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME && cacheName.startsWith('Jawara')) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('push', function(event) {
    let body;

    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }

    const options = {
        body: body,
        icon: 'assets/icons/icon-192x192.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };

    event.waitUntil(
        self.registration.showNotification('Push notification', options)
    );
});