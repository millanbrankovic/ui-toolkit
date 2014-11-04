// Scripts

(function () {
    $(".toogle-menu").on('click', function() {
        $(this).toggleClass("active");
        $(".drop-down-menu").slideToggle(200);
    });

    $(window).on('scroll touchmove', function () {
        $(".header").toggleClass("sticky", $(document).scrollTop() > 356);
    });

    $(".close").on('click', function() {
        $(this).parent().fadeOut(400);
    })
})();