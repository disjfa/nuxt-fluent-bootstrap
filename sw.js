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
    "url": "/_nuxt/app.b775fdbacf77cc8a1fe4.js",
    "revision": "0b096e826645a1ad411c0cd7e0be7015"
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
    "url": "/_nuxt/layouts/default.324a25d49ad7575d3328.js",
    "revision": "adff15508a35dd845c12299960ebad78"
  },
  {
    "url": "/_nuxt/manifest.7df2d2e778ade1b0387b.js",
    "revision": "e537173ea28274fe94229568ea7cf0c2"
  },
  {
    "url": "/_nuxt/pages/form.07e30a033f419ef53185.js",
    "revision": "d21ece27cd88a5efe3eb0efa7e97e2c3"
  },
  {
    "url": "/_nuxt/pages/index.75808d042ef2d5a49c71.js",
    "revision": "8e4ad14fd4482c47554831a589f076d8"
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
