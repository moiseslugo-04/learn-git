const btn = document.getElementById('btn')
/************************************
 * fetch and axios with Async Await *
 * **********************************/

async function getNameFetch() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  let data = await response.json()
  console.log(data)
}

async function getNameAxios() {
  let response = await axios('https://jsonplaceholder.typicode.com/posts')
  console.log(response.data)
}

btn.addEventListener('click', getNameAxios)
