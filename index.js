/* ============================================
   Braghi's Entertainment — Site Interactions
   Vanilla JS, no dependencies
   ============================================ */

(function () {
  'use strict';

  // --- Sticky Header: transparent → solid on scroll ---
  const header = document.getElementById('site-header');

  function handleHeaderScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // initial check

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Intersection Observer: fade-in on scroll ---
  const fadeElements = document.querySelectorAll('.fade-in, .fade-in-children');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }
  // --- Newsletter Form: Web3Forms submission ---
  var newsletterForm = document.getElementById('newsletter-form');
  var feedbackEl = document.getElementById('newsletter-feedback');

  if (newsletterForm && feedbackEl) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var submitBtn = newsletterForm.querySelector('button[type="submit"]');
      var originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending…';

      var formData = new FormData(newsletterForm);
      var jsonData = {};
      formData.forEach(function (value, key) {
        jsonData[key] = value;
      });

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(jsonData)
      })
        .then(function (response) { return response.json(); })
        .then(function (data) {
          if (data.success) {
            feedbackEl.textContent = 'Grazie per esserti iscritto! 🎉';
            feedbackEl.className = 'newsletter-feedback success';
            newsletterForm.reset();
          } else {
            feedbackEl.textContent = 'Something went wrong. Please try again.';
            feedbackEl.className = 'newsletter-feedback error';
          }
        })
        .catch(function () {
          feedbackEl.textContent = 'Connection error. Please try again later.';
          feedbackEl.className = 'newsletter-feedback error';
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        });
    });
  }
})();
