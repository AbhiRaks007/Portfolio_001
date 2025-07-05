// Cursor effect
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dark/Light mode toggle
const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    modeIcon.textContent = '🌞';
  } else {
    modeIcon.textContent = '🌙';
  }
});

// Animate cards on scroll
const cards = document.querySelectorAll('.card-glass, .hero-glass');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.2 });
cards.forEach(card => {
  card.style.animationPlayState = 'paused';
  observer.observe(card);
});

// Contact form feedback
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    contactForm.reset();
    alert('Message sent!');
  });
}

// Hamburger menu functionality and smooth scroll for nav links
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Hamburger toggle
  hamburger.addEventListener('click', function () {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('nav-menu-active');
    hamburger.classList.toggle('is-active');
  });

  // Close menu on link click (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('nav-menu-active');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
