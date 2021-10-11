"use strict";
(function () {
  const swiperSlider = new Swiper(".js-slider", {
    // Optional parameters
    loop: false,
    slidesPerView: 3,
    speed: 1000,

    navigation: {
      nextEl: ".swiper__next",
      prevEl: ".swiper__prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },

      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      1025: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
})();
