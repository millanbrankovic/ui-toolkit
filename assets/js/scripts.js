// Scripts

(function () {
    $(".toogle-menu").on('click', function() {
        $(".drop-down-menu").toggleClass("expanded");
    });
    $(window).on('scroll touchmove', function () {
        $(".header").toggleClass("sticky", $(document).scrollTop() > 356);
    });
})();