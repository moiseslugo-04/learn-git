/*self.addEventListener('install', (e) => {
  //console.log('services worker installed')
})
self.addEventListener('fetch', (e) => {
  // this is a request  => e.request.url 
  e.respondWith(fetch(e.request))
})
self.addEventListener('activate',()=>{})
*/
self.addEventListener('install', (e) => {
  console.log('install')
})
self.addEventListener('activate', (e) => {
  console.log("It's activated")
})
self.onerror = (e) => console.log(e)
self.addEventListener('fetch', (e) => {})

self.addEventListener('message', ({ data, source }) => {
  console.log(data)
  source.postMessage('im a services')
})
