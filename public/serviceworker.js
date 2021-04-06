// const CACHE_NAME = "version-1";
// const urlsToCache = [
//   "index.html",
//   "offline.html",
//   "/static/js/main.chunk.js",
//   "/static/js/0.chunk.js",
//   "/static/js/bundle.js",
//   "/",
//   "/registration",
//   "/login",
//   "/aboutus",
//   "/Dash",
//   "/dash/savedfiles",
//   "/dash/category/:id",
//   "/dash/Home",
//   "/dash/upload",
//   "/dash/beranda",
//   "/dash/search/:id",
//   "/dash/scream/:id",
//   "/dash/share/:id",
//   // `category.json`,
//   // `information.json`,
// ];

// const self = this;

// //Install SW
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then(() => {
//       return fetch(event.request).catch(() => caches.match("offline.html"));
//     })
//   );
// });

// self.addEventListener("activate", (event) => {
//   const cacheWhiteList = [];
//   cacheWhiteList.push(CACHE_NAME);

//   event.waitUntil(
//     caches.keys().then((cacheNames) =>
//       Promise.all(
//         cacheNames.map((cacheName) => {
//           if (!cacheWhiteList.includes(cacheName)) {
//             return caches.delete(cacheName);
//           }
//         })
//       )
//     )
//   );
// });

const cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        `/static/js/main.chunk.js`,
        `/static/js/0.chunk.js`,
        `/static/js/bundle.js`,
        `/index.html`,
        `/`,
        "/registration",
        "/login",
        "/aboutus",
        "/Dash",
        "/dash/savedfiles",
        "/dash/category/:id",
        "/dash/Home",
        "/dash/upload",
        "/dash/beranda",
        "/dash/search/:id",
        "/dash/scream/:id",
        "/dash/share/:id",
        `category.json`,
        `information.json`,
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((res) => {
        if (res) {
          return res;
        }
        const requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});
