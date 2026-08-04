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


  /* ─── TESTIMONIAL CAROUSEL (basic prev/next swap) ─── */
  var allTestimonials = [
    {
      initial: 'S',
      color: '#1A6B8A',
      name: 'Srikanth Byalal',
      time: 'a year ago',
      text: 'The best clinic for hair fall treatment, under Dr.Madan consultation I have recovered my baldness, here they got many treatment packages for different types of hair-falls, one of the best clinic with friendly ppl & with advanced equipments, medications, etc. Highly recommended clinic for hair treatment.'
    },
    {
      initial: 'I',
      color: '#2A9DBB',
      name: 'inderkr sharma',
      time: 'a year ago',
      text: 'Dr Madan is good for all hair fall related issues; you can see significant results in couple of months. Staffs are also well behaved and help you at your doubts and sessions updates.'
    },
    {
      initial: 'R',
      color: '#0D2137',
      name: 'Ravi Kumar',
      time: '8 months ago',
      text: 'Excellent clinic with professional staff. I got PRP therapy done here and the results were amazing. Dr. Madan is very knowledgeable and explains everything clearly. Highly recommend!'
    },
    {
      initial: 'P',
      color: '#1A6B8A',
      name: 'Priya Nair',
      time: '6 months ago',
      text: 'I had acne scars for years. After the treatment at VTIARA, my skin looks so much better! The team is very caring and professional. Worth every penny.'
    }
  ];

  var currentPage = 0;
  var pageSize = 2;

  function renderTestimonials() {
    var grid = document.querySelector('.testimonial-grid');
    if (!grid) return;

    var start = currentPage * pageSize;
    var items = allTestimonials.slice(start, start + pageSize);

    grid.innerHTML = items.map(function (t) {
      return '<div class="testimonial-card">'
        + '<div class="testimonial-top">'
        + '<div class="testimonial-user">'
        + '<div class="avatar" style="background:' + t.color + ';">' + t.initial + '</div>'
        + '<div>'
        + '<div class="testimonial-name">' + t.name + '</div>'
        + '<div class="testimonial-time">' + t.time + '</div>'
        + '</div></div>'
        + '<div class="stars">★★★★★</div>'
        + '</div>'
        + '<p>' + t.text + '</p>'
        + '</div>';
    }).join('');
  }

  var prevBtn = document.querySelector('.carousel-btn:first-child');
  var nextBtn = document.querySelector('.carousel-btn:last-child');

  if (prevBtn && nextBtn) {
    nextBtn.addEventListener('click', function () {
      var maxPage = Math.ceil(allTestimonials.length / pageSize) - 1;
      currentPage = currentPage < maxPage ? currentPage + 1 : 0;
      renderTestimonials();
    });

    prevBtn.addEventListener('click', function () {
      var maxPage = Math.ceil(allTestimonials.length / pageSize) - 1;
      currentPage = currentPage > 0 ? currentPage - 1 : maxPage;
      renderTestimonials();
    });
  }

});
