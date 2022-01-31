const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const sec = document.querySelector(".section__header__main");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  sec.classList.toggle("hidden");
}
