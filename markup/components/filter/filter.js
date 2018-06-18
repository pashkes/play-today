(function () {
    const btnFilter = $('.js-filter-show');
    const overlay = $('.modal-backdrop');
    const filterList = $('.filter__sublist');
    let indexFilter;
    btnFilter.on('click', function () {
        const parentItem = $(this).parent('.filter__item');
        indexFilter = parentItem.index();
        parentItem.toggleClass('show');
        overlay.addClass('show');
        $('body').addClass('modal-open');
        $('body').css('padding-right', '17px');
    });
    $(document).mouseup(function (e) {
        if (filterList.has(e.target).length === 0) {
            $('.filter__item').removeClass('show');
            overlay.removeClass('show');
            $('body').removeClass('modal-open');
            $('body').removeAttr('style')
        }
    });
})();

$(function () {
    $('#slider-range').slider({
        range: true,
        min: 0,
        max: 8700,
        values: [540, 8700],
        slide: function (event, ui) {
            $('.js-from-cost').val(ui.values[0]);
            $('.js-to-cost').val(ui.values[1])
        }
    });
    $('.js-from-cost').val($('#slider-range').slider('values', 0));
    $('.js-to-cost').val($('#slider-range').slider('values', 1));

});
