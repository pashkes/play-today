
$('.CaptionCont span').text($('.js-custom-select').find('option:selected').val());
$('.js-custom-select').change(function () {
    $('.CaptionCont span').text($(this).find('option:selected').val());
});

// Show a field search
const searchField = $('.js-search-field');
const btnShowSearch = $('.js-search-show');
const onClickSearchHandler = function () {
    searchField.toggleClass('show');
};
btnShowSearch.on('click', onClickSearchHandler);
