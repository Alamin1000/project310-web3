(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // owl-carousel
  $(".card-slider-active").owlCarousel({
    loop: true,
    margin: 0,
    items: 3,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: [
      '<img src="images/arrow-left.png" alt="">',
      '<img src="images/arrow-right.png" alt="">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
})(jQuery);

$(document).ready(function () {
  $(".header__acr__item .header__acr__item__body").on(
    "show.bs.collapse",
    function () {
      let thisIs = $(this);
      thisIs.parents(".header__acr__item").addClass("a-active");
    }
  );
  $(".header__acr__item .header__acr__item__body").on(
    "hide.bs.collapse",
    function () {
      let thisIs = $(this);
      thisIs.parents(".header__acr__item").removeClass("a-active");
    }
  );
});
