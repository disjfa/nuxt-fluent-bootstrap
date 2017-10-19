importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.d7aeb301fa41bfea2079.js",
    "revision": "c9680fa1ba3f696f7947f55fa2d46ecc"
  },
  {
    "url": "/_nuxt/common.68902de77d0816a451efe47a6e85781d.css",
    "revision": "d9295ff133a9eed1587b06fe8497367d"
  },
  {
    "url": "/_nuxt/common.6bc6ca04799cd9cb5af8.js",
    "revision": "36b772c9c7051b28a4e27259b338b1b7"
  },
  {
    "url": "/_nuxt/layouts/default.55344220c5814ec85504.js",
    "revision": "429dc1e726229409b7ffef57ab29040c"
  },
  {
    "url": "/_nuxt/manifest.f6b44681facb39bd17d3.js",
    "revision": "4da1810f7a955fbbc0f0f3de2ff80e2b"
  },
  {
    "url": "/_nuxt/pages/form.ea57ac993c0bb2d20605.js",
    "revision": "0229df82fe680c32c8bedcc3190367cb"
  },
  {
    "url": "/_nuxt/pages/index.3e09192243a35aa7c83f.js",
    "revision": "63ba76a94be89b96ec1179d6d199efa9"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-fluent-bootstrap_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
