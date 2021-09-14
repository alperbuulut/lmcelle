$(document).ready(function () {
    var menuButton = $(".menu-button");
    var menu = $(".mobile-menu");
    var wrapper = $(".Wrapper");

    menuButton.on("click", function () {
        menuButton.add(menu).add(wrapper).toggleClass("active");
    })

    // Lang select
    var langSelectbox = $(".Header__bottom__lang__inner");
    var selectedLang = $(".Header__bottom__lang__option--selected");
    var options = $(".Header__bottom__lang__options");

    selectedLang.on("click", function (e) {
        e.preventDefault();

        langSelectbox.toggleClass("active");
        options.stop().slideToggle();
    });
})