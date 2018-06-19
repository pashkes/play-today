(function () {
    const tooltipProduct = $('.js-tooltip-product');
    const discountBlock = $('.js-show-tooltip');
    const btnHideTooltip = $('.js-close-tooltip');
    const discountBlockVanila = document.querySelector('.js-show-tooltip');

    //Появление подсказки для десктопа и тач устройств
    discountBlockVanila.addEventListener('touchstart', function () {
        tooltipProduct.toggleClass('show');
    });
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
