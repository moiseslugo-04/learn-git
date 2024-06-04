const dataForm = document.querySelector('form')
const table = document.getElementById('tbody')
dataForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target))
  const users = JSON.parse(localStorage.getItem('users')) || []
  users.push(data)
  localStorage.setItem('users', JSON.stringify(users))
  dataForm.reset()
  showData()
})
window.addEventListener('load', () => showData())
function showData() {
  table.innerHTML = ''
  let users = JSON.parse(localStorage.getItem('users'))
  console.log(users)
  users.forEach((user, index) => {
    const { name, email, password } = user
    let html = `
    <tr>
    <th scope="row">${index}</th>
    <td>${name}</td>
    <td>${password}</td>
    <td>${email}</td>
    <td>
        <button data-id=${index} class='delete'>delete</button>
    </td>
  </tr>`
    table.innerHTML += html
  })

  const btnUpdate = document.querySelectorAll('.update')
  const btnDelete = document.querySelectorAll('.delete')
  handleUpdate(btnUpdate)
  handleDelete(btnDelete)
}
function handleDelete(buttons) {
  let users = JSON.parse(localStorage.getItem('users')) || []

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      let id = parseInt(btn.getAttribute('data-id'))
      let tr = btn.closest('tr')
      users = users.filter((user, index) => index != id)
      tr.remove()
      localStorage.setItem('users', JSON.stringify(users))
      showData()
    })
  })
}
function handleUpdate(buttons) {
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {})
  })
}
