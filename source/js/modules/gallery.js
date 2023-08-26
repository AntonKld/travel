import Swiper from '../vendor/swiper';

export const initGallerySlider = () => {
  const swiper = new Swiper('.gallery__slider', {
    speed: 300,
    slidesPerView: 'auto',
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

    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },
  });

  return swiper;
};
