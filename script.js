// script.js

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true, // Active le défilement infini
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3, // Ajustez selon vos préférences
        spaceBetween: 30,
      },
    },
  });
});