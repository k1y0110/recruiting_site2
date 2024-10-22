const swiper = new Swiper('.fv-swiper',{
  loop: true,

  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
  effect: "creative",
  speed: 1000,
  creativeEffect: {
      prev: {
        translate: ["-40%", 0, -1],
      },
      next: {
      translate: ["70%", 0, 0],
      },
  },

  breakpoints: {
    1025: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: 'bullets',
          dynamicBullets: true,
          dynamicMainBullets: 2,
        },

        effect: "creative",
        speed: 1000,
        creativeEffect: {
          prev: {
            translate: ["-30%", 0, -1],
          },
          next: {
            translate: ["0%", 0, 0],
          },
        },
    }
  },
});