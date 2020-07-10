const mobileMenu = document.querySelector('.mobile-menu');
const MainNav = document.querySelector('#main-nav');
const newsletter = document.querySelector('.newsletter');

// show a particular style of swiper depending on screen size
const mobileSwipper = function () {
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
}

const desktopSwipper = function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

const swiperStyle = function () { 
  const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (width < 1000) {
    MainNav.classList.add('hide');
    mobileSwipper();
  } else {
    desktopSwipper();
  }
 }

window.addEventListener('load', swiperStyle);

// mobile menu
const toggleMobileMenu = function () {
  if (MainNav.classList.contains('hide')) {
    MainNav.classList.add('show');
    MainNav.classList.remove('hide');
    mobileMenu.firstElementChild.src = './images/icon-close.svg';
  } else {
    MainNav.classList.remove('show');
    MainNav.classList.add('hide');
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
  const email = document.querySelector('#email').value;
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
  const errorMessage = document.querySelector('.error-message');
  errorMessage.textContent = message;
  newsletter.classList.add('error');
}

newsletter.addEventListener('submit', validateForm);
