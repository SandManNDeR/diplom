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

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 10,
      autoHeight: false,
    },

    577: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 10,
      autoHeight: false,
    },
    769: {
      slidesPerView: 3,
      slidesPerColumn: 1,
      spaceBetween: 10,
      autoHeight: false,
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
    1201: {
      slidesPerView: 'auto',
      spaceBetween: 26,
    }
  },
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

  breakpoints: {
  // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      autoHeight: false,
    },
    577: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      autoHeight: false,
    },
    769: {
      slidesPerView: 3,
      slidesPerColumn: 1,
      spaceBetween: 60,
      autoHeight: false,
    },
    993: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
    1201: {
      slidesPerView: 5,
      spaceBetween: 30,
    }
  },

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