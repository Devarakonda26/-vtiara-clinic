/* =========================================
   VTIARA Hair & Skin Clinic – JavaScript
   ========================================= */

/* ─── Close all menus on back/forward navigation ─── */
window.addEventListener('pageshow', function () {
  document.querySelectorAll('.mega-menu, .dropdown-menu').forEach(function (m) {
    m.style.display = '';
  });
  document.querySelectorAll('.nav-item.sub-open, .mega-col.col-open').forEach(function (el) {
    el.classList.remove('sub-open', 'col-open');
  });
  var nav = document.getElementById('nav-links');
  var hamburger = document.getElementById('hamburger');
  var overlay = document.getElementById('nav-overlay');
  if (nav) nav.classList.remove('open');
  if (hamburger) hamburger.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.classList.remove('menu-open');
});

document.addEventListener('DOMContentLoaded', function () {

  /* ─── FAQ ACCORDION ─── */
  function toggleFaq(el) {
    const item = el.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // Close all open items
    document.querySelectorAll('.faq-item.open').forEach(function (i) {
      i.classList.remove('open');
    });
    // Open clicked item if it was closed
    if (!isOpen) item.classList.add('open');
  }

  document.querySelectorAll('.faq-question').forEach(function (q) {
    q.addEventListener('click', function () {
      toggleFaq(this);
    });
  });


  /* ─── STICKY NAV SHADOW ─── */
  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 2px 16px rgba(13,33,55,0.10)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });


  /* ─── SMOOTH SCROLL for anchor links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  /* ─── BOOK APPOINTMENT FORM ─── */
  // Handled by submitBooking() in index.html via Formspree


});
