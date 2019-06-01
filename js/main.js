jQuery(document).ready(function(){

/*$('.slider').ripples({
    dropRadius: 30,
    perturbance: 0.01,
  });
 */

  var typed = new Typed('.text', {

    strings: ["CARINE IS <strong class='pop'>AN ILLUSTRATOR.</strong>","CARINE IS <strong class='pop'>A DESIGNER.</strong>", "CARINE IS <strong class='pop'>A UX SPECIALIST.</strong>", "CARINE IS <strong class='pop'>AWESOME.</strong>"],
    typeSpeed: 70,
    loop: true
  
  });

  $(window).scroll(function(){

    var top = $(window).scrollTop();
       if(top >=60){
         $("nav").addClass('bg');
        }
       else
         if($("nav").hasClass('bg')){
           $("nav").removeClass('bg');
         }
   });

   $('.work').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $('a.smooth-scroll').smoothScroll();

});

