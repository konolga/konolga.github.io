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


/*==================================
            PORTFOLIO MODAL
==================================*/
    //bootstrap portfolio modal
    $('#portfolio-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var workName = button.data('name'); // Extract info from data-* attributes
        $(this).find('.modal-body').hide();
        $('.modal-body[data-name = ' + workName + ']').show();
    });

  //open bootstrap modal from modal
  $(document).on('hidden.bs.modal', '.modal', function () {
    if($('.modal:visible').length){
        $(document.body).addClass('modal-open');
         if($(window).width() > 991){
             $(document.body).css({paddingRight: '17px'});
         }
    }else {
        $(document.body).css({paddingRight: 0});
    }
});


