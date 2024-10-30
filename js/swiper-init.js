document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     },
     pagination: {
        el: '.swiper-pagination',
        clickable: true,
       },
       breakpoints: {
        561: {
            spaceBetween: 40,
            slidesPerView: 3,
            slidesPerGroup: 1,
        }
    }
    });
 });
 
 