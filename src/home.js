export default function homePage() {
  const content = document.createElement('div')
  content.setAttribute('id', 'content')

  // Restaurant name
  const heading = document.createElement('h1')
  heading.classList.add('heading', 'container')
  heading.textContent = "Beary's Breakfast Bar"
  content.appendChild(heading)

  // Review container
  const reviewContainer = document.createElement('div')
  reviewContainer.classList.add('review-container', 'container')
  content.appendChild(reviewContainer)

  const review = document.createElement('p')
  review.classList.add('review')
  review.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
  reviewContainer.appendChild(review)

  const customer = document.createElement('p')
  customer.classList.add('customer')
  customer.textContent = 'Goldilocks'
  reviewContainer.appendChild(customer)

  // Hours container
  const hoursContainer = document.createElement('div')
  hoursContainer.classList.add('hours-container', 'container')
  content.appendChild(hoursContainer)

  const hoursHeading = document.createElement('h3')
  hoursHeading.textContent = 'Hours'
  hoursContainer.appendChild(hoursHeading)

  const hours = document.createElement('div')
  hours.classList.add('hours')
  hoursContainer.appendChild(hours)

  const sunday = document.createElement('div')
  sunday.textContent = 'Sunday: 8am - 8pm'
  hours.appendChild(sunday)

  const monday = document.createElement('div')
  monday.textContent = 'Monday: 6am - 6pm'
  hours.appendChild(monday)

  const tuesday = document.createElement('div')
  tuesday.textContent = 'Tuesday: 6am - 6pm'
  hours.appendChild(tuesday)

  const wednesday = document.createElement('div')
  wednesday.textContent = 'Wednesday: 6am - 6pm'
  hours.appendChild(wednesday)

  const thursday = document.createElement('div')
  thursday.textContent = 'Thursday: 6am - 10pm'
  hours.appendChild(thursday)

  const friday = document.createElement('div')
  friday.textContent = 'Friday: 6am - 10pm'
  hours.appendChild(friday)

  const saturday = document.createElement('div')
  saturday.textContent = 'Saturday: 8am - 10pm'
  hours.appendChild(saturday)

  // Location container
  const locationContainer = document.createElement('div')
  locationContainer.classList.add('location-container', 'container')
  content.appendChild(locationContainer)

  const locationHeading = document.createElement('h3')
  locationHeading.textContent = 'Location'
  locationContainer.appendChild(locationHeading)

  const location = document.createElement('p')
  location.textContent = '123 Forest Drive, Forestvile, Maine'
  locationContainer.appendChild(location)

  return content
}
