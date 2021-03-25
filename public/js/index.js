// //navbar
// const navHeight = $("nav#nav").height();
// console.log({navHeight})
// const $navGroup = $('nav .nav-group')
// const navOrigPadding = ($navGroup.innerWidth() - $navGroup.width())/2;

// $('.hamburger').on('click', function() {
//   $('.menus.nav-group').toggleClass('show');
// })

// const minNavPadding = 10;
// $('nav').css({'background-color': 'rgba(256, 256, 256, 0)'})

// $(window).scroll(function() {
//   const windowScroll = $(window).scrollTop()
//   if (windowScroll < navHeight) {
//     const padding = navOrigPadding - windowScroll/2
//     let newPadding = padding >= minNavPadding ? padding : minNavPadding;
//     newPadding = newPadding > navOrigPadding ? navOrigPadding : newPadding;
//     const opacity = 1-(newPadding-minNavPadding)/(navOrigPadding-minNavPadding);
//     const newOpacity = opacity >= 1 ? 1 : opacity;
//     $('nav').css({'background-color': `rgba(256, 256, 256, ${newOpacity})`});
//     $('nav .nav-group').css({padding: `${newPadding}px`})
//   }
// })


// // news
jQuery.fn.liScroll = function(settings) {
	settings = jQuery.extend({
		travelocity: 0.03
		}, settings);		
		return this.each(function(){
				var $strip = jQuery(this);
				$strip.addClass("newsticker")
				var stripHeight = 1;
				$strip.find("li").each(function(i){
					stripHeight += jQuery(this, i).outerHeight(true); // thanks to Michael Haszprunar and Fabien Volpi
				});
				var $mask = $strip.wrap("<div class='mask'></div>");
				var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");								
				var containerHeight = $strip.parent().parent().height();	//a.k.a. 'mask' width 	
				$strip.height(stripHeight);			
				var totalTravel = stripHeight;
				var defTiming = totalTravel/settings.travelocity;	// thanks to Scott Waye		
				function scrollnews(spazio, tempo){
				$strip.animate({top: '-='+ spazio}, tempo, "linear", function(){$strip.css("top", containerHeight); scrollnews(totalTravel, defTiming);});
				}
				scrollnews(totalTravel, defTiming);				
				$strip.hover(function(){
				  jQuery(this).stop();
				},
				function(){
				  var offset = jQuery(this).offset();
				  var residualSpace = offset.top + stripHeight;
				  var residualTime = residualSpace/settings.travelocity;
				  scrollnews(residualSpace, residualTime);
				});			
		});	
};

$(function(){
    $("ul#ticker01").liScroll();
});

//carousel
// $(document).ready(function() {
//   $("#news-slider").owlCarousel({
//       items : 3,
//       itemsDesktop:[1199,3],
//       itemsDesktopSmall:[980,2],
//       itemsMobile : [600,1],
//       navigation:true,
//       navigationText:["",""],
//       pagination:true,
//       autoPlay:true
//   });
// });


// $(document).ready(function() {
//   $("#testimonial-slider").owlCarousel({
//     items: 3,
//     itemsDesktop:[1000,3],
//     itemsDesktopSmall:[979,2],
//     itemsTablet:[768, 2],
//     itemsMobile:[650, 1],
//     pagination: true,
//     autoPlay: true
//   });
// });

// (function () {
//   "use strict";

//   var carousels = function () {
//     $(".owl-carousel1").owlCarousel({
//       loop: true,
//       center: true,
//       margin: 0,
//       responsiveClass: true,
//       nav: false,
//       responsive: {
//         0: {
//           items: 1,
//           nav: false
//         },
//         680: {
//           items: 2,
//           nav: false,
//           loop: false
//         },
//         1000: {
//           items: 3,
//           nav: true
//         }
//       }
//     });
//   };

//   (function ($) {
//     carousels();
//   })(jQuery);
// })();

// jQuery(document).ready(function($) {
// "use strict";
// $('#customers-testimonials').owlCarousel( {
// 		loop: true,
// 		center: true,
// 		items: 3,
// 		margin: 30,
// 		autoplay: true,
// 		dots:true,
//     nav:true,
// 		autoplayTimeout: 8500,
// 		smartSpeed: 450,
//   	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
// 		responsive: {
// 			0: {
// 				items: 1
// 			},
// 			768: {
// 				items: 2
// 			},
// 			1170: {
// 				items: 3
// 			}
// 		}
// 	});
// });




