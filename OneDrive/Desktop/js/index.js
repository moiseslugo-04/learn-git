let pag = 1
const btnPrev = document.getElementById('prev')
const btnNext = document.getElementById('next')
btnNext.addEventListener('click', () => {
  if (pag < 1000) {
    pag += 1
    movieFetch()
  }
})
btnPrev.addEventListener('click', () => {
  if (pag > 1) {
    pag -= 1
    movieFetch()
  }
})

const KEY = '4c0bf84d79ad0a5dbc251d6d0ccfc7b1'
const MOVIE_API_TEST = `https://api.themoviedb.org/3/tv/popular`
const content = document.getElementById('content')
function movieFetch() {
  fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=4c0bf84d79ad0a5dbc251d6d0ccfc7b1&language=en-US&page=${pag}`
  )
    .then((res) => {
      if (res.status == 200) {
        console.log('the answer is 200', res)
        return res.json()
      } else if (res.status == 401) {
        console.log('the answer is 401', res)
      } else if (res.status == 404) {
        console.log('the answer is 404', res)
      } else {
        console.log('error but i do not know')
      }
    })
    .then((data) => {
      let moveName = ''
      let { results } = data
      console.log(results)
      results.forEach((movie) => {
        moveName += `
        <div class="movie" >
        <h1 class="title">${movie.name}</h1>  
          <img  class="poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}"/>
        </div>
        `
        content.innerHTML = moveName
      })
    })
    .catch((err) => console.error(err))
}
movieFetch()
