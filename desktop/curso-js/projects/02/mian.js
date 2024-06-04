const students = [
  {
    name: 'moises',
    email: 'moises@gmail.com',
    subject: 'subject 2',
  },
  {
    name: 'lugo',
    email: 'lugo@gmail.com',
    subject: 'subject 1',
  },
  {
    name: 'pedro',
    email: 'pedro@gmail.com',
    subject: 'subject 5',
  },
  {
    name: 'juan',
    email: 'juan@gmail.com',
    subject: 'subject 6',
  },
  {
    name: 'mario',
    email: 'mario@gmail.com',
    subject: 'subject 3',
  },
  {
    name: 'maria',
    email: 'maria@gmail.com',
    subject: 'subject 8',
  },
]

students.forEach((student) => {
  let html = `
  <div class="name">${student.name}</div>
  <div class="email">${student.email}</div>
  <div class="subject">${student.subject}</div>
  <div class="week">
    <select class="week-selected">
      <option value="week 1">week 1</option>
      <option value="week 2">week 2</option>
    </select>
  </div>

`
  document.querySelector('.content').innerHTML += html
})
const btn = document.querySelector('button')
btn.addEventListener('click', () => {
  let confirm = window.confirm('Are you sure')
  if (confirm) {
    document.body.removeChild(btn)
    const weeks = document.querySelectorAll('.week')
    weeks.forEach((week) => {
      week.innerHTML = week.querySelector('select').value
    })
  }
})
