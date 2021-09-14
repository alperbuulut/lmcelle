$(window).on("load", function () {
    var addresses = $(".Contact__addresses");

    if (addresses.length) {
        var shadowParent = $(".Contact__left__inner");
        var outerHeight = addresses.outerHeight();
        var scrollHeight = addresses[0].scrollHeight;
        var lastChildsHeight = $(".Contact__addresses > li:last").height();

        addresses.on("scroll", function () {
            var scrollPosition = addresses[0].scrollTop;

            if (scrollPosition >= scrollHeight - lastChildsHeight - outerHeight) {
                shadowParent.addClass("no-shadow");
            } else {
                shadowParent.removeClass("no-shadow");
            }
        });
    }
});