type="text/javascript">
$(document).ready(function(){
  //jquery for toggle sub menus
  $('.sub-btn').click(function(){
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');

  });

  //jquery for expand and collapse the sidebar
  $('.menu-btn').click(function(){
    $('.side-bar').addClass('active');
    $('.menu-btn').css("visibility", "hidden");
    $('.close-btn').css("visibility", "visible");
  });

  $('.close-btn').click(function(){
    $('.side-bar').removeClass('active');
    $('.menu-btn').css("visibility", "visible");
    $('.close-btn').css("visibility", "hidden");
  });
});



 jQuery(document).ready(function( $ ) {
     $('.counter').counterUp({
         delay: 10,
         time: 1000
     });
 });

 {/* $(document).ready(function() {
         $(".menu-icon").on("click", function() {
               $("nav ul").toggleClass("showing");
         });
   });

   // Scrolling Effect

   // $(window).on("scroll", function() { */}
   {/* //       if($(window).scrollTop()) { */}
   {/* //             $('nav').addClass('black');
   //       }

   //       else { */}
   {/* //             $('nav').removeClass('black');
   //       }
   // })
//       $(function () { */}
{/* //     $(window).on('scroll', function () { */}
{/* //         if ( $(window).scrollTop() > 10 ) { */}
{/* //             $('.navbar').addClass('active');
//         } else { */}
{/* //             $('.navbar').removeClass('active');
//         }
//     });
// }); */}
