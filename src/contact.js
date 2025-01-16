export default function contactPage() {
  const content = document.createElement('div')
  content.setAttribute('id', 'content')

  // Heading
  const heading = document.createElement('h1')
  heading.classList.add('heading', 'container')
  heading.textContent = 'Contact Us'
  content.appendChild(heading)

  // Employee 1
  const employee1 = document.createElement('div')
  employee1.classList.add('container')
  content.appendChild(employee1)

  const name1 = document.createElement('h3')
  name1.textContent = 'Mama Bear'
  employee1.appendChild(name1)

  const description1 = document.createElement('div')
  description1.classList.add('description')
  employee1.appendChild(description1)

  const role1 = document.createElement('p')
  role1.textContent = 'Chef'
  description1.appendChild(role1)

  const number1 = document.createElement('p')
  number1.textContent = '555-555-5554'
  description1.appendChild(number1)

  const email1 = document.createElement('p')
  email1.textContent = 'totallyRealEmail@notFake.com'
  description1.appendChild(email1)
  
  // Employee 2
  const employee2 = document.createElement('div')
  employee2.classList.add('container')
  content.appendChild(employee2)

  const name2 = document.createElement('h3')
  name2.textContent = 'Papa Bear'
  employee2.appendChild(name2)

  const description2 = document.createElement('div')
  description2.classList.add('description')
  employee2.appendChild(description2)

  const role2 = document.createElement('p')
  role2.textContent = 'Manager'
  description2.appendChild(role2)

  const number2 = document.createElement('p')
  number2.textContent = '555-555-5555'
  description2.appendChild(number2)

  const email2 = document.createElement('p')
  email2.textContent = 'perfectlyRealEmail@notFake.com'
  description2.appendChild(email2)

  // Employee 3
  const employee3 = document.createElement('div')
  employee3.classList.add('container')
  content.appendChild(employee3)

  const name3 = document.createElement('h3')
  name3.textContent = 'Baby Bear'
  employee3.appendChild(name3)

  const description3 = document.createElement('div')
  description3.classList.add('description')
  employee3.appendChild(description3)

  const role3 = document.createElement('p')
  role3.textContent = 'Waiter'
  description3.appendChild(role3)

  const number3 = document.createElement('p')
  number3.textContent = '555-555-5556'
  description3.appendChild(number3)

  const email3 = document.createElement('p')
  email3.textContent = 'totallyRealEmail@notFake.com'
  description3.appendChild(email3)

  return content
}
