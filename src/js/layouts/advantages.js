$(document).ready(function () {
    var advantagesPaddingBottom = 0;

    $(window).on("load", function () {
        $(".Advantages__item__text").each(function () {
            var itemHeight = $(this).outerHeight();

            if (itemHeight > advantagesPaddingBottom) {
                advantagesPaddingBottom = itemHeight;
            }
        });

        $(".Advantages").css({
            "paddingBottom": advantagesPaddingBottom + "px"
        })
    });

    $(".Advantages__item__title").on("touchstart", function () {
        $(".Advantages__item").not($(this)).removeClass("active");
        $(this).parents(".Advantages__item").add($(".Advantages__slider")).toggleClass("active");
    });

    $(document).on("touchstart", function (e) {
        $(".Advantages__slider, .Advantages__item").removeClass("active");
    });
});