(function($) {

  $(document).ready(function() {
    productOwl = $('#product-carousel').owlCarousel({
      loop: true,
      margin: 40,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: 3,
      nav: false,
      center: false,
      dots: false,
      responsive: {
      },
    })
  });
})($);
