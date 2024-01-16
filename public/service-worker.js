self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll(['/', '/index.html', 'manifest.json', '/icon.png'])
        })
    );
});


self.addEventListener('fecth', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fecth(event.request);
        })
    );
});