import Swiper from '../vendor/swiper';

export const heroSwiper = () => {
  const swiper = new Swiper('.hero__swiper', {
    direction: 'horizontal',
    loop: false,
    speed: 300,
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
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 300,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.tours__next',
      prevEl: '.tours__prev',
    },
  });

  return slider;
};
