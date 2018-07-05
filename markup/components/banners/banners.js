(function () {
  $('.js-banner-slide').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    appendDots: $('.banners .dots'),
    initialSlide: 2,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 1343,
        settings: {
          slidesToShow: 3,
          dots: false,
          initialSlide: 0,
          variableWidth: true,
        }

      }]
  });
})();
