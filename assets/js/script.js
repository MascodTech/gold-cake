$(function () {
    var $nav = $('.nav');
    var $window = $(window);
    var offset = $nav.offset().top;
    var $gallery = $('.gallery');
    var fixed = false;
    function fixedNavbar() {
        if ($window.scrollTop() >= offset && !fixed) {
            $nav.addClass('fixed-top shadow');
            $gallery.addClass('gallary-margin shadow');
            fixed = true;
        }
        else if ($window.scrollTop() < offset && fixed) {
            $nav.removeClass('fixed-top shadow');
            $gallery.removeClass('gallary-margin shadow');
            fixed = false;
        }
    }

    fixedNavbar();
    $window.scroll(fixedNavbar);
});