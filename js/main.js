new Swiper(".specialties-container", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".specialties-pagination",
  },
});

new Swiper(".gallery-container", {
  loop: true,
  slidesPerView: 6,
  breakpoints: {
    1420: {
      slidesPerView: 4,
    },
  },
});
