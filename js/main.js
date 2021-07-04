$(document).ready(function() {
    // CATEGORYGRID 
    //Add & Remove grid-item-x4 when in breakpoint
    var handleMatchMedia = function(mediaQuery) {
            if (mediaQuery.matches) {
                $('.grid-item-ad').removeClass('grid-item-x4');
            } else {
                $('.grid-item-ad').addClass('grid-item-x4');
            }
        },

        mql = window.matchMedia('screen and (max-width: 1279px)');

    handleMatchMedia(mql);
    mql.addListener(handleMatchMedia);
    //categoryGrid Show More
    $('.tab-pane .show-more').on('click', function() {
        var selector = $(this).parent().parent();
        selector.find('.grid-d-ad').removeClass('d-none');
        $(this).addClass('d-none');
    });

    // CTATRAP
    //Add & Remove ctrastrap__item--hover when in breakpoint
    var handleMatchMedia = function(mediaQuery) {
            if (mediaQuery.matches) {
                $('.ctrastrap__item').removeClass('ctrastrap__item--hover');
            } else {
                $('.ctrastrap__item').addClass('ctrastrap__item--hover');
            }
        },

        mql = window.matchMedia('screen and (max-width: 768px)');

    handleMatchMedia(mql);
    mql.addListener(handleMatchMedia);
    //click show list share social
    $('.strap__share').on('click', function() {
        if ($(this).index($('.active-list-social')) != -1) {
            $(this).removeClass('active-list-social');
        } else {
            $(this).addClass('active-list-social');
        }
    });
    $('.navbar-toggler ').off('click').on('click', function() {
        if ($('.navbar-toggler').attr("aria-expanded") == "false") {
            $('body').css("overflow", "hidden");
        } else {
            $('body').css("overflow", "auto");
        }
    });

    var handleMatchMedia = function(mediaQuery) {
            if (!mediaQuery.matches) {
                $('.navbar-collapse').removeClass('show');
            }
        },

        mql = window.matchMedia('screen and (max-width: 1279px)');

    handleMatchMedia(mql);
    mql.addListener(handleMatchMedia);


    window.onscroll = function() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            $('.header__container').css("top", "-100%");
        } else {
            $('.header__container').css("top", "0");
        }
    }
})