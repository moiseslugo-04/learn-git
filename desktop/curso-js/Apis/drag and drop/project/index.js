document.addEventListener('DOMContentLoaded', () => {
  const columns = document.querySelectorAll('.column')
  const inputName = document.getElementById('taskName')
  const bntSave = document.getElementById('save')

  let tasks = JSON.parse(localStorage.getItem('tasks')) || []
  function init() {
    setupColumns()
    setupSaveBottom()
    loadTasksFromStorage()
  }
  function setupColumns() {
    columns.forEach((column) => {
      column.addEventListener('dragover', allowDrop)
      column.addEventListener('drop', handleDrop)
      column.addEventListener('dragleave', dragLeave)

      // Adding touch events
      column.addEventListener('touchstart', handleTouchStart, { passive: true })
      column.addEventListener('touchmove', handleTouchMove, { passive: false })
      column.addEventListener('touchend', handleTouchEnd)
    })
  }

  function setupSaveBottom() {
    bntSave.addEventListener('click', (e) => {
      e.preventDefault()
      if (!inputName.value) return
      let id = Date.now().toString()
      const newTask = createTask(inputName.value, id, 'to-do')
      loadTask(newTask, newTask.column)
      inputName.value = ''
      saveTasks()
    })
  }
  function allowDrop(e) {
    e.preventDefault()
    const column = e.target.closest('.column')
    if (column) {
      column.style.borderColor = getBorderColor(column.getAttribute('name'))
      dragLeave(e)
    }
  }

  function getBorderColor(name) {
    const borderColor = { doing: '#3ab6149f', done: '#f0792996' }
    return borderColor[name] || '#3a648a'
  }

  function dragLeave(e) {
    const column = e.target.closest('.column')
    if (column) column.style.borderColor = '#3a648a'
  }

  function handleDrop(e) {
    const taskID = e.dataTransfer.getData('text')
    const task = document.getElementById(taskID)
    const column = e.target.closest('.column')
    if (column && task) {
      column.append(task)
      updateTaskColumn(taskID, column.getAttribute('name'))
      saveTasks()
    }
  }

  function createTask(name, id, column) {
    let task = document.createElement('div')
    task.className = 'task'
    task.id = id
    task.column = column
    task.draggable = true
    task.innerHTML = `<h3>${name}</h3><div class='delete'>🗑️ </div>`
    task.setAttribute('column', column)
    task.addEventListener('dragstart', handelStartDrag)

    // Adding touch events
    task.addEventListener('touchstart', handleTouchStart, { passive: true })
    task.addEventListener('touchmove', handleTouchMove, { passive: false })
    task.addEventListener('touchend', handleTouchEnd)

    handelButtons(task)
    return { task, id, name, column }
  }

  function loadTask({ task, id, name, column }, columnInit) {
    let currentColumn = document.querySelector(`.column[name="${columnInit}"]`)
    if (currentColumn) {
      currentColumn.appendChild(task)
      tasks.push({ id, name, column })
      saveTasks()
    }
  }
  function handelStartDrag(e) {
    let taskID = e.target.id
    e.dataTransfer.setData('text', taskID)
  }

  function updateTaskColumn(taskId, column) {
    let taskIndex = tasks.findIndex((task) => task.id === taskId)
    if (taskIndex !== -1) tasks[taskIndex].column = column
  }
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  function loadTasksFromStorage() {
    tasks.forEach(({ id, name, column }) => {
      let { task } = createTask(name, id, column)
      let currentColumn = document.querySelector(`.column[name="${column}"]`)
      currentColumn.append(task)
    })
  }
  function handelButtons(task) {
    const btnDeleted = task.querySelector('.delete')
    console.log(btnDeleted)

    if (btnDeleted) {
      btnDeleted.addEventListener('click', () => deletedTask(task))
    }
  }
  function deletedTask(task) {
    tasks = tasks.filter(({ id }) => id !== task.id)
    task.remove()
    saveTasks()
  }

  function handleTouchStart(e) {
    if (e.target.classList.contains('task')) {
      draggedTask = e.target
    }
  }

  // Touch event handlers
  let draggedTask = null
  function handleTouchMove(e) {
    if (draggedTask) {
      e.preventDefault()
      let touch = e.touches[0]
      draggedTask.style.position = 'absolute'
      draggedTask.style.left = `${touch.pageX - draggedTask.offsetWidth / 2}px`
      draggedTask.style.top = `${touch.pageY - draggedTask.offsetHeight / 2}px`
    }
  }

  function handleTouchEnd(e) {
    if (draggedTask) {
      let taskID = draggedTask.id
      let column = document
        .elementFromPoint(
          e.changedTouches[0].clientX,
          e.changedTouches[0].clientY
        )
        .closest('.column')
      if (column) {
        column.append(draggedTask)
        updateTaskColumn(taskID, column.getAttribute('name'))
        saveTasks()
      }
      draggedTask.style.position = ''
      draggedTask.style.left = ''
      draggedTask.style.top = ''
      draggedTask = null
    }
  }
  init()
})
