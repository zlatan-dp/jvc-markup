document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
       loop: true,
       spaceBetween: 40,
       pagination: {
          el: '.swiper-pagination',
          clickable: true,
       },
       navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
       },
       breakpoints: {
        560: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        561: {
            slidesPerView: 3,
        }
    }
    });
 });
 