const btn = document.getElementById('btn')
const p = document.getElementById('p')
const messageModal = document.getElementById('message')
const grade = document.getElementById('grade')
const modalBackground = document.querySelector('.modal-background')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  let result, message
  try {
    result = parseInt(document.querySelector('input').value)
    message = messageGrade(result)

    if (isNaN(result) || result > 10 || result < 0) {
      result = ''
      throw 'the maximum grade is the 10 and the minimum is 0'
    }
  } catch (error) {
    message = error
  }
  openModal(result, message)
})
const messageGrade = (grade) => {
  switch (grade) {
    case 1:
      return `Last exam result: 01 / 10`
    case 2:
      return `Last exam result: 02 / 10`
    case 3:
      return `Last exam result: 03 / 10`
    case 4:
      return `Last exam result: 04 / 10`
    case 5:
      return `Last exam result: 05 / 10`
    case 6:
      return `Last exam result: 06 / 10`
    case 7:
      return `Last exam result: 07 / 10`
    case 8:
      return `Last exam result: 08 / 10`
    case 9:
      return `Last exam result: 09 / 10`
    case 10:
      return `Last exam result: 10 / 10`
    default:
      return null
  }
}
const openModal = (result, message) => {
  let totalGrade = Math.floor((8 + 6 + result) / 3)
  if (!result == '') {
    if (totalGrade <= 6) {
      p.innerHTML = 'disapproved'
      p.style.color = 'red'
      grade.innerHTML = `Total Grade : <b>${totalGrade}</b>`
      messageModal.innerHTML = message
      modalBackground.style.display = 'flex'
    } else {
      p.innerHTML = 'approved'
      p.style.color = 'green'
      grade.innerHTML = `Total Grade : <b>${totalGrade}</b>`
      messageModal.innerHTML = message
      modalBackground.style.display = 'flex'
    }
  } else {
    modalBackground.style.display = 'flex'
    messageModal.innerHTML = message
  }
}
document.getElementById('btn-continue').addEventListener('click', () => {
  document.querySelector('form').reset()
  modalBackground.style.display = 'none'
})
