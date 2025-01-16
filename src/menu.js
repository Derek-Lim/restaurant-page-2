export default function menuPage() {
  const content = document.getElementById('content')

  // Heading
  const heading = document.createElement('h1')
  heading.classList.add('heading', 'container')
  heading.textContent = 'Menu'
  content.appendChild(heading)

  // Item 1
  const item1 = document.createElement('div')
  item1.classList.add('container')
  content.appendChild(item1)

  const item1Name = document.createElement('h3')
  item1Name.textContent = 'Beary Veggie Sandwich'
  item1.appendChild(item1Name)

  const item1Description = document.createElement('p')
  item1Description.classList.add('description')
  item1Description.textContent = 'Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.'
  item1.appendChild(item1Description)

  const item1Price = document.createElement('p')
  item1Price.classList.add('price')
  item1Price.textContent = '$8'
  item1.appendChild(item1Price)

  // Item 2
  const item2 = document.createElement('div')
  item2.classList.add('container')
  content.appendChild(item2)

  const item2Name = document.createElement('h3')
  item2Name.textContent = 'Honey Tea'
  item2.appendChild(item2Name)

  const item2Description = document.createElement('p')
  item2Description.classList.add('description')
  item2Description.textContent = 'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!'
  item2.appendChild(item2Description)

  const item2Price = document.createElement('p')
  item2Price.classList.add('price')
  item2Price.textContent = '$2'
  item2.appendChild(item2Price)

  // Item 3
  const item3 = document.createElement('div')
  item3.classList.add('container')
  content.appendChild(item3)

  const item3Name = document.createElement('h3')
  item3Name.textContent = 'Honeycomb'
  item3.appendChild(item3Name)

  const item3Description = document.createElement('p')
  item3Description.classList.add('description')
  item3Description.textContent = 'Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.'
  item3.appendChild(item3Description)

  const item3Price = document.createElement('p')
  item3Price.classList.add('price')
  item3Price.textContent = '$6'
  item3.appendChild(item3Price)

  // Item 4
  const item4 = document.createElement('div')
  item4.classList.add('container')
  content.appendChild(item4)

  const item4Name = document.createElement('h3')
  item4Name.textContent = 'The Beary Best Porridge'
  item4.appendChild(item4Name)

  const item4Description = document.createElement('p')
  item4Description.classList.add('description')
  item4Description.textContent = 'Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.'
  item4.appendChild(item4Description)

  const item4Price = document.createElement('p')
  item4Price.classList.add('price')
  item4Price.textContent = '$5'
  item4.appendChild(item4Price)

  return content
}