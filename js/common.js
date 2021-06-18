$('.btn-menu').click(function () {
    $(this).toggleClass('mineshaft').toggleClass('white').find('.icon-burger').toggleClass('icon-burger--is-active');
    if($('.btn-menu').hasClass('white')) {
        $(this).parents('header').find('.mineshaft').removeClass('mineshaft theme-d__white theme-l__mineshaft theme-d__touch-white theme-l__touch-mineshaft').addClass('white theme-d__white theme-l__white');
    } else {
        $(this).parents('header').find('.theme-d__white.theme-l__white').removeClass('white theme-d__white theme-l__white').addClass('mineshaft theme-d__white theme-l__mineshaft theme-d__touch-white theme-l__touch-mineshaft');
    }
    $('.accessible-hide-menu').toggleClass('accessible-hide');

});

$('.btn-category').click(function () {
    console.log(1);
    $(this).toggleClass('theme-d__white theme-d__touch-white theme-l__touch-mineshaft').toggleClass('theme-d__mineshaft hover-violet hover-bg-magnolia').find('.btn-category-icon').toggleClass('rotate');
    $('.accessible-hide-category').toggleClass('accessible-hide');
});

