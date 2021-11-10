const swiper = new Swiper('.swiper', {
  // Optional parameters
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },

  // Navigation arrows

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})
