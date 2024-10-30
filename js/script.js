const swiper = new Swiper('.fv-swiper',{
  loop: true,

  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
  effect: "creative",
  speed: 1500,
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
        speed: 1500,
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

AOS.init();

$(".burgerbtn").on("click",function(){
  $('.burgerbtn-line').toggleClass('open');
  $('.header-pc').toggleClass('open');
});
$(".header-nav-open").on("click",function(){
  $('.header-nav-open').toggleClass('open');
  $('.header-nav-hidden').toggleClass('open');
  $('.header-nav-move').toggleClass('open');
  $('.header-recruit').toggleClass('open');
});