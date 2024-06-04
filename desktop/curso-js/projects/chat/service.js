'use strict'
/**
 * que es el  websocket;
 *skipWaiting()
 *clients.claim()
 */
// 1) install server => caching , skipWaiting()
// 2) activate =>  claim the controller , update cache
// 3) fetch => return response from  answer or do fetch
//tps clone the Response so that it is not eliminated
const cacheName = 'v1'
const cacheData = ['index.js', 'index.html', 'service.js']

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(cacheData)
    })
  )
  console.log('service installed ', e)
  self.skipWaiting()
})

self.addEventListener('activate', (e) => {
  const cacheWhiteList = [cacheName]
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (cacheWhiteList.indexOf(key) === -1) {
            return caches.delete(key)
          }
        })
      )
    })
  )
  self.clients.claim()
})

self.addEventListener('message', ({ data: message }) => {
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage(message)
    })
  })
})

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) return res
      return fetch(e.request).then(({ request }) => {
        console.log(request)
        if (request === 200) {
          let responseToCache = request.clone()
          caches.open(cacheName).then((cache) => {
            cache.put(request.url, responseToCache)
          })
        }
      })
    })
  )
})
