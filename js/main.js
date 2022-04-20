
jQuery(document).ready(function () {
    "use strict"
    /***********water ripple*************/
    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01,

    });

    /*********text animation***********/
    $('.text').typed({
        strings: ["<strong>welcome to</strong> <strong class='primary'>corpora.</strong>", "<strong>hope you</strong><strong class='primary'> enjoy!.</strong>"],
        typespeed: 0,
        loop: true

    });
    /*******for background color of navigation when scroll***********/


    $(window).scroll(function () {

        var top = $(window).scrollTop();
        if (top >= 60) {
            $('.navbar').addClass('secondary');
        }

        else
            if ($('.navbar').hasClass('secondary')) {
                $('.navbar').removeClass('secondary');
            }
    });

    /****************pop-up for work section*************/
    $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });

    $('#team-members').owlCarousel({

        autoplay: true,
        items: 3,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            760: {
                items: 3
            }
        }
    });
    /***********animating counter*********** */
    $('.counter').counterUp({
        delay: 10,
        time: 4000/*4000 millisecond...it's the duration of counting*/
    });
    /********smooth scroll**********/




});
