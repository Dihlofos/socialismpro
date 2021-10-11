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
