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

"use strict";
(function () {
  let upButton = document.querySelector(".up");

  if (upButton) {
    window.onscroll = function () {
      if (window.pageYOffset > 260) {
        upButton.classList.add("up--shown");
      } else {
        upButton.classList.remove("up--shown");
      }
    };

    upButton.onclick = function () {
      window.scrollTo(0, 0);
    };
  }
})();

"use strict";
(function () {
  const form = document.querySelector(".js-form");
  const formSubmitButton = document.querySelector(".js-form-submit");
  const formDone = document.querySelector(".js-form-done");
  const formWrong = document.querySelector(".js-form-wrong");
  initEvents();

  function initEvents() {
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      grecaptcha.ready(function () {
        grecaptcha
          .execute("6LczUdEaAAAAACImrHbKWiSSutDmsNCH1sC9zXbu", {
            action: "submit",
          })
          .then(function (token) {
            let res = {};
            const formData = new FormData(form);

            for (let [key, value] of formData.entries()) {
              res[key] = value;
            }
            sendEmail(res);
          });
      });
    });
  }

  function sendEmail({ name, email, phone, message }) {
    formSubmitButton.setAttribute("disabled", true);
    Email.send({
      SecureToken: "e8ae44f3-777e-40ec-a616-3f2aad062e93",
      To: "event.pro.info@yandex.ru",
      From: "maria@eventpro.ru.com",
      Subject: `${name} sent you a message`,
      Body: `
        <p><h4>Привет, меня зовут: ${name}</h4></p>
        <p><strong>Сообщение:</strong> ${message}</p>
        <p><strong>Адрес электронной почты:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
      `,
    })
      .then((message) => {
        formDone.style.opacity = 1;
      })
      .catch((error) => {
        formWrong.style.opaciy = 1;
      });
  }
})();

"use strict";
(function () {
  let burger = document.querySelector(".js-burger");
  let nav = document.querySelector(".js-nav");
  const { disableBodyScroll, enableBodyScroll } = bodyScrollLock;

  if (burger && nav) {
    // menu toggle
    burger.addEventListener("click", () => {
      nav.classList.toggle("js-open");
      burger.classList.toggle("js-open");

      if (nav.classList.contains("js-open")) {
        disableBodyScroll(burger);
      } else {
        enableBodyScroll(burger);
      }
    });

    // nav click
    nav.addEventListener("click", (e) => {
      const nav = e.currentTarget;
      if (nav.classList.contains("js-open")) {
        burger.click();
      }
    });
  }
})();

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

"use strict";
(function () {
  window.scroll = new SmoothScroll(".js-scroll", {
    speed: 800,
    speedAsDuration: true,
    easing: "easeOutQuad",
  });
})();
