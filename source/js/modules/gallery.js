import Swiper from '../vendor/swiper';

export const initGallerySlider = () => {
  const swiper = new Swiper('.gallery__slider', {
    speed: 300,
    slidesPerView: 'auto',

    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },
  });

  return swiper;
};
