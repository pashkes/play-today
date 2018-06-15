const submenuItems = $('.js-has-submenu');
const header = $('.js-header');
const subListWrapper = $('.js-menu-container');
let indexItem;
const onMouseOverHideBgHandler = function () {
    header.removeClass('show');
    indexItem = $(this).parent().index();
};
const onMouseLeaveShowBgHandler = function () {
    header.addClass('show');
    $('.menu__link').removeClass('up');
    $(this).find('a').addClass('up');
};
submenuItems.on('mouseover', onMouseLeaveShowBgHandler);
submenuItems.on('mouseleave', onMouseOverHideBgHandler);
