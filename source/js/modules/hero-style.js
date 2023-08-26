const hero = document.querySelector('.hero');
const header = document.querySelector('.page-header');
const content = document.querySelector('.hero__inner');

export const getHeight = (newTop) => {
  if (!hero) {
    return;
  }

  hero.style.marginTop = `${-newTop}px`;
  content.style.paddingTop = `${newTop}px`;
};

export const getHeaderAfterInnerChanging = (callback) => {
  const observer = new MutationObserver((mutationRecords) => {
    callback(header, mutationRecords);
  });

  const observerOption = {
    childList: true,
    subtree: true,
  };

  if (header) {
    observer.observe(header, observerOption);
  }
};

export const getHeaderAfterWindowResizeChanging = (callback) => {
  window.addEventListener('resize', () => {
    callback(header);
  });
};

export const initHero = () => {
  const block = document.querySelector('.hero');
  block.classList.remove('hero--no-js');
};
