// get toggle button
const toggleButton = document.getElementsByClassName('toggle-button')[0]
// get navbar links
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// add event listener to toggle active class
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})