(function () {
    const btnFilter = $('.js-filter-show');
    const overlay = $('.modal-backdrop');
    const filterList = $('.filter__sublist');
    let indexFilter;
    const selectItem = [];
    const filterName = [
        'Возраст',
        'Размер',
        'Цвет',
        'Сезон',
        'Коллекция'
    ];
    btnFilter.on('click', function () {
        const parentItem = $(this).parent('.filter__item');
        indexFilter = parentItem.index();
        parentItem.toggleClass('show');
        overlay.addClass('show');
        $('body').addClass('modal-open');
        $('body').css('padding-right', '17px');
        const selectList = [];
        selectItem.push(selectList);
        $('.filter input').on('change', function (evt) {
            const itemTrue = $(this).parent('label').find('input:checked').prop('checked');
            let currentTextItem = $(this).val();
            if (itemTrue && selectItem[indexFilter].indexOf(currentTextItem) === -1) {
                selectItem[indexFilter].push(currentTextItem);
            } else {
                selectItem[indexFilter].splice(selectItem[indexFilter].indexOf(currentTextItem))
            }
            if (selectItem[indexFilter].length > 1) {
                evt.target.closest('.filter__item').querySelector('.filter__icon').textContent = selectItem[indexFilter].length + ' метки';
            }
            if (selectItem[indexFilter].length === 1) {
                evt.target.closest('.filter__item').querySelector('.filter__icon').textContent = currentTextItem;
            }
            if(selectItem[indexFilter].length === 0) {
                evt.target.closest('.filter__item').querySelector('.filter__icon').textContent = filterName[indexFilter];
            }
        });
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
