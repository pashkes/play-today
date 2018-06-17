(function () {
    $('.js-banner-slide').slick({
        dots: true,
        arrows: false,
        mobileFirst: true,
        appendDots: $('.banners .dots'),
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },{
            breakpoint: 1345,
            settings: {
                slidesToShow: 3,
                dots: false,
                initialSlide: 0,
                variableWidth: true,
            }

        }]
    });
})();
