import Swiper from '../vendor/swiper';

export const heroSwiper = () => {
  const swiper = new Swiper('.hero__swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 300,
    allowTouchMove: false,
    breakpoints: {
      0: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1200: {
        allowTouchMove: false,
      },
    },
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
  });
  swiper.init();
};

export const initToursSlider = () => {
  const slider = new Swiper('.tours__slider', {
    direction: 'horizontal',
    watchOverflow: true,
    speed: 300,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
    navigation: {
      nextEl: '.tours__next',
      prevEl: '.tours__prev',
    },
  });

  return slider;
};
