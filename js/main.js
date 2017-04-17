//slicknav mobile hamburger menu plugin
$(function () {
    $('#navMenu').slicknav({
        closeOnClick: true
    });
    $('.slicknav_menu').prepend('<div class="logo"></div>');
});

//smooth scrolling
$(document).ready(function () {
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

//custom jQuery code - shrinks logo on hover

$('#bobslogo').hover(function () {
    $(this).animate({width: 175}, 1500);
    $(this).animate({width: 200}, 1500);
});
