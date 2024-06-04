const buttons = document.querySelectorAll('button')
const modal = document.querySelector('.modal')

let answer = document.cookie.split('=')[1]

window.addEventListener('load', () => {
  if (answer !== 'yes') {
    modal.style.display = 'flex'
    handleCookieConsent()
  } else {
    modal.style.display = 'none'
  }
})
function getCookie(key) {
  const cookies = document.cookie.split(';')
  let cookie = cookies.find((cookie) => {
    const [name, value] = cookie.split('=')
    return name === key
  })
  console.log(cookie.split('=')[1])
}
getCookie('acceptCookie')

function createCookie(key, value, days) {
  let expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${key}=${value};expires=${expires};path=/`
}

function handleCookieConsent() {
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('name')
      if (name == 'accept') {
        createCookie('acceptCookie', 'yes', 30)
      } else {
        createCookie('acceptCookie', 'no', 30)
      }
      modal.style.display = 'none'
    })
  })
}

console.log(screen.height)
