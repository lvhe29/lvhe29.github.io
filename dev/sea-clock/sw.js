var seaClockCacheName = 'sea-clock-v2023-002';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(seaClockCacheName).then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './js/run.js',
        './js/clock.js',
        './js/move.js',
        './css/style.css',
        './img/sea_bg_day.jpg',
        './img/sea_bg_night.jpg',
        './img/island.png',
        './img/moon.png',
        './img/sun.png',
        './img/pageicon.ico',
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      console.log('### sw event', event);
      if (response) {
        console.log(`[SW] Used cached resource ${event.request.url}`);
        return response;
      } else {
        console.log(`[SW] Fetched resource ${event.request.url}`);
        return fetch(event.request);
      }
    })
  );
});