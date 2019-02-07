// TypeWritter

var element = $(".element");
      $(function() {
            element.typed({
                strings: ["A Graphic Designer.", "An Entreprenour.", "A Web Designer", "A Web Developer"],
                typeSpeed: 100,
                loop: true,
            });
        });


// Preloader

$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#1badf9');
    }, 3000);
 
});


// Smooth Scroll

var scroll = new SmoothScroll('a[href*="#"]', {
  // Selectors
  ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
  header: null, // Selector for fixed headers (must be a valid CSS selector)

  // Speed & Easing
  speed: 400, // Integer. How fast to complete the scroll in milliseconds
  offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
  easing: 'easeInCubic', // Easing pattern to use
  customEasing: function (time) {}, // Function. Custom easing pattern

  // Callback API
  before: function () {}, // Callback to run before scroll
  after: function () {} // Callback to run after scroll
});


// Skill Bar

jQuery(document).ready(function () {

/*----------------------------------------------------*/
/*  Animated Progress Bars
/*----------------------------------------------------*/

    jQuery('.skills .skill-main').each(function () {
        jQuery(this).appear(function() {
          jQuery(this).animate({opacity:1,left:"0px"},800);
          var b = jQuery(this).find(".skill-bar").attr("data-width");
          jQuery(this).find(".skill-bar").animate({
            width: b + "%"
          }, 3300, "linear");
        }); 
    });   

});


// Isotope
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'a', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'a', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


// owl carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:60,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    animateOut: 'zoomOutLeft',
    animateIn: 'zoomInRight',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


//Scroll To Top

$(document).on('click','.scrolltotop',function(){
  $('html','body').animate({scrollTop:0},500);
  return false;
});
$(document).scroll(function(e){
  var scrollPos = $(this).scrollTop();
  if (scrollPos<100) {
    $('.scrolltotop').addClass('hide');
  } else{
    $('.scrolltotop').removeClass('hide');
  }
});


// Wow

new WOW().init();