// Set abbreviation current language when the page on load and for change language
const currentLang = $('.header__select-lang .CaptionCont span');
const selectLang = $('.js-custom-select');

currentLang.text(selectLang.find('option:selected').val());

selectLang.change(function () {
    currentLang.text($(this).find('option:selected').val());
});

// Show a field search
const searchField = $('.js-search-field');
const btnShowSearch = $('.js-search-show');

const onClickSearchHandler = function () {
    searchField.toggleClass('show');
};

btnShowSearch.on('click', onClickSearchHandler);
