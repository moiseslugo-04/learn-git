const name = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const btn = document.getElementById('btn')
const result = document.querySelector('.result')
btn.addEventListener('click', (e) => {
  e.preventDefault()
  result.innerHTML = validated(name.value, email.value, subject.value)
  name.value = ''
  email.value = ''
  subject.value = ''
  setTimeout(() => {
    result.innerHTML = ''
  }, 3000)
})
const validated = (name, email, subject) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  result.style.color = 'red'
  if (name.length < 5) {
    return `the name Can not be less than 5 characters`
  } else if (name.length > 40) {
    return `the name Can no be more than 40 characters`
  } else if (!regex.test(email)) {
    return `Required a valid email`
  } else if (subject.length < 5) {
    return `the subject Can not be less than 5 characters`
  } else if (name.length > 30) {
    return `the subject Can no be more than 30 characters`
  } else {
    result.style.color = 'green'
    return `Request submitted successfully`
  }
}
