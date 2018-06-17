(function () {
    const btnArrow = $('.js-show-submenu');

    const onClickShowSubmenuHandler = function (evt) {
        const el = evt.target.closest('.categories__item');
        el.classList.toggle('active');
    };
    btnArrow.on('click', onClickShowSubmenuHandler)
})();
