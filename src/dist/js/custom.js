jQuery(function ($) {

    var $document = jQuery(document),
            $element = $('.top-menu'),
            className = 'fixed';

    $document.scroll(function () {
        $element.toggleClass(className, $document.scrollTop() >= 50);
    });


    $document.ready(function () {
        $element.toggleClass(className, $document.scrollTop() >= 50);
    });


    if (jQuery('.clients-slider').length >= 1) {
        jQuery('.clients-slider').slick({
            arrows: false,
            dots: false,
            infinite: true,
            autoplay: true,
            draggable: true,
            focusOnSelect: false,
            speed: 700,
            autoplaySpeed: 4000,
            adaptiveHeight: false,
            centerMode: true,
            centerPadding: '25%',
            slidesToShow: 2,
            fade: false,
            cssEase: 'ease',
            responsive: [
                {
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '0',

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '0',

                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0',

                    }
                }
            ]
        });
    }

});
