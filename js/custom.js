jQuery(function($) {
    // stickUp js code start
        $(document).ready( function() {
            //enabling stickUp on the '.navbar-wrapper' class
            $('.navbar-wrapper').stickUp();
        });

    // owl carousel code start
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1000,
        dotsSpeed:1000,
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

    // owl carousel code end


  });