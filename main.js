function home() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
function projects() {
    window.scrollTo({
        top: 700,
        left: 0,
        behavior: "smooth"
    });
}
function contact() {
    window.scrollTo({
        top: 1500,
        left: 0,
        behavior: "smooth"
    });
}

// nav-bar-start
var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function () {

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});
// nav-bar-end

// nav-list-scrolling-start



// nav-list-scrolling-end

(function ($) {

    "use strict";

    $(window).on('load', function () {

        /* 
       MixitUp
       ========================================================================== */
        $('#portfolio').mixItUp();

        /* 
         One Page Navigation & wow js
         ========================================================================== */
        var OnePNav = $('.onepage-nev');
        var top_offset = OnePNav.height() - -0;
        OnePNav.onePageNav({
            currentClass: 'active',
            scrollOffset: top_offset,
        });

        /*Page Loader active
          ========================================================*/
        $('#preloader').fadeOut();

        // Sticky Nav
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.scrolling-navbar').addClass('top-nav-collapse');
            } else {
                $('.scrolling-navbar').removeClass('top-nav-collapse');
            }
        });

        /* slicknav mobile menu active  */
        $('.mobile-menu').slicknav({
            prependTo: '.navbar-header',
            parentTag: 'liner',
            allowParentLinks: true,
            duplicate: true,
            label: '',
            closedSymbol: '<i class="icon-arrow-right"></i>',
            openedSymbol: '<i class="icon-arrow-down"></i>',
        });

        /* WOW Scroll Spy
      ========================================================*/
        var wow = new WOW({
            //disabled for mobile
            mobile: false
        });

        wow.init();

        /* Nivo Lightbox 
        ========================================================*/
        $('.lightbox').nivoLightbox({
            effect: 'fadeScale',
            keyboardNav: true,
        });

        /* Counter
        ========================================================*/
        $('.counterUp').counterUp({
            delay: 10,
            time: 1000
        });


        /* Back Top Link active
        ========================================================*/
        var offset = 200;
        var duration = 500;
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });

        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });



    });

}(jQuery));




// scrollTop

// ===== Scroll to Top ==== 


