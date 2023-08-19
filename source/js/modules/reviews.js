import Swiper from '../vendor/swiper';

export const initReviewsSlider = () => {
  const swiper = new Swiper('.reviews__wrapper', {
    speed: 300,
    spaceBetween: 30,
    slidesPerView: 'auto',
    watchOverflow: true,

    navigation: {
      prevEl: '.reviews__prev',
      nextEl: '.reviews__next',
    },
  });

  return swiper;
};
