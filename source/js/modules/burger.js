import '../utils/scroll-lock';

const burgerMenuInit = () => {
  const header = document.querySelector('.page-header');
  const menuList = header.querySelector('.nav');
  const menuToggle = header.querySelector('.page-header__toggle');

  header.classList.remove('page-header--no-js');
  menuList.classList.remove('nav--no-js');
  menuToggle.classList.remove('page-header__toggle--no-js');
  const nav = document.querySelector('.nav');

  const onNavOutsideClick = (evt) => {
    if (!evt.target.closest('.nav__list')) {
      closeMenu();
    }
  };

  const documentKeydownHandler = (event) => {
    if (event.key.toLowerCase().startsWith('esc')) {
      closeMenu();
    }
  };

  const onLinkClick = (evt) => {
    return evt.target.matches('.nav__link') ? closeMenu() : null;
  };

  function closeMenu() {
    menuList.classList.remove('nav--is-active');
    header.classList.remove('page-header--is-active');
    menuToggle.classList.remove('page-header__toggle--is-active');
    menuList.removeEventListener('click', onNavOutsideClick);
    menuToggle.removeEventListener('click', closeMenu);
    nav.removeEventListener('click', onLinkClick);
    document.removeEventListener('keydown', documentKeydownHandler);
    window.scrollLock.enableScrolling();
  }

  const openMenu = () => {
    if (!menuToggle) {
      return;
    }
    header.classList.add('page-header--is-active');
    menuToggle.classList.add('page-header__toggle--is-active');
    menuList.classList.add('nav--is-active');
    menuList.addEventListener('click', onNavOutsideClick);
    menuToggle.addEventListener('click', closeMenu);
    nav.addEventListener('click', onLinkClick);
    document.addEventListener('keydown', documentKeydownHandler);
    window.scrollLock.disableScrolling();
  };

  menuToggle.addEventListener('click', openMenu);
};

export {burgerMenuInit};
