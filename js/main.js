var menuButton = document.querySelector('.button-menu')
menuButton.addEventListener('click', function () {
  console.log('Клик по кнопке меню')
  document.querySelector('.navbar-mobile').classList.toggle('navbar-mobile--visible')
});

const genreSlider = new Swiper('.genre-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 26,
  // Navigation arrows
  navigation: {
    nextEl: '.genre-slider__button--next',
    prevEl: '.genre-slider__button--prev',
  },

 

  // Keyboard slide
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

  const unreleasedSlider = new Swiper('.unreleased-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.unreleased-slider__button--next',
    prevEl: '.unreleased-slider__button--prev',
  },
  // Keyboard slide
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});