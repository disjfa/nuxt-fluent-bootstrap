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
    "url": "/nuxt-fluent-bootstrap/_nuxt/app.31e89bc8ad68f0746c6f.js",
    "revision": "e1d22a3ac8e9195c08c0e77dba860046"
  },
  {
    "url": "/nuxt-fluent-bootstrap/_nuxt/common.6bc6ca04799cd9cb5af8.js",
    "revision": "36b772c9c7051b28a4e27259b338b1b7"
  },
  {
    "url": "/nuxt-fluent-bootstrap/_nuxt/common.a84eee6e638f7a8cdf7143a2623dcd42.css",
    "revision": "a5ea91c5f7fa7fb66f3a75973418be83"
  },
  {
    "url": "/nuxt-fluent-bootstrap/_nuxt/layouts/default.55344220c5814ec85504.js",
    "revision": "429dc1e726229409b7ffef57ab29040c"
  },
  {
    "url": "/nuxt-fluent-bootstrap/_nuxt/manifest.6e8e659bb99a4c036d60.js",
    "revision": "f0662dcfef00d9e944f1e06511387394"
  },
  {
    "url": "/nuxt-fluent-bootstrap/_nuxt/pages/form.ea57ac993c0bb2d20605.js",
    "revision": "0229df82fe680c32c8bedcc3190367cb"
  },
  {
    "url": "/nuxt-fluent-bootstrap/_nuxt/pages/index.3e09192243a35aa7c83f.js",
    "revision": "63ba76a94be89b96ec1179d6d199efa9"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-fluent-bootstrap_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/nuxt-fluent-bootstrap/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/nuxt-fluent-bootstrap/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
