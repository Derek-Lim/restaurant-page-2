import "./styles.css"
import homePage from './home.js'
import menuPage from "./menu.js"

const homeBtn = document.getElementById('home')
const menuBtn = document.getElementById('menu')
const contactBtn = document.getElementById('contact')

function displayHomePage() {
  document.getElementById('content').innerHTML = ''
  document.getElementById('home').classList.add('selected')
  document.getElementById('menu').classList.remove('selected')
  document.getElementById('contact').classList.remove('selected')

  document.body.append(homePage())
}

function displayMenuPage() {
  document.getElementById('content').innerHTML = ''
  document.getElementById('menu').classList.add('selected')
  document.getElementById('home').classList.remove('selected')
  document.getElementById('contact').classList.remove('selected')

  document.body.append(menuPage())
}

displayHomePage()

homeBtn.addEventListener('click', displayHomePage)
menuBtn.addEventListener('click', displayMenuPage)
