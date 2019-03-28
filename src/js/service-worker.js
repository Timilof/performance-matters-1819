const CACHE_NAME = 'cache-v1';
const urlsToCache = [
  '/offline',
  // '/detail',
  '/',
  '/logo.svg',
  '/styles.min.css',
  'index.min.js'
];

self.addEventListener('install', (event) => {
    console.log('installing service workers', event);
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            console.log(cache.addAll(urlsToCache));
            return cache.addAll(urlsToCache);
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    console.log('activation service worker', event);
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('service worker is clearing old cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request)
        .then(res => {
            const resClone = res.clone();
            caches
                .open(CACHE_NAME)
                .then(cache => {
                    cache.put(event.request.url, resClone);
                })
            return res;
        }).catch(err => caches.match(event.request).then(res => res))
    )
});
