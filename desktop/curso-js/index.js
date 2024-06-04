'use strict'
/***********************************
 ***        MatchMedia()          ***
 ************************************/
//const query = matchMedia('(max-width : 800px )')
//query.addEventListener('change', () => console.log('change'))

/************************************
 ***    intersection Observer     ***
 ************************************/
// con las option es para epecificar desde cuando se ejecuta

/*const options = {
    rootMargin : '300px',
    thresholds:[0.5]
}


const observer = new IntersectionObserver(isVisibility)
function isVisibility(entry) {
entry.forEach(box=>{
   console.log(box)
})
}
observer.observe(box)
*/
/*
const container = document.querySelector('.content')
const URL = 'https://jsonplaceholder.typicode.com/comments'
let counter = 0
const lazyLoad = (entry) => (entry[0].isIntersecting ? getData(4) : '')
const observe = new IntersectionObserver(lazyLoad)
async function getData(num) {
  const res = await fetch(URL)
  const data = await res.json()
  let fragment = document.createDocumentFragment()
  for (let i = 0; i < num; i++) {
    const { name, email, body } = data[counter]
    let div = document.createElement('div')
    div.classList.add('comment')
      div.innerHTML = 'There not more comments'
    div.innerHTML = `<h1>${name}</h1><h3>${email}</h3><p>${body}</p>`
    fragment.appendChild(div)
    counter++
    i == num - 1 ? observe.observe(div) : ''
  }
  container.appendChild(fragment)
}
getData(4)
*/
