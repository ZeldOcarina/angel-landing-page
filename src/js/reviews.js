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


const activateDot = function(slide){
   document.querySelectorAll('.reviews__dot').forEach(dot => {
      dot.classList.remove('reviews__dot_active')
   });

   document.querySelector(`.reviews__dot[data-slide="${slide}"]`).classList.add('reviews__dot_active');
}

activateDot(0);

const goToSlide = function(slide) {
   slides.forEach((s, i) => s.style.transform = `translateX(${200 * (i - slide)}%)`)
}




const nextSlide = function () {
   if (curSlide === maxSlide - 1) {
      curSlide = 0;
   } else {
      curSlide++;
   }

   goToSlide(curSlide);
   activateDot(curSlide);
}

const prevSlide = function () {
   if (curSlide === 0) {
      curSlide = maxSlide - 1;
   } else {
      curSlide--;
   }

   goToSlide(curSlide);
   activateDot(curSlide);
}


goToSlide(curSlide);




document.addEventListener('keydown', function (e) {
   if (e.key === 'ArrowLeft') prevSlide();

   if (e.key === 'ArrowRight') nextSlide();

})


dotContainer.addEventListener('click', function (e) {
   if (e.target.classList.contains('reviews__dot')) {
      const {slide} = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
   }
})

