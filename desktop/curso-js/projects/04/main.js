const subjects = document.querySelector('.subjects')
const data = [
  { subject: 'one', grade: 3 },
  { subject: 'two', grade: 7 },
  { subject: 'three', grade: 6 },
  { subject: 'four', grade: 8 },
  { subject: 'five', grade: 4 },
]
const getSubject = (id) => {
  return new Promise((resolve, reject) => {
    if (data[id] == undefined) {
      reject('there is not found the subject')
    } else {
      setTimeout(() => resolve(data[id]), 1000)
    }
  })
}

const getItem = async () => {
  for (let i = 0; i < data.length; i++) {
    div(await getSubject(i))
  }
}
getItem()
function div({ subject, grade }) {
  let div = ` <div class="subject">
  <div class="name">${subject}</div>
  <div class="grade">${grade}</div>
  </div>`
  subjects.innerHTML += div
}
