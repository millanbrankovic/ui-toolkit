// Scripts

(function () {
    $(".toogle-menu").on('click', function() {
        $(this).toggleClass("active");
        $(".main-nav").toggleClass("expanded");
    });

    $(window).on('scroll touchmove', function () {
        $(".header").toggleClass("sticky", $(document).scrollTop() > 356);
    });

    $(".close").on('click', function() {
        $(this).parent().fadeOut(400);
    })
})();