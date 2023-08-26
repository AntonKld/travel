import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {burgerMenuInit} from './modules/burger.js';
import {heroSwiper, initToursSlider} from './modules/slider.js';
import {initPlayVideo} from './modules/video';
import {addAudioHandlers} from './modules/audio';
import {initTrainingSlider} from './modules/training';
import {initReviewsSlider} from './modules/reviews';
import {initAdvantagesSlider} from './modules/advantages';
import {initGallerySlider} from './modules/gallery';
import {initContactsMap} from './modules/map';
import {getHeight, initHero, getHeaderAfterInnerChanging, getHeaderAfterWindowResizeChanging} from './modules/hero-style';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    addAudioHandlers();
    initToursSlider();
    initTrainingSlider();
    initReviewsSlider();
    getHeaderAfterInnerChanging((header) => {
      getHeight(header.offsetHeight);
    });
    getHeaderAfterWindowResizeChanging((header) => {
      getHeight(header.offsetHeight);
    });
    const form = new Form();
    window.form = form;
    form.init();
    initHero();
    heroSwiper();
    burgerMenuInit();
    initPlayVideo();
    initAdvantagesSlider();
    initGallerySlider();
    initContactsMap();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
