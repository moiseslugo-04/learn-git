const inputFile = document.getElementById('file')
const container = document.querySelector('.container')
const zone = document.getElementById('zone')
const loadContent = document.getElementById('load')
inputFile.addEventListener('change', () => readFile(inputFile.files))

function readFile(files) {
  for (let file of files) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', () => showImg(reader.result))
  }
}
function showImg(url) {
  container.innerHTML += `<img src=${url} alt='image'/>`
}
//From here the drag and drop begins
zone.addEventListener('dragover', (e) => {
  e.preventDefault()
  zone.style.opacity = '0.5'
  zone.style.borderColor = 'blue'
})
zone.addEventListener('dragleave', () => zoneStyle())
zone.addEventListener('drop', (e) => {
  e.preventDefault()
  zoneStyle()
  loadFile(e.dataTransfer.files)
})

function zoneStyle() {
  zone.style.opacity = '1'
  zone.style.borderColor = 'silver'
}

function loadFile(files) {
  for (let file of files) {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.addEventListener('progress', (e) =>
        showLoad(Math.round((file.size / e.loaded) * 100))
      )
      reader.readAsDataURL(file)
      reader.addEventListener('load', () => showImg(reader.result))
    } else {
      alert(`${file.name} that is no a img`)
    }
  }
}
// This can be improved
function showLoad(load) {
  loadContent.textContent = `${load}%`
  loadContent.style.width = `${load / 2}%`
  loadContent.style.display = 'flex'
  zone.style.display = 'none'
  setTimeout(() => {
    loadContent.style.display = 'none'
    zone.style.display = 'flex'
  }, 1000)
}
