(function () {
  const cards = document.querySelectorAll(".js-card");
  const TIMER_TOGGLE_PHOTO = 1500;

  const onMouseOverToggleHandler = function (evt) {
    const target = evt.target.closest('.js-card');
    const images = Array.from(target.querySelectorAll("img"));
    const amountImages = images.length;
    for (let i = 0; i < images.length; i++) {
      if (!images[i].dataset.src) {
        continue;
      } else {
        const url = images[i].dataset.src;
        images[i].src = url;
      }

    }
    if (amountImages === 1) return false;
    target.querySelector("img").classList.add('active');

    const intervalToggle = setInterval(function () {
      const currentImages = target.querySelector(".active");
      const index = images.indexOf(currentImages);
      if (index !== -1 && index < amountImages - 1) {
        images[index].classList.remove("active");
        images[index].nextElementSibling.classList.add("active");
      } else {
        images[amountImages - 1].classList.remove("active");
        images[0].classList.add("active");
      }
    }, TIMER_TOGGLE_PHOTO);
    target.addEventListener("mouseleave", function () {
      clearInterval(intervalToggle);
      const lastIndex = images.indexOf(target.querySelector(".active"));
      images[lastIndex].classList.remove("active");
      images[0].classList.add("active");
    });
  };
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseenter", onMouseOverToggleHandler);
  }


})();
