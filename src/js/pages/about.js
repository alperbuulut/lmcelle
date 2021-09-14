$(document).ready(function () {
    $(".Content__img__play").on("click", function (e) {
        e.preventDefault();

        var video = $(".Content__img__video").get(0);
        $(this).parents(".Content__img--video").addClass("active");

        video.play();

        toggleFullscreen(video);
    })

    function toggleFullscreen(element) {
        element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen
            || element.msRequestFullscreen || element.webkitRequestFullscreen;

        if (!document.fullscreenElement) {
            element.requestFullscreen().then({});
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
});