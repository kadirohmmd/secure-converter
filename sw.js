// sw.js - عامل خدمة للعمل دون اتصال
const CACHE_NAME = 'file-converter-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json'
];

// تثبيت العامل وتخزين الملفات الأساسية
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// استراتيجية: الشبكة أولاً، ثم التخزين المؤقت
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // نسخ الرد وتحسينه في الكاش إذا كان ناجحاً
        let responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});