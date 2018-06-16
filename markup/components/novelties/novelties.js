(function () {
    $('.js-slider-novelties').slick({
        arrows: false,
        mobileFirst: true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
            breakpoint: 1315,
            settings: {
                slidesToShow: 5
            }
        }]
    });
})();
