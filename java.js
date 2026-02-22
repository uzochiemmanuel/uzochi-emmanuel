// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Highlight active link
const links = document.querySelectorAll("nav a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = "#ff6600";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul");
  const links = document.querySelectorAll("nav a");

  // Toggle menu on click
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking a link (mobile)
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Highlight active page link
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = "#ff6600";
    }
  });
});

