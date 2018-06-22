(function () {
    $('.js-slider-novelties').slick({
        arrows: false,
        mobileFirst: true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
            breakpoint: 1343,
            settings: {
                slidesToShow: 5,
                // variableWidth: true
            }
        }]
    });
})();
