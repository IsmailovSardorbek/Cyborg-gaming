const toggleNav = document.querySelector('.toggle-nav'),
  menu = document.querySelector('.menu'),
  navLinks = document.querySelectorAll('.nav-link')

toggleNav.addEventListener('click', toggleMenu)

function toggleMenu() {
  menu.classList.toggle('show')
}

navLinks.forEach((link) => {
  link.addEventListener('click', hideOnClick)
})

function hideOnClick() {
  menu.classList.remove('show')
}
