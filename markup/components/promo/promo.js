$('.js-promo-slider').slick({
  arrows: false,
  dots: true,
  appendDots: $('.promo .dots'),
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 700
});
$('[data-section]').on({

  'mousemove': throttle(function (e) {

    var x = -(e.pageX / 16),
      y = -(e.pageY / 16);

    $('.parallax').css({
      transform: 'translate3d(' + x + 'px, ' + y + 'px, 0)',
      transition: '300ms ease'
    });
  }, 100)
});

function throttle(fn, threshhold, scope) {

  var last,
    deferTimer;

  threshhold || (threshhold = 250);

  return function () {

    var context = scope || this,
      now = +new Date,
      args = arguments;

    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);

      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    }
    else {
      last = now;
      fn.apply(context, args);
    }
  };
}
