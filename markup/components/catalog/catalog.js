(function () {
    const btnSize = $('.js-show-size');
    btnSize.on('click', function (evt) {
        $(this).toggleClass('active');
       evt.target.closest('.product-card').querySelector('.product-card__sizes').classList.toggle('show');
    })
})();
