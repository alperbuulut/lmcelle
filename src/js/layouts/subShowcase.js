$(document).ready(function () {
    // Initialize slider
    $(".SubShowcase__slider").slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        swipe: false,
    })

    $(window).on("load", function () {
        function locateControls() {
            const img = $(".SubShowcase__slider .Content__img:first");
            const dots = $(".SubShowcase .slick-dots");
            const arrows = $(".SubShowcase .slick-arrow");
            const prevArrow = $(".SubShowcase .slick-prev");
            const nextArrow = $(".SubShowcase .slick-next");
            const dotsWidth = dots.outerWidth();
            const dotsGutter = 50;
            const pageGutter = 40;
            const pageLeftOffset = $(".center:first").offset().left;
            const imgHeight = img.outerHeight();

            dots.css({
                "visibility": "visible",
                "top": imgHeight + "px",
                "left": pageLeftOffset + pageGutter - dotsGutter + "px"
            });

            arrows.css({
                "visibility": "visible",
                "top": imgHeight + "px"
            })

            prevArrow.css({
                "left": pageLeftOffset - 20 + dotsWidth - 170
            })

            nextArrow.css({
                "left": pageLeftOffset - 20 + dotsWidth - 100
            })
        }

        locateControls();

        var resizeTimer;

        $(window).on('resize', function (e) {
            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(locateControls, 100);

        });
    });
})