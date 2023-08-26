import Swiper from '../vendor/swiper';

export const initTrainingSlider = () => {
  const slider = new Swiper('.training__slider', {
    direction: 'horizontal',
    speed: 300,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
    navigation: {
      nextEl: '.training__next',
      prevEl: '.training__prev',
    },
  });

  return slider;
};
