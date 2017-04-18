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


//custom JavaScript code - reveals the 'secret menu'

var secretBurger = document.getElementById('bobslogo');
secretBurger.addEventListener('dblclick', function () {   //This listens for a double-click on the Bob's Burgers logo.
    var newParagraph = document.createElement('section'); //Upon hearing the double-click, a new section appears that reveals a secret menu item. Ooooh!
    newParagraph.innerHTML = "<h2>Secret Menu</h2><h3 class='item'>Bob's Secret Burger<span class='price'>$6</span></h3>'<p class='description'>All-beef patty topped with Bob's Secret Sauce</p>"; //completes the sentence with 'for a good day'.
    document.getElementsByTagName('section')[5].appendChild(newParagraph);
});
