/************************************
 *** to create a dedicate worker ***
 * *********************************/
const worker = new Worker('worker.js')
//worker.onmessage = ({ data }) => console.log(data ?? 'There are no messages')
//worker.postMessage('hello from the main thread')
//worker.terminate()

/************************************
 *** to create a shared worker ***
 * *********************************/
//const sharedWorker = new SharedWorker('worker.js')
//sharedWorker.port.start()
//sharedWorker.port.postMessage('hello from the main js')
//sharedWorker.port.addEventListener('message', ({ data }) => console.log(data))

/************************************
 *** to create a services worker ***
 * *********************************/
if (!navigator.serviceWorker) {
  navigator.serviceWorker.register('services.js').then((request) => {})
}

navigator.serviceWorker.ready.then((res) =>
  res.active.postMessage('hello im a index')
)

navigator.serviceWorker.addEventListener('message', ({ data }) => {
  console.log(data)
})
