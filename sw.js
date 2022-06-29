const VERSION = 'v1';
// First we made the installation of the service worker in the browser
self.addEventListener('install', event => {
  // We create a pre-cache, in that we store assets, sources that we want in cache
  // Waits until the precache funtion ends
  event.waitUntil(precache());
})

self.addEventListener('fetch', event => {
  // First we get the requets
  const request = event.request;
  // Normally we get the get requets, put, update, post normally we dont want to
  // store then in the cache
  if (request.method !== 'GET'){
    return;
  }
  // Search the request in the cache
  event.respondWith(cachedResponse(request));

  // Update cache
  event.waitUntil(updateCache(request))
})

async function precache() {
  // We instance a cache called v1
  const cache = await caches.open(VERSION);
  // Adds and return all the files that we wrote and static assets to the 
  // created cache instance
  // When we dont know the files name because the parser change the name, we can
  // not add anything and in the update cache function it wii be added
  return cache.addAll([
    // '/',
    // '/index.html',
    // '/assets/js/MediaPlayer.js',
    // '/assets/js/plugins/autoPause.js',
    // '/assets/js/plugins/autoPlay.js',
    // '/assets/js/handlers/video-btns.handles.js',
    // '/assets/css/index.css',
    // '/assets/static/videos/BigBuckBunny.mp4'
  ]);
};


async function cachedResponse(request) {
  // We open the created cache
  const cache = await caches.open(VERSION);
  // We search the request in the cache
  const response = await cache.match(request);
  // If the request exist in cache we return the response else 
  // We do the original request
  return response || fetch(request);
}

async function updateCache(request) {
  // We open the created cache
  const cache = await caches.open(VERSION);
  // Make the request normally to update the cached information
  const response = await fetch(request);
  // Updates the cache
  return cache.put(request, response)
}