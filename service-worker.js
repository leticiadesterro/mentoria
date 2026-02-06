self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("planejamento-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json"
      ]);
    })
  );
});
