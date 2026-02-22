// Burger menu functionality for mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Optional: Close menu when a link is clicked (for better UX)
