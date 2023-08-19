const playButton = document.querySelector('.video__button');
const link = document.querySelector('.video__link');
const video = document.querySelector('.video');
const videoIframe = document.querySelector('[data-video-container]');

const createIframe = (block) => {
  if (video !== null) {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('width', 364);
    iframe.setAttribute('height', 228);
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', block.dataset.src);

    return iframe;
  }

  return false;
};

export const initPlayVideo = () => {
  if (video && videoIframe) {
    link.removeAttribute('href');
    playButton.addEventListener('click', () => {
      playButton.remove();
      link.remove();
      const newIframe = createIframe(videoIframe);
      videoIframe.append(newIframe);
    });
  }
};
