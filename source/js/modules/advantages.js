import Swiper from '../vendor/swiper';

const createSlider = () => {
  return new Swiper('.advantages__slider', {
    speed: 300,
    watchOverflow: true,
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,

    navigation: {
      nextEl: '.advantages__next',
      prevEl: '.advantages__prev',
    },
  });
};

export const initAdvantagesSlider = () => {
  let slider = null;

  const isValid = () => {
    const desktopWidth = window.matchMedia('(min-width: 1200px)');
    return desktopWidth.matches;
  };

  if (isValid()) {
    slider = createSlider();
  }

  window.addEventListener('resize', () => {
    if (isValid()) {
      if (!slider) {
        slider = createSlider();
      }
    } else {
      if (slider) {
        slider.destroy();
        slider = null;
      }
    }
  });
};
