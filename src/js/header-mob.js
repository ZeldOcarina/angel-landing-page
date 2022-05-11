"use strict";
let header = document.querySelector('.header');
let logo = document.querySelector('.header__logo');
let body = document.querySelector('body')


document.addEventListener('scroll', () => {
   let x = window.scrollY;
   if(x > 78 && x != 0){
      logo.classList.add('logo-hide')
      header.classList.add('header__iphone-5')
   } else if (x <= 78){
      logo.classList.remove('logo-hide')
      header.classList.remove('header__iphone-5')
   }
})




