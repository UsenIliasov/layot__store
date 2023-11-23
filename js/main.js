const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});

const swiperOne = new Swiper('.feedback__swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  });