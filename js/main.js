// // Owl Carousel
$('.team-carousel').owlCarousel({
  loop:true,
  margin:30,
  autoplay: false,
  autoplayTimeout: 5000,
  nav:true,
  dots:false,
  navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
  responsive:{
      0:{
          items:1
      },
      // 440:{
      //   items:2
      // },
      576:{
        items:2
      },
      768:{
        items:2
      },
      992:{
          items:3
      },
      1200:{
          items:3
      }
  }
});

$('.testimonial_item').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
    dots: false,
    navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
    responsive:{

       0:{
         items:1
       },
       768:{
         items:1
       },
       992:{
         items:2
       },
       1200:{
         items:2
       }
     }
     
    });


// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]');