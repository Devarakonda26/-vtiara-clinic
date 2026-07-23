/* =========================================
   VTIARA Hair & Skin Clinic – JavaScript
   ========================================= */

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
  var bookForm = document.querySelector('.book-left');
  if (bookForm) {
    var submitBtn = bookForm.querySelector('.btn-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', function () {
        var name    = bookForm.querySelector('input[type="text"]');
        var phone   = bookForm.querySelector('input[type="tel"]');
        var email   = bookForm.querySelector('input[type="email"]');
        var service = bookForm.querySelector('select');

        // Simple validation
        if (!name.value.trim()) {
          alert('Please enter your full name.');
          name.focus();
          return;
        }
        if (!phone.value.trim()) {
          alert('Please enter your mobile number.');
          phone.focus();
          return;
        }
        if (!email.value.trim() || !email.value.includes('@')) {
          alert('Please enter a valid email address.');
          email.focus();
          return;
        }
        if (!service.value) {
          alert('Please select a treatment you are interested in.');
          service.focus();
          return;
        }

        // Success feedback (replace with your real form submission logic)
        submitBtn.textContent = '✓ Request Sent!';
        submitBtn.style.background = '#16a34a';
        submitBtn.style.color = '#fff';
        submitBtn.disabled = true;

        setTimeout(function () {
          submitBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Book Appointment';
          submitBtn.style.background = '';
          submitBtn.style.color = '';
          submitBtn.disabled = false;
        }, 3000);
      });
    }
  }


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
