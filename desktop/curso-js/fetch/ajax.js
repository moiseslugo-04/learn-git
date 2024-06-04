/*********************
 *      Ajax         *
 * *******************/
// request.setRequestHeader()
window.XMLHttpRequest
  ? (request = new XMLHttpRequest())
  : (request = new ActiveXObject('Microsoft.XMLHTTP'))

//GET
request.open('GET', 'https://jsonplaceholder.typicode.com/users')
request.addEventListener('load', () => {
  ;(request.readyState == 4) & (request.status >= 200)
    ? console.log('Successful Request')
    : console.log('Request Error')
  console.log(request.status)
})
request.onerror = () => console.error('Request Error')
request.send()

// POST
request.open('POST', 'https://jsonplaceholder.typicode.com/users')
request.addEventListener('load', () => {
  ;(request.readyState == 4) & (request.status >= 200)
    ? console.log('Successful Request')
    : console.log('Request Error')
  console.log(request.response)
})
request.onerror = () => console.error('Request Error')
request.setRequestHeader('Content-type', 'application/json')
const user = { name: 'moises', age: 19 }
request.send(JSON.stringify(user))
