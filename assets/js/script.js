'use strict'

const toggleFunc = (elem) => { elem.classList.toggle('active'); }

const menu_burger = document.querySelector('.header__mobile-menu');
const side_menu = document.querySelector('.side-menu');

menu_burger.addEventListener('click', function() {
  toggleFunc(menu_burger);
  toggleFunc(side_menu);
});