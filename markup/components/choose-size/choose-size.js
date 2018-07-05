(function () {
  $('.js-add-cart').on('click', function () {
    $('#choose-modal').modal('hide');
    setTimeout(function () {
      $('#add-cart').modal('show');

    }, 500)
  });
})();
