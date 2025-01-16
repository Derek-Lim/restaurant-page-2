import "./styles.css"
import homePage from './home.js'
import menuPage from "./menu.js"
import contactPage from "./contact.js"

const homeBtn = document.getElementById('home')
const menuBtn = document.getElementById('menu')
const contactBtn = document.getElementById('contact')

function displayPage(pageFunction, btnClass) {
  removeContent()
  updateSelectedBtnClass(btnClass)
  document.body.appendChild(pageFunction())
}

function removeContent() {
  const content = document.getElementById('content')
  if (content) content.remove()
}

function updateSelectedBtnClass(btnClass) {
  const nav = document.querySelector('nav')
  Array.from(nav.children).forEach(child => child.classList.remove('selected'))
  document.getElementById(btnClass).classList.add('selected')
}

displayPage(homePage, 'home')

homeBtn.addEventListener('click', () => displayPage(homePage, 'home'))
menuBtn.addEventListener('click', () => displayPage(menuPage, 'menu'))
contactBtn.addEventListener('click', () => displayPage(contactPage, 'contact'))
