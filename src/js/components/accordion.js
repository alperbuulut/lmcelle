$(document).ready(function () {
    $(".Accordion__item__link").on("click", function (e) {
        e.preventDefault();

        $(this).toggleClass("active").siblings(".Accordion__item__content").stop().slideToggle();
    });
})