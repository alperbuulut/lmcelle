$(document).ready(function () {
    $(".Accordion__item__link--hasSlider").on("click", function () {
        var gallery = $(this).parents(".Accordion__item").find(".gallerySlider");
        clearTimeout(destroyTimeout, sliderTimeout);

        if (gallery.hasClass("slick-slider")) {
            var destroyTimeout = setTimeout(function () {
                gallery.slick('unslick');
            }, 401);

            return;
        }

        var sliderTimeout = setTimeout(function () {
            // Initialize slider
            var gallerySlider = gallery.slick({
                autoplay: false,
                dots: true,
                infinite: true,
                speed: 1000,
                fade: true,
                cssEase: 'linear',
                swipe: false
            })
        }, 401)
    })
})