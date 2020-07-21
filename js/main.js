// Loading Overlay 
$(window).on('load', function() {

    $(".loading-overlay img").fadeOut(1000,
        function() {
            $(this).parent().fadeOut(1000);
            $("body").removeClass("overflow")
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


$(document).ready(function() {

    // Menue Toggle Down
    $(".menu").hover(function() {
        $(".menu ul").toggleClass("display");
        $(".menu ul").fadeToggle(600);
    });

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
                nav: true,
            },
            768: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    })


    $(".hidden-button").click(function() {
        $(".small-nav").toggleClass("display");
        $(".small-nav").fadeToggle(1000)
    });

    /*$("body").click(function() {
        $(".small-nav").fadeOut(1000)
    });*/

    $(".small-nav-menu").hover(function() {
        $(".small-nav-menu ul").toggleClass("display");
        $(".small-nav-menu ul").fadeToggle(1000);
    });
});