// Shopify Developer Portfolio - Enhanced JavaScript
// Modern Interactivity, Scroll Animations, and Dynamic Effects

document.addEventListener('DOMContentLoaded', function () {

  // ========================================
  // Mobile Navigation Toggle
  // ========================================
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  if (navbarToggle) {
    navbarToggle.addEventListener('click', function () {
      navbarMenu.classList.toggle('active');

      // Animate hamburger icon
      const spans = this.querySelectorAll('span');
      spans[0].style.transform = navbarMenu.classList.contains('active')
        ? 'rotate(-45deg) translate(-5px, 6px)'
        : 'none';
      spans[1].style.opacity = navbarMenu.classList.contains('active') ? '0' : '1';
      spans[2].style.transform = navbarMenu.classList.contains('active')
        ? 'rotate(45deg) translate(-5px, -6px)'
        : 'none';
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.navbar-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        navbarMenu.classList.remove('active');

        // Reset hamburger icon
        if (navbarToggle) {
          const spans = navbarToggle.querySelectorAll('span');
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      }
    });
  });

  // ========================================
  // Navbar Scroll Effect
  // ========================================
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
  });

  // ========================================
  // Highlight Active Page in Navigation
  // ========================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ========================================
  // Scroll-Triggered Animations
  // ========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all cards and elements with animate-on-scroll class
  const animateElements = document.querySelectorAll('.project-card, .skill-category, .service-card, .animate-on-scroll');
  animateElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });

  // ========================================
  // Project Card Tilt Effect (Subtle 3D)
  // ========================================
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ========================================
  // Tech Badge Interaction
  // ========================================
  const techBadges = document.querySelectorAll('.tech-badge, .tech-tag');

  techBadges.forEach(badge => {
    badge.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-2px) rotate(' + (Math.random() * 6 - 3) + 'deg)';
    });

    badge.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) rotate(0deg)';
    });
  });

  // ========================================
  // Button Ripple Effect
  // ========================================
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // ========================================
  // Parallax Effect for Hero Section - DISABLED
  // (Removed to prevent text overlap issues)
  // ========================================

  // ========================================
  // Typing Effect for Hero Title (Optional - on homepage only)
  // ========================================
  const heroTitle = document.querySelector('.hero h1');

  if (heroTitle && currentPage === 'index.html' || currentPage === '') {
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';

    let charIndex = 0;

    function typeWriter() {
      if (charIndex < originalText.length) {
        heroTitle.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
      }
    }

    setTimeout(typeWriter, 500);
  }

  // ========================================
  // Skills List Animation
  // ========================================
  const skillItems = document.querySelectorAll('.skill-list li');

  skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.05}s`;
    item.classList.add('animate-on-scroll');
    observer.observe(item);
  });

  // ========================================
  // Contact Form Validation and Handling
  // ========================================
  const contactForm = document.querySelector('#contact-form');

  if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');

    // Add floating label effect
    inputs.forEach(input => {
      input.addEventListener('focus', function () {
        this.parentElement.classList.add('focused');
      });

      input.addEventListener('blur', function () {
        if (this.value === '') {
          this.parentElement.classList.remove('focused');
        }
      });
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form values
      const name = document.querySelector('#name').value.trim();
      const email = document.querySelector('#email').value.trim();
      const message = document.querySelector('#message').value.trim();

      // Basic validation
      if (name === '' || email === '' || message === '') {
        showNotification('Please fill out all fields.', 'error');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
      }

      // Success message
      showNotification('Thank you for your message! I will get back to you soon.', 'success');
      contactForm.reset();
    });
  }

  // ========================================
  // Custom Notification System
  // ========================================
  function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 16px 24px;
      background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #34d399)' : 'linear-gradient(135deg, #ef4444, #f87171)'};
      color: white;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      z-index: 10000;
      animation: slideInRight 0.3s ease-out;
      font-weight: 600;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease-out';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }

  // ========================================
  // Image Lazy Loading Enhancement
  // ========================================
  const images = document.querySelectorAll('img');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.add('loading');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => {
    imageObserver.observe(img);
  });

  // ========================================
  // Custom Cursor Effect - REMOVED
  // (Removed per user request)
  // ========================================

  // ========================================
  // Performance: Debounce Scroll Events
  // ========================================
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ========================================
  // Add Page Load Animation
  // ========================================
  window.addEventListener('load', function () {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease';
      document.body.style.opacity = '1';
    }, 100);
  });

  // ========================================
  // Add Particle Background Animation (Subtle)
  // ========================================
  function createParticles() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.3';
    heroSection.style.position = 'relative';
    heroSection.insertBefore(canvas, heroSection.firstChild);

    const ctx = canvas.getContext('2d');
    canvas.width = heroSection.offsetWidth;
    canvas.height = heroSection.offsetHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  createParticles();

  console.log('✨ Portfolio loaded with enhanced interactivity!');
});

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
