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
          el: ".fv-swiper-pagination",
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

const swiper2 = new Swiper('.person-swiper',{

  pagination: {
    el: ".person-swiper-pagination",
    clickable: true,
    type: 'bullets',
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },

  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 10,

  breakpoints: {
    1025: {
      centeredSlides: false,
      spaceBetween: 0,
        
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

$(".t-btn").on("click",function(){
  $('body, html').animate({ scrollTop: 0 }, 1000);
});