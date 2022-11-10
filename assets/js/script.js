'use strict'

const toggleFunc = (elem) => { elem.classList.toggle('active'); }
const goTopBtn = document.querySelector('[data-go-top]');



window.addEventListener("scroll", function() {
  if(this.window.scrollY >= 500) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});