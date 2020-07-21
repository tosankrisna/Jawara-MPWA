importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.log('Workbox berhasil dimuat');
} else {
    console.log('Workbox gagal dimuat');
}

workbox.precaching.precacheAndRoute([
    { 
        url: '/', 
        revision: '1' 
    },
    { 
        url: '/index.html', 
        revision: '1' 
    },
    { 
        url: '/app.js', 
        revision: '1' 
    },
    { 
        url: '/service-worker.js', 
        revision: '1' 
    },
    { 
        url: '/manifest.json', 
        revision: '1' 
    },
    { 
        url: '/push.js', 
        revision: '1' 
    },
    { 
        url: '/nav.html', 
        revision: '1' 
    },
    { 
        url: '/script/materialize.min.js', 
        revision: '1' 
    },
    { 
        url: '/script/idb.js', 
        revision: '1' 
    },
    { 
        url: '/script/components/jadwal.js', 
        revision: '1' 
    },
    { 
        url: '/script/components/klasemen.js', 
        revision: '1' 
    },
    { 
        url: '/script/components/latestJadwal.js', 
        revision: '1' 
    },
    { 
        url: '/script/components/savedTeam.js', 
        revision: '1' 
    },
    { 
        url: '/script/components/savedMatch.js', 
        revision: '1' 
    },
    { 
        url: '/script/components/team.js', 
        revision: '1' 
    },
    { 
        url: '/script/components/topScorer.js', 
        revision: '1' 
    },
    { 
        url: '/script/data/api.js', 
        revision: '1' 
    },
    { 
        url: '/script/data/dataJadwal.js', 
        revision: '1' 
    },
    { 
        url: '/script/data/dataKlasemen.js', 
        revision: '1' 
    },
    { 
        url: '/script/data/dataLatestJadwal.js', 
        revision: '1' 
    },
    { 
        url: '/script/data/dataLatestKlasemen.js', 
        revision: '1' 
    },
    { 
        url: '/script/data/dataSavedMatch.js',
        revision: '1' 
    },
    { 
        url: '/script/data/dataSavedTeam.js',
        revision: '1' 
    },
    { 
        url: '/script/data/dataTeam.js',
        revision: '1' 
    },
    { 
        url: '/script/data/dataTopScorer.js',
        revision: '1' 
    },
    { 
        url: '/script/database/db.js',
        revision: '1' 
    },
    { 
        url: '/script/database/dbMatch.js',
        revision: '1' 
    },
    { 
        url: '/script/database/dbTeam.js',
        revision: '1' 
    },
    { 
        url: '/script/helper/convertData.js',
        revision: '1' 
    },
    { 
        url: '/script/helper/requestPermission.js',
        revision: '1' 
    },
    { 
        url: '/script/helper/serviceWorkerRegister.js',
        revision: '1' 
    },
    { 
        url: '/script/view/main.js',
        revision: '1' 
    },
    { 
        url: '/style/material-icons.css',
        revision: '1' 
    },
    { 
        url: '/style/materialize.min.css',
        revision: '1' 
    },
    { 
        url: '/style/style.css',
        revision: '1' 
    },
    { 
        url: '/assets/fonts/Lato.ttf',
        revision: '1' 
    },
    { 
        url: '/assets/fonts/Raleway.ttf',
        revision: '1' 
    },
    { 
        url: '/assets/icons/favicon.png',
        revision: '1' 
    },
    { 
        url: '/assets/icons/icon-72x72.png',
        revision: '1' 
    },
    { 
        url: '/assets/icons/icon-96x96.png',
        revision: '1' 
    },
    { 
        url: '/assets/icons/icon-128x128.png',
        revision: '1' 
    },
    { 
        url: '/assets/icons/icon-144x144.png',
        revision: '1' 
    },
    { 
        url: '/assets/icons/icon-192x192.png',
        revision: '1' 
    },
    { 
        url: '/assets/icons/icon-256x256.png',
        revision: '1' 
    },
    { 
        url: '/assets/icons/icon-384x384.png',
        revision: '1' 
    },
    { 
        url: '/assets/icons/icon-512x512.png',
        revision: '1' 
    },
    { 
        url: '/assets/images/banner.jpg',
        revision: '1' 
    },
    { 
        url: '/assets/images/logo.png',
        revision: '1' 
    },
    {
        url: '/assets/images/player.png',
        revision: '1' 
    }
], {
    ignoreURLParametersMatching: [/.*/]
});

workbox.routing.registerRoute(
    new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'cache-pages'
    })
);

workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/v2/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'cache-api'
    })
);

workbox.routing.registerRoute(
    /.*(?:png|gif|jpg|jpeg|svg|ico)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'cache-images',
        plugins: [
        new workbox.cacheableResponse.Plugin({
            statuses: [0, 200]
        }),
        new workbox.expiration.Plugin({
            maxEntries: 100,
            maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
        ]
    })
);

workbox.routing.registerRoute(
    /.*(?:googleapis|gstatic)\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'cache-fonts'
    })
);

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