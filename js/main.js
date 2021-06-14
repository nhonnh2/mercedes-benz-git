$(document).ready(function() {
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
})