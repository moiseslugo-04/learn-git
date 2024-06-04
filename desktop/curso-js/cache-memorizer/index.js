/*function toDoSomething(num) {
  let a = 20
  let b = 102
  let result
  for (let i = 0; i < num; i++) {
    result += a * b
  }
  return result
}
const memorizer = (func) => {
  let cache = {}
  return (...args) => {
    let key = JSON.stringify(args)
    if (!cache.hasOwnProperty(key)) {
      cache[key] = func(...args)
    }
    return cache[key]
  }
}
{
  const date = new Date()
  toDoSomething(999999999)
  console.log(new Date() - date)

  const date1 = new Date()
  toDoSomething(999999999)
  console.log(new Date() - date1)

  const date2 = new Date()
  toDoSomething(999999999)
  console.log(new Date() - date2)
  const meme = memorizer(toDoSomething)

  console.log('memorizer')
  const date3 = new Date()
  meme(999999999)
  console.log(new Date() - date3)
  const date4 = new Date()
  meme(9999999)
  console.log(new Date() - date4)
  const date5 = new Date()
  meme(11111111)
  console.log(new Date() - date5)
}*/

/**********************************
 ***           Cache            ***
 **********************************/
// add() ,addAll() , delete(),match() , matchAll() , put()

caches.open('static-files').then((cache) => {})
/* ***cache types *** /*

//cache of the browser => Store resources like the html,css,js,img from users
// cache of service => Use storage techniques for database requests or dynamically generated pages 
//cache of CDN(Content Delivery Network)
// Distribute copies of content on local servers to reduce latency and better delivery speed
//service worker cache => Store Resources on devices that allow operation without connection 

/* *** Key concepts *** */

// Cache storage(Caching) =>  Process of storing copies the resource or  dates

//Cache policies =>Rules that determine how and when the content is stored and eliminated. They include expiration and validation policies.

// Cache control => Use of HTTP   such as Cache-Control, Expires, ETAG and Last-modified to manage the behavior of the cache.

//Cache invalidation =>Delete or update process stored data in the cache

/* *** Key points to consider *** */

//Cache Lifetime => It can be controlled by the cache-control header with values ​​such as max-age and s-maxage.

//Expiration policies =>
/**
   * Expires: : Define a date and time after which the resource is considered obsolete.
   
   * Cache-Control: It offers more flexibility with directives such as Max-Age, No-Cache, No-Store, Public, and Private.*/

//Validation of cache
/**
 * ETag (Entity Tag): A unique id assigned to a specific version of the resource.
 * Last-Modified: Indicates the last time the resource was modified.
 */

//Service Worker Cache:
/**
 * intercept network requests and use answers from the cache
 * API Cache:Allows to manage storage in cache from the JavaScript code,
   with methods like caches.open, cache.put, cache.match, and cache.delete.
 */

// this is service Worker example
const CACHE_NAME = 'cacheName'
const fileToCache = ['index.js', 'style.css']

self.addEventListener('install', () => {
  caches.open(CACHE_NAME).then((cache) => {
    console.log('opening cache')
    cache.addAll(fileToCache)
  })
})

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      if (response) return response
      return fetch(e.request).then((response) => {
        if ((response.status === 200, response.ok === true)) {
          let responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request.url, response)
          })
        }
      })
    })
  )
})

self.addEventListener('active', (e) => {
  const cacheWhiteList = [CACHE_NAME]
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
})
// Cache strategies
//Cache First => cache?? fetch
//Network First => fetch ?? cache
//stale-while-revalidate => return cache  and update the cache with the request
//NetWork only => fetch without cache
//Cache only => cache without fetch
