/*==================================
            SERVICES
==================================*/
$(function () {
    //animate on scroll
    new WOW().init();
});

/*==================================
            EDUCATION
==================================*/
$(function () {

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }

    });
});

/*==================================
            TESTIMONIALS
==================================*/
$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
