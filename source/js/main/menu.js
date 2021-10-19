"use strict";
(function () {
  let burger = document.querySelector(".js-burger");
  let nav = document.querySelector(".js-nav");
  const { disableBodyScroll, enableBodyScroll } = bodyScrollLock;

  if (burger && nav) {
    // menu toggle
    burger.addEventListener("click", () => {
      if (nav.classList.contains("js-open")) {
        disableBodyScroll(burger);
        nav.classList.remove("js-open");
        burger.classList.add("js-open");
      } else {
        enableBodyScroll(burger);
        nav.classList.add("js-open");
        burger.classList.remove("js-open");
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
