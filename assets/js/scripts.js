// Scripts

$(document).ready(function() {
    $(".toogle-menu").on('click', function() {
        $(".drop-down-menu").toggleClass("expanded");
    });
});

$(window).on("scroll touchmove", function () {
    $(".header, .header h1, .main-nav, .drop-down-menu").toggleClass("sticky", $(document).scrollTop() > 356);
});