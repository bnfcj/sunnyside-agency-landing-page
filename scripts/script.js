"use strict";

class Header {
  checkType() {
    const screenWidth = window.innerWidth;
    const header = document.querySelector("header");
    const dataType = header.getAttribute("data-type");
    // const dataState = header.getAttribute('data-State')
    if (screenWidth >= 376 && dataType === "mobile") {
      header.setAttribute("data-type", "desktop");
      header.removeAttribute("data-state");
    } else if (screenWidth < 376 && dataType === "desktop") {
      header.setAttribute("data-type", "mobile");
      header.setAttribute("data-state", "menu-closed");
    }
  }
  addResizeEvent() {
    this.checkType();
    window.addEventListener("resize", this.checkType);
  }
  addMenuClickEvent() {
    document.querySelector(".hamburger").addEventListener("click", function () {
      console.log("hi");
      const header = document.querySelector("header");
      const dataState = header.getAttribute("data-State");
      if (dataState === "menu-opened") {
        header.setAttribute("data-state", "menu-closed");
      } else if (dataState === "menu-closed") {
        header.setAttribute("data-state", "menu-opened");
      }
    });
  }
}
(function () {
  const header = new Header();
  header.addResizeEvent();
  header.addMenuClickEvent();
})();
