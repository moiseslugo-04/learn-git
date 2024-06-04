//getDate()
//getDay()
//getMonth()
//getYear()
//getFullYear()

// day
//getHours()
//getMinutes()
//getSeconds()
const addCero = (n) => (n <= 9 ? `0${n}` : n)

const inputTime = document.getElementById('time')
function timer() {
  const time = new Date()
  let hour = addCero(time.getHours())
  let minute = addCero(time.getMinutes())
  let second = addCero(time.getSeconds())
  inputTime.textContent = `${hour}:${minute}:${second}`
}
timer()
setInterval(() => {
  timer()
}, 1000)
