const header = document.querySelector('.page-header');
const hero = document.querySelector('.hero');
const heroSlide = hero.querySelectorAll('.hero__slide');


const setMargin = () => {
  if (!header.classList.contains('page-header--is-active')) {
    hero.style.marginTop = `-${header.offsetHeight}px`;
    heroSlide.forEach((slide) => {
      slide.style.paddingTop = `${header.offsetHeight}px`;
    });
  }
};

const observeMutations = () => {
  const target = new MutationObserver(setMargin);

  target.observe(header, {
    childList: true,
    subtree: true,
  });
};

export const initHeroMargin = () => {
  if (!header.classList.contains('page-header--is-active')) {
    observeMutations();
    setMargin();
    window.addEventListener('resize', () => {
      setMargin();
    });
  }
};

export const initHero = () => {
  const block = document.querySelector('.hero');
  block.classList.remove('hero--no-js');
};
