$('.js-main-slider-lg').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.js-nav-slider',
  vertical: true,
  verticalSwiping: true,
  swipe: false,
  infinite: false,
});
$('.js-nav-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.js-main-slider-lg',
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: true,
  mobileFirst: true,
  infinite: false,
  responsive: [{
    breakpoint: '576',
    settings: {
      slidesToShow: 4,
    }
  }]
});
$('.zoom_01').elevateZoom({
  zoomWindowFadeIn: 500,
  zoomWindowFadeOut: 500,
  lensFadeIn: 500,
  lensFadeOut: 500,
  easing : true,
  tintOpacity:1,
  zoomWindowWidth:560,
  zoomWindowHeight:760,
  gallery:'slick-track'
});

