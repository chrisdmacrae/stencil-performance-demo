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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.css",
    "revision": "21a079e0ff3ff826270004776de3bc12"
  },
  {
    "url": "build/app.js",
    "revision": "92058e67c5dd7744b103ceec71d26ab7"
  },
  {
    "url": "build/app/app.ovq895hp.js",
    "revision": "52701df597e41f95d861c5082ad29f93"
  },
  {
    "url": "build/app/app.rtrdglx6.js",
    "revision": "b8c190c5a64d662fe4afb174578ac0da"
  },
  {
    "url": "build/app/us3bmvj4.es5.js",
    "revision": "d22dd6fbad04ec0708457cb89ce7f480"
  },
  {
    "url": "build/app/us3bmvj4.js",
    "revision": "a6b4be9968dd744975d2da4da653575c"
  },
  {
    "url": "index.html",
    "revision": "b3a26b621db99311a24663da7df41b81"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
