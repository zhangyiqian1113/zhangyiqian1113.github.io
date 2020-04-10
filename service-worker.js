/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.13a98d37.css",
    "revision": "1af74e0e9e771ffbfd25fa00cca87ef9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.56660bcb.js",
    "revision": "929bd8d1ccd961cc2f2134dc7d88b17f"
  },
  {
    "url": "assets/js/11.c2201414.js",
    "revision": "0f56a01572cc09392c007dbd5273ee65"
  },
  {
    "url": "assets/js/12.a9a20190.js",
    "revision": "b9799685f239a7df84a3d04c904768db"
  },
  {
    "url": "assets/js/13.912e4b9c.js",
    "revision": "c36ec6c4045da7562b6d0e500f26d6c7"
  },
  {
    "url": "assets/js/14.8241dc55.js",
    "revision": "a735098e9642b4896e7b5933cfde17e6"
  },
  {
    "url": "assets/js/15.569df5f2.js",
    "revision": "99041de10cd069c719183ee8a474654b"
  },
  {
    "url": "assets/js/16.9691e8c5.js",
    "revision": "d3ea31e8d465f1423afd1cd5679db9c7"
  },
  {
    "url": "assets/js/17.f71ce836.js",
    "revision": "a05c51aa9096d2efb0e74f5a4154e03a"
  },
  {
    "url": "assets/js/18.72f0dd68.js",
    "revision": "492010bd36b0557c24fc4fa823265f3b"
  },
  {
    "url": "assets/js/19.5dd1702b.js",
    "revision": "cdd0a0bc02d8e85591e5df483399aa97"
  },
  {
    "url": "assets/js/2.9dba9e5e.js",
    "revision": "5b285915b2d763a0c37d01e4f6525ba9"
  },
  {
    "url": "assets/js/20.75d176c3.js",
    "revision": "e612a779d70c4545a8890137e61fd9b3"
  },
  {
    "url": "assets/js/21.89eda05f.js",
    "revision": "bcf0bf4da8b78eccf52abf70a4d8490b"
  },
  {
    "url": "assets/js/3.e552d37e.js",
    "revision": "ac93661f3e38f2e19729f2e124934182"
  },
  {
    "url": "assets/js/4.01e28666.js",
    "revision": "60a902e4606cdd5869d50ee71f3e6689"
  },
  {
    "url": "assets/js/5.4e4e9707.js",
    "revision": "3b3349796a652e304a7683fd18d54b1b"
  },
  {
    "url": "assets/js/6.9b67e632.js",
    "revision": "47b3d86ad5882945facf79d6eb1b2479"
  },
  {
    "url": "assets/js/7.0682c5a9.js",
    "revision": "1e550f59bf687e22a22109efccf43615"
  },
  {
    "url": "assets/js/8.542917eb.js",
    "revision": "a4a47c40e071d49a52b5a9081313e60d"
  },
  {
    "url": "assets/js/9.61604297.js",
    "revision": "56b3cddc0d09e9cc3868d56605846d6b"
  },
  {
    "url": "assets/js/app.dbd6f4c7.js",
    "revision": "cc78f922ace75419b1dc82d9470fb982"
  },
  {
    "url": "assets/logo.png",
    "revision": "d5331b00af4c4629d95e02888890824d"
  },
  {
    "url": "index.html",
    "revision": "2f2110f7ebce862e53a6a2703b93c848"
  },
  {
    "url": "pages/about/index.html",
    "revision": "183a793efe902f7f4ceee06d03c40f09"
  },
  {
    "url": "pages/back-end/mysql/index.html",
    "revision": "51bc0817beba7a0d45c0b432d25da1c4"
  },
  {
    "url": "pages/back-end/nginx/index.html",
    "revision": "cfa42ef8c7818fae50c5d6fec54d7d94"
  },
  {
    "url": "pages/back-end/node/index.html",
    "revision": "8848a1135f100ac6f9dbd267824927ae"
  },
  {
    "url": "pages/front-end/angular/index.html",
    "revision": "214271ff6dc08a7f78e20998e9ec5489"
  },
  {
    "url": "pages/front-end/css/index.html",
    "revision": "8f9f154709b008d06fa008affd8de1c8"
  },
  {
    "url": "pages/front-end/html/index.html",
    "revision": "7a625390f9634a7abc8e6f1f7ab02461"
  },
  {
    "url": "pages/front-end/javascript/index.html",
    "revision": "65d022ab59f7c5f0cd5632ee5bcac183"
  },
  {
    "url": "pages/front-end/miniprogram/index.html",
    "revision": "7049fdfc75099ee85186765558a5d6b6"
  },
  {
    "url": "pages/front-end/react/index.html",
    "revision": "e17156a06d15884074009272b6bfe9ed"
  },
  {
    "url": "pages/front-end/vue/index.html",
    "revision": "961b86790d668efe42768c9b4d421564"
  },
  {
    "url": "pages/front-end/vue/routerMode.html",
    "revision": "9bea95f21ecc98026798a92c6ae9548d"
  },
  {
    "url": "pages/front-end/webpack/index.html",
    "revision": "c5db2f3f0e0ce746576ba422b4f0ea38"
  },
  {
    "url": "pages/timeline/index.html",
    "revision": "8272bf78c2849b131fc7693e05ca01d2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
