const btn = document.getElementById('btn')
const one = document.getElementById('one')
const two = document.getElementById('two')
async function getInfo() {
  try {
    let result = await axios('info.txt')
    console.log(result)
    const { approved, disapproved } = result.data
    one.innerHTML = approved
    two.innerHTML = disapproved
    show()
  } catch (e) {
    showError()
    console.log(`request ${e}`)
  }
}
function showError() {
  document.querySelector('.result').style.display = 'none'
  document.querySelector('.error').style.display = 'block'
}

function show() {
  document.querySelector('.result').style.display = 'block'
  document.querySelector('.error').style.display = 'none'
}
btn.addEventListener('click', getInfo)
