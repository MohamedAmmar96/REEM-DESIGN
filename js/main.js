// Loading Overlay 
$(window).on('load', function() {

    $(".loading-overlay img").fadeOut(1000,
        function() {
            $(this).parent().fadeOut(1000);
            $("body").removeClass("overflow")
            $("body").css("overflow-X", "hidden");
        });
})

// Scroll To Top Button 
var scrollButton = $(".scroll-top");
$(window).scroll(function() {
    ($(this).scrollTop() >= 700) ? scrollButton.show(600): scrollButton.hide(600);
});
// Click Button to scroll top 
scrollButton.click(function() {
    $("html,body").animate({ scrollTop: 0 }, 600);
});

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

$(document).ready(function() {


    // Main Page Slider    
    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            },
            992: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            }
        }
    })

    // Menue Toggle Down
    $(".menu").hover(function() {
        $(".menu ul").toggleClass("display");
        $(".menu ul").fadeToggle(600);
    });

    $(".search-btn").click(function() {
        $(".big-hidden-search").slideToggle(600);
    });

    $(".hidden-button").click(function() {
        $(".small-overlay").fadeIn(600)
    });

    $(".hidden-button").click(function() {
        $(".small-nav").fadeIn(600)
    });

    $(".small-overlay").click(function() {
        $(".small-overlay").fadeOut(600)
    });
    $(".small-overlay").click(function() {
        $(".small-nav").fadeOut(600)
    });

    /*$("body").click(function() {
        $(".small-nav").fadeOut(1000)
    });*/

    $(".small-nav-menu").hover(function() {
        $(".small-nav-menu ul").toggleClass("display");
        $(".small-nav-menu ul").fadeToggle(600);
    });

    //this is to make the features part as owl-carousel slider  
    if ($(window).width() <= 991) {
        $(".my-slider1").addClass("owl-carousel owl-theme");
        $(".services .service").removeClass("owl-carousel");
        $('.services .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: true
                },
                500: {
                    items: 2,
                    nav: false,
                    loop: true
                },
                768: {
                    items: 3,
                    nav: false,
                    loop: true
                }
            }
        })
    } else {
        $(".my-slider1").removeClass("owl-carousel owl-theme");
        $(".services .service").removeClass("owl-carousel");
    };


    /*if ($(window).width() <= 991) {
        $(".our-works").addClass("owl-carousel owl-theme");
        $(".our-works .work-image").removeClass("owl-carousel");
        $('.our-works .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                    loop: true
                },
                500: {
                    items: 3,
                    nav: false,
                    loop: true
                }
            }
        })
    } else {
        $(".our-works-row").removeClass("owl-carousel owl-theme");
        $(".our-works-row .work-image").removeClass("owl-carousel");
    };*/

    // work number one 
    $(".one").click(function() {
        $(".black-back").fadeIn(600)
    });

    $(".one").click(function() {
        $(".work-one").fadeIn(600)
    });
    $(".black-back").click(function() {
        $(".work-one").fadeOut(600)
    });
    $(".black-back").click(function() {
        $(".black-back").fadeOut(600)
    });

    // work number two 
    $(".two").click(function() {
        $(".black-back").fadeIn(600)
    });

    $(".two").click(function() {
        $(".work-two").fadeIn(600)
    });
    $(".black-back").click(function() {
        $(".work-two").fadeOut(600)
    });
    $(".black-back").click(function() {
        $(".black-back").fadeOut(600)
    });

    // work number three 
    $(".three").click(function() {
        $(".black-back").fadeIn(600)
    });

    $(".three").click(function() {
        $(".work-three").fadeIn(600)
    });
    $(".black-back").click(function() {
        $(".work-three").fadeOut(600)
    });
    $(".black-back").click(function() {
        $(".black-back").fadeOut(600)
    });

    // work number four 
    $(".four").click(function() {
        $(".black-back").fadeIn(600)
    });

    $(".four").click(function() {
        $(".work-four").fadeIn(600)
    });
    $(".black-back").click(function() {
        $(".work-four").fadeOut(600)
    });
    $(".black-back").click(function() {
        $(".black-back").fadeOut(600)
    });

    // work number five 
    $(".five").click(function() {
        $(".black-back").fadeIn(600)
    });

    $(".five").click(function() {
        $(".work-five").fadeIn(600)
    });
    $(".black-back").click(function() {
        $(".work-five").fadeOut(600)
    });
    $(".black-back").click(function() {
        $(".black-back").fadeOut(600)
    });

    // work number six 
    $(".six").click(function() {
        $(".black-back").fadeIn(600)
    });

    $(".six").click(function() {
        $(".work-six").fadeIn(600)
    });
    $(".black-back").click(function() {
        $(".work-six").fadeOut(600)
    });
    $(".black-back").click(function() {
        $(".black-back").fadeOut(600)
    });

    // work number seven 
    $(".seven").click(function() {
        $(".black-back").fadeIn(600)
    });

    $(".seven").click(function() {
        $(".work-seven").fadeIn(600)
    });
    $(".black-back").click(function() {
        $(".work-seven").fadeOut(600)
    });
    $(".black-back").click(function() {
        $(".black-back").fadeOut(600)
    });

    // work number eight 
    $(".eight").click(function() {
        $(".black-back").fadeIn(600)
    });

    $(".eight").click(function() {
        $(".work-eight").fadeIn(600)
    });
    $(".black-back").click(function() {
        $(".work-eight").fadeOut(600)
    });
    $(".black-back").click(function() {
        $(".black-back").fadeOut(600)
    });

    // work number nine 
    $(".nine").click(function() {
        $(".black-back").fadeIn(600)
    });

    $(".nine").click(function() {
        $(".work-nine").fadeIn(600)
    });
    $(".black-back").click(function() {
        $(".work-nine").fadeOut(600)
    });
    $(".black-back").click(function() {
        $(".black-back").fadeOut(600)
    });



    //this is to show/hide map
    $(".my-form p").click(function() {
        $(".map").fadeToggle(600)
    });
});