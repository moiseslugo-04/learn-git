/**
 * 
 * 
 * 
 
 * que es un controller
 *
 *
 */
// main.js
const sendButton = document.getElementById('send')
const input = document.getElementById('chatInput')
const container = document.getElementById('messages')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service.js').then(({ scope }) => {
    console.log('activate', scope)
  })
}

navigator.serviceWorker.addEventListener('message', ({ data: message }) => {
  showMessage(message)
})

function showMessage(message) {
  const element = document.createElement('div')
  element.textContent = message
  container.appendChild(element)
}

async function sendMessage(message) {
  const { active } = await navigator.serviceWorker.ready
  active.postMessage(message)
}

sendButton.addEventListener('click', () => {
  let message = input.value
  sendMessage(message)
  input.value = ''
})
