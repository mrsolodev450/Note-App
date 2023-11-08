const createNote = document.querySelector('.add-note')
const createSection = document.querySelector('.write-note-section')
const addButton = document.querySelector('.add-note-btn')
const noteText = document.querySelector('.note-text')
const noteTitle = document.querySelector('.note-title')
const allNotes = document.querySelector('.all-notes')


allNotes.innerHTML = getData()

createNote.addEventListener('click', ()=>{
  createSection.style.display = 'flex'
  createSection.childNodes[1].style.animation = 'slide 1 .3s ease'
})


addButton.addEventListener('click', (e)=>{
  
  if (noteText.value == '' || noteTitle.value == '' || (noteText.value == '' && noteTitle.value == '')) return
  
  
  allNotes.innerHTML += `<div class="note"><h2 class="title">${noteTitle.value}</h2><p class="text" contenteditable="true">${noteText.value}</p></div>`
  
  saveData()
  
  createSection.style.display = 'none'
  noteTitle.value = ''
  noteText.value = ''
  
  
})


function saveData() {
  localStorage.setItem('data', allNotes.innerHTML)
}

function getData() {
  return localStorage.getItem('data')
}


