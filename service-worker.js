const CACHE_NAME = 'Jawara-v26';
const urlsToCache = [
    '/',
    '/index.html',
    '/app.js',
    '/service-worker.js',
    '/manifest.json',
    '/push.js',
    '/nav.html',
    '/pages/beranda.html',
    '/pages/jadwal.html',
    '/pages/klasemen.html',
    '/pages/topScorer.html',
    '/pages/team.html',
    '/pages/favorit.html',
    '/script/materialize.min.js',
    '/script/idb.js',
    '/script/components/jadwal.js',
    '/script/components/klasemen.js',
    '/script/components/latestJadwal.js',
    '/script/components/savedTeam.js',
    '/script/components/savedMatch.js',
    '/script/components/team.js',
    '/script/components/topScorer.js',
    '/script/data/api.js',
    '/script/data/dataJadwal.js',
    '/script/data/dataKlasemen.js',
    '/script/data/dataLatestJadwal.js',
    '/script/data/dataLatestKlasemen.js',
    '/script/data/dataSavedMatch.js',
    '/script/data/dataSavedTeam.js',
    '/script/data/dataTeam.js',
    '/script/data/dataTopScorer.js',
    '/script/database/db.js',
    '/script/database/dbMatch.js',
    '/script/database/dbTeam.js',
    '/script/helper/convertData.js',
    '/script/helper/requestPermission.js',
    '/script/helper/serviceWorkerRegister.js',
    '/script/view/main.js',
    '/style/material-icons.css',
    '/style/materialize.min.css',
    '/style/style.css',
    '/assets/fonts/Lato.ttf',
    '/assets/fonts/Raleway.ttf',
    '/assets/icons/favicon.png',
    '/assets/icons/icon-72x72.png',
    '/assets/icons/icon-96x96.png',
    '/assets/icons/icon-128x128.png',
    '/assets/icons/icon-144x144.png',
    '/assets/icons/icon-192x192.png',
    '/assets/icons/icon-256x256.png',
    '/assets/icons/icon-384x384.png',
    '/assets/icons/icon-512x512.png',
    '/assets/images/banner.jpg',
    '/assets/images/logo.png',
    '/assets/images/player.png',
];

self.addEventListener('install', (event) => {
    console.log('ServiceWorker: Menginstall...');

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('ServiceWorker: Membuka cache...');
            return cache.addAll(urlsToCache);
        })
    )
})

self.addEventListener('fetch', (event) => {
    const base_url = 'https://api.football-data.org/v2/';

    if (event.request.url.indexOf(base_url) > -1) {
        event.respondWith(
            caches.open(CACHE_NAME).then((cache) => {
                return fetch(event.request).then((response) => {
                    cache.put(event.request.url, response.clone());
                    return response;
                })
            })
        );
    } else {
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch (event.request);
            })
        )
    }
});

self.addEventListener('activate', (event) => {
    console.log('Aktivasi service worker baru');

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME && cacheName.startsWith('Jawara')) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('push', (event) => {
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