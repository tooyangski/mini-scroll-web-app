document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  function toggleStickyNav() {
    if (window.screenY > 0) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
  }

  window.addEventListener("scroll", toggleStickyNav);
});
