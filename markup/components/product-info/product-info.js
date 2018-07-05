(function () {
  const tooltipProduct = $('.js-tooltip-product');
  const discountBlock = $('.js-show-tooltip');
  const btnHideTooltip = $('.js-close-tooltip');


  discountBlock.on('mouseover', function () {
    tooltipProduct.addClass('show');
    addCheckClickOutPlace();
  });
  const onclickOutPlaceHandler = function (e) {
    if (tooltipProduct.has(e.target).length === 0) {
      tooltipProduct.removeClass('show');
      removeCheckClickOutPlace();
    }
  };
  const addCheckClickOutPlace = function () {
    $(document).on('mouseup', onclickOutPlaceHandler);
  };
  const removeCheckClickOutPlace = function () {
    $(document).off('mouseup', onclickOutPlaceHandler);
  };
  tooltipProduct.on('mouseleave', function () {
    $(this).removeClass('show');
  });
  btnHideTooltip.on('click', function () {
    tooltipProduct.removeClass('show')
  });
})();
