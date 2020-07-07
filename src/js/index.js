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
    spaceBetween:30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

window.addEventListener('load', () => {
  const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  if(width < 1000) {
    MainNav.classList.add('hide');
    mobileSwipper();
  } else {
    desktopSwipper();
  }
})

const mobileMenu = document.querySelector('.mobile-menu');
const MainNav = document.querySelector('#main-nav');

mobileMenu.addEventListener('click', () => {
  if (MainNav.classList.contains('hide')) {
    MainNav.classList.add('show');
    MainNav.classList.remove('hide');
    mobileMenu.firstElementChild.src = './images/icon-close.svg';
  } else {
    MainNav.classList.remove('show');
    MainNav.classList.add('hide');
    mobileMenu.firstElementChild.src = './images/icon-hamburger.svg';
  }


})