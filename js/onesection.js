(function($) {

  $(document).ready(function() {
    newsOwl = $('#news-carousel').owlCarousel({
      loop: false,
      margin: 40,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: 3,
      nav: false,
      center: false,
      dots: true,
      responsive: {
      },
    })
    $('#news-left').click(function() {
      newsOwl.trigger('prev.owl.carousel');
    })
    $('#news-right').click(function() {
      newsOwl.trigger('next.owl.carousel');
    })

    bannerOwl = $('#banner-carousel').owlCarousel({
      loop: false,
      // margin: 40,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: 1,
      nav: false,
      center: false,
      dots: true,
      responsive: {
      },
    })
    $('#banner-left').click(function() {
      bannerOwl.trigger('prev.owl.carousel');
    })
    $('#banner-right').click(function() {
      bannerOwl.trigger('next.owl.carousel');
    })
  });
})($);