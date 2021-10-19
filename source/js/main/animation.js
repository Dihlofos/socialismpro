"use strict";
(function () {
  // init controller
  const controller = new ScrollMagic.Controller();
  const vw = window.innerWidth;
  const offset = vw > 767 ? 300 : 150;

  const commonOptions = {
    reverse: false,
    offset,
    triggerHook: "onEnter",
  };

  //about bg
  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: "#about",
  })
    .setClassToggle(".about__bg", "fadeIn")

    .addTo(controller);

  //about items
  document.querySelectorAll(".about__item").forEach((item) => {
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: offset - 100,
      triggerElement: item,
    })
      .setClassToggle(item, "fromTop")
      .addTo(controller);
  });

  //sliders
  document.querySelectorAll(".js-slider").forEach((item) => {
    new ScrollMagic.Scene({
      ...commonOptions,
      triggerElement: item,
    })
      .setClassToggle(item.querySelectorAll(".swiper-slide"), "fromLeft")
      .addTo(controller);
  });

  //messages
  document.querySelectorAll(".message").forEach((item) => {
    new ScrollMagic.Scene({
      ...commonOptions,
      triggerElement: item,
    })
      .setClassToggle(item.querySelector(".message__dialog"), "fromScale")
      .addTo(controller);

    new ScrollMagic.Scene({
      ...commonOptions,
      triggerElement: item,
    })
      .setClassToggle(item.querySelector(".message__text"), "fadeIn")
      .addTo(controller);

    new ScrollMagic.Scene({
      ...commonOptions,
      triggerElement: item,
    })
      .setClassToggle(item.querySelector(".message__arrow"), "showFromRotate")
      .addTo(controller);

    new ScrollMagic.Scene({
      ...commonOptions,
      triggerElement: item,
    })
      .setClassToggle(item.querySelector(".message__dialogImage"), "fadeIn")
      .addTo(controller);

    new ScrollMagic.Scene({
      ...commonOptions,
      triggerElement: item,
    })
      .setClassToggle(item.querySelector(".message__team"), "fromTop")
      .addTo(controller);
  });

  //about items
  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: ".contacts__manImg",
  })
    .setClassToggle(".contacts__manImg", "fromDeepRight")
    .addTo(controller);
})();
