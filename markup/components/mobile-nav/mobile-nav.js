(function () {
  const mobileNav = $('.js-mobile-nav');
  const linkOnSubmenu = mobileNav.find('.mobile-nav__link--has-submenu');
  const btnComeBack = mobileNav.find('.js-come-back');
  const mainMenu = mobileNav.find('.js-main-menu');

  linkOnSubmenu.on('click', function (evt) {
    evt.preventDefault();
    const categoryId = $(this).data('category');
    mobileNav.find('.js-mobile-submenu[data-category=' + categoryId + ']').addClass('active');
    mainMenu.addClass('hide')
  });
  btnComeBack.on('click', function () {
    mainMenu.removeClass('hide');
    $(this).parent('.js-mobile-submenu').removeClass('active');
  });


  const btnTogleMenu = $('.js-toggle-menu');
  const header = $('.js-header');

  btnTogleMenu.on('click', function () {
    if (mobileNav.hasClass('opened')) {
      mobileNav.removeClass('opened');
      header.removeClass('show-menu');
    } else {
      mobileNav.addClass('opened');
      header.addClass('show-menu');
    }
    // $(document).mouseup(function (e) {
    //     if (mobileNav.has(e.target).length === 0) {
    //         mobileNav.removeClass('opened');
    //         header.removeClass('show-menu');
    //     }
    // });
  });

})();
