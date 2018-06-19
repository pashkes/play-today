
$('.js-main-slider-lg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.js-nav-slider',
    vertical: true,
    verticalSwiping: true,
    swipe: false,
});
$('.js-nav-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.js-main-slider-lg',
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    mobileFirst: true,
    responsive: [{
        breakpoint: '576',
        settings: {
            slidesToShow: 4,
        }
    }]
});
