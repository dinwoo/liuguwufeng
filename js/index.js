(function($) {

  $(document).ready(function() {
    serviceOwl = $('#service-carousel1').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: 1,
      nav: false,
      center: true,
      dots: true,
      responsive: {
      },
    })
    serviceOwl = $('#service-carousel2').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: 1,
      nav: false,
      center: true,
      dots: true,
      responsive: {
      },
    })
    awardedOwl = $('#awarded-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: 1,
      nav: false,
      center: true,
      dots: true,
      responsive: {
      },
    })
    $('.tab').on('click',function() {
      $('.tab').removeClass('active')
      $(this).addClass('active')
    })
  });
})($);
