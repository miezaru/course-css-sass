// Make mobile navigation work
const checkboxEl = document.querySelector('#navi-toggle')
const navigationEl = document.querySelector('.navigation')
const navLinkEl = document.querySelectorAll('.navigation__link')

checkboxEl.addEventListener('change', function () {
  if (this.checked) {
    navigationEl.classList.toggle('navigation--open')
  } else {
    navigationEl.classList.remove('navigation--open')
  }
})

navLinkEl.forEach(function (link) {
  link.addEventListener('click', function () {
    navigationEl.classList.remove('navigation--open')
    checkboxEl.checked = false
  })
})

const popupEl = document.querySelector('#popup')

document.addEventListener('click', function () {
  const hash = window.location.hash
  if (hash == '#popup') {
    window.location.hash = '#section-tours'
  }
})

// Smooth scrolling animation
// const allLinks = document.querySelectorAll('a')

// allLinks.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault()
//     const href = link.getAttribute('href')

//     // Scroll back to top
//     if (href === '#') {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       })
//     }

//     // if (href == '#popup') {
//     //   const sectionEl = document.querySelector('#popup')
//     //   sectionEl.
//     // }

//     //Scroll to other links
//     if (href !== '#' && href.startsWith('#')) {
//       const sectionEl = document.querySelector(href)
//       sectionEl.scrollIntoView({ behavior: 'smooth' })
//     }
//   })
// })
