self.addEventListener('connect', ({ ports }) => {
  let port = ports[0]
  port.onmessage = (event) => console.log(event)
  port.postMessage('this a message form worker')
})
