document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking a nav link
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Add 'scrolled' class to header on scroll
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Highlight nav links based on scroll position
    let fromTop = window.scrollY + header.offsetHeight + 10;

    navItems.forEach(link => {
      const section = document.querySelector(link.hash);
      if(section) {
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  });
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
      });
    }
  });
});
// Highlight active section in the navigation
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
      const id = section.getAttribute('id');
      document.querySelector(`.nav-links a[href="#${id}"]`).classList.add('active');
    } else {
      const id = section.getAttribute('id');
      document.querySelector(`.nav-links a[href="#${id}"]`).classList.remove('active');
    }
  });
});
// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
      });
    }
  });
});
// Add a scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.className = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);
// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});
// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// Add a back-to-top button
document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = '↑ Back to Top';
  backToTopBtn.className = 'back-to-top';
  document.body.appendChild(backToTopBtn);

  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  // Scroll to top when button is clicked
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
// Add a scroll-to-top button
document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.textContent = '↑';
  scrollToTopBtn.className = 'scroll-to-top';
  document.body.appendChild(scrollToTopBtn);

  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  // Scroll to top when button is clicked
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
// Add a scroll-to-top button
document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.textContent = '↑';
  scrollToTopBtn.className = 'scroll-to-top';
  document.body.appendChild(scrollToTopBtn);

  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  // Scroll to top when button is clicked
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
// Add a scroll-to-top button
