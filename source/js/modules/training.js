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
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.training__next',
      prevEl: '.training__prev',
    },
  });

  return slider;
};
