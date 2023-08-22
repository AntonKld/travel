export const addAudioHandlers = () => {
  const HERO_SELECTOR = '.hero__audio';
  const AUDIO_PLAYER = `
      <iframe
        frameborder="0"
        style="border:none;width:340px;height:220px;"
        width="340px"
        height="220"
        src="https://music.yandex.ru/iframe/#album/25474374"
        title="Аудиоплеер"
        loading="lazy"
      >
        Слушайте a href='https://music.yandex.ru/album/25474374'>
        Про код </a> на Яндекс Музыке
      </iframe>
      `;
  const parent = document.querySelector(HERO_SELECTOR);
  if (!parent) {
    return;
  }

  parent.replaceChildren();
  parent.innerHTML = AUDIO_PLAYER;
};
