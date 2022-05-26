"use strict"
const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    //   direction: 'vertical',
    autoHeight: true,
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
}