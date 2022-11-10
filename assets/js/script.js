'use strict'

const toggleFunc = (elem) => { elem.classList.toggle('active'); }

const menu_burger = document.querySelector('.header__mobile-menu');
const side_menu = document.querySelector('.side-menu');
const goTopBtn = document.querySelector('[data-go-top]');


menu_burger.addEventListener('click', function() {
  toggleFunc(menu_burger);
  toggleFunc(side_menu);
});

window.addEventListener("scroll", function() {
  if(this.window.scrollY >= 500) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});