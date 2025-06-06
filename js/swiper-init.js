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
        spaceBetween: 30,
        slidesPerView: 3.3,
        slidesPerGroup: 1,
      },
    },
  });
});

function equalizeSwiperSlideHeight() {
  const slides = document.querySelectorAll('.swiper-slide');
  let maxHeight = 0;

  slides.forEach(slide => {
    slide.style.height = 'auto';
  });

  slides.forEach(slide => {
    const height = slide.offsetHeight;
    if (height > maxHeight) maxHeight = height;
  });

  slides.forEach(slide => {
    slide.style.height = `${maxHeight}px`;
  });
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    if (!inThrottle) {
      func();
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const throttledResizeHandler = throttle(equalizeSwiperSlideHeight, 200);

window.addEventListener('load', equalizeSwiperSlideHeight);
window.addEventListener('resize', throttledResizeHandler);
