const mobileMenu = document.querySelector('.mobile-menu');
const MainNav = document.querySelector('#main-nav');
const newsletter = document.querySelector('.newsletter');
const errorMessage = document.querySelector('.error-message');

// responsive slider for testimonials section
const swiperStyle = function () { 
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.4,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 1.8,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
    }
  });
}

window.addEventListener('load', swiperStyle);


// mobile menu
const toggleMobileMenu = function () {
  if (!MainNav.classList.contains('show')) {
    MainNav.classList.add('show');
    mobileMenu.firstElementChild.src = './images/icon-close.svg';
  } else {
    MainNav.classList.remove('show');
    mobileMenu.firstElementChild.src = './images/icon-hamburger.svg';
  }
}

mobileMenu.addEventListener('click', toggleMobileMenu);


// validate form
const validateForm = function (e) {
  e.preventDefault();
  checkInputs()
}

const checkInputs = function () {
  const email = document.querySelector('#email').value.trim();
  if (email === '') {
    emailError('This field cannot be empty');
  } else if (!isEmailValid(email)) {
    emailError('Please, insert a valid email');
  } else {
    errorMessage.textContent = '';
    newsletter.classList.remove('error');
  }
}

const isEmailValid = function (email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const emailError = function (message) {
  errorMessage.textContent = message;
  newsletter.classList.add('error');
}

newsletter.addEventListener('submit', validateForm);
