// biggoldencox service worker — offline shell + runtime caching.
// Bump CACHE when the shell changes to force an update.
const CACHE = "bgcox-v5";
const CORE = [
  "./",
  "index.html",
  "console.html",
  "data.js",
  "manifest.json",
  "favicon.svg",
  "icon-192.png",
  "icon-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== location.origin) return; // let cross-origin (CDNs etc.) pass through

  // HTML, data.js, and *.json stay fresh: network-first, fall back to cache offline.
  var fresh = req.mode === "navigate" || /\.(json|js)$/.test(url.pathname);
  if (fresh) {
    e.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (m) { return m || caches.match("index-hud.html"); });
      })
    );
    return;
  }

  // Images / icons / fonts: cache-first (they rarely change), then cache on first fetch.
  e.respondWith(
    caches.match(req).then(function (m) {
      return m || fetch(req).then(function (res) {
        if (res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
        return res;
      });
    })
  );
});
