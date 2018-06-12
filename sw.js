importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-fluent-bootstrap",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.40c8834a9ce9e89deb25.js",
    "revision": "d4acaf0012849545ab6c49e8eb0d4729"
  },
  {
    "url": "/_nuxt/app.6169080aa7af3e2e01db92cf09c77ea2.css",
    "revision": "6169080aa7af3e2e01db92cf09c77ea2"
  },
  {
    "url": "/_nuxt/layouts/default.7d06cf5ff563e36e10f9.js",
    "revision": "c3cfdf9d8495cd3858cd10953dd808d2"
  },
  {
    "url": "/_nuxt/manifest.d8698ddc4f0ddfe65020.js",
    "revision": "ad1b2d536d06463c3dd66b267f124393"
  },
  {
    "url": "/_nuxt/pages/form.fc3c5f4d4452376c3d14.js",
    "revision": "1452d984f08b28a3c140a688ec1b71ec"
  },
  {
    "url": "/_nuxt/pages/index.456e3b8f24331a82391b.js",
    "revision": "92cb528fa54b846b24e3c6b1a103759c"
  },
  {
    "url": "/_nuxt/pages/typography.0d6d7bf087fdc1e7b477.js",
    "revision": "164f1a97d4a55da50a0beca7cea77fa7"
  },
  {
    "url": "/_nuxt/vendor.fc45bba60de3f7f3934b.js",
    "revision": "101eef66c7f362912057f38c9dd94b52"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

