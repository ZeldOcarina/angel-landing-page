"use strict";

const slides = document.querySelectorAll('.reviews__slide');

let curSlide = 0;
const maxSlide = slides.length;

const dotContainer = document.querySelector('.reviews__dots')



const createDots = function () {
   slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend', `<button class="reviews__dot" data-slide="${i}"></button>`);
   });
};

createDots(); //Creating dots for slider





function createSlides() {
   slides.forEach((s, i) => {
         if (i === curSlide) {
            s.style.opacity = "1";
         } else {
            s.style.opacity = "0";
         }
   })
}


function goToSlide() {
   slides.forEach((s, i) => {
      setTimeout(() => {
         if (i === curSlide) {
            setTimeout(() => {
               s.style.opacity = "1";
            }, 400);
         } else {
            s.style.opacity = "0";
         }
      }, 500);
   })
}

function changeSlide() {
   slides.forEach((s, i) => {
         if (i === curSlide) {
            s.style.opacity = "1";
         } else {
            s.style.opacity = "0";
         }
   })
}




const nextSlide = function () {
   if (curSlide === maxSlide - 1) {
      curSlide = 0;
   } else {
      curSlide++;
   }

   goToSlide(curSlide)
}

const prevSlide = function () {
   if (curSlide === 0) {
      curSlide = maxSlide - 1;
   } else {
      curSlide--;
   }

   goToSlide(curSlide);
}







document.addEventListener('keydown', function (e) {
   if (e.key === 'ArrowLeft') prevSlide();

   if (e.key === 'ArrowRight') nextSlide();

})


// dotContainer.addEventListener('click', function (e) {
//    if (e.target.classList.contains('reviews__dot')) {
//       const {slide} = e.target.dataset;
//       console.log(slide);
//       curSlide = slide;
//       changeSlide(curSlide);
//    }
// })

createSlides();

window.onload = function interval() {
   setInterval(nextSlide, 5000);
}

window.onclose = function() {
   clearInterval(interval)
}