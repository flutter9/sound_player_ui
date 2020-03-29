'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "6b913baadd780468086984a10e9a681a",
"/assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"/assets/AssetManifest.json": "fba2b8bfec48ddfb37bbce5219113f6e",
"/assets/FontManifest.json": "0ca1654f0b31d3c2d16aebe5b6d2294d",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/abc.jpg": "020561e9bd08ba8c39872838560a5a74",
"/assets/assets/roboto/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"/assets/assets/roboto/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"/assets/assets/roboto/Roboto-LightItalic.ttf": "a3ce4440f2abf76f4a1b14b83920138c",
"/assets/assets/roboto/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"/assets/assets/roboto/Roboto-Thin.ttf": "321de678e592d0b8f44f1a82d7ca4b62",
"/assets/assets/roboto/Roboto-Black.ttf": "5ebb24ee1112dd9562629375c387879a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
