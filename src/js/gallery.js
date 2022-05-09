"use strict";

const videos = [1, 2, 3]

const gallery = document.querySelector('.gallery__slides');

// const video = document.getElementById('video');
let curVideo = 0;


console.log(gallery);

const createVideos = function () {
   videos.forEach((_, i) => {
      gallery.insertAdjacentHTML('beforeend', `<div class="gallery__slide" data-video="${i}"></div>`);
   });
};

createVideos();

const setVideo = function(x){
   
}


gallery.addEventListener('click', function (e) {
   if (e.target.classList.contains('gallery__slide')) {
      const video = e.target.dataset.video;
      curVideo = video;
   }
})

