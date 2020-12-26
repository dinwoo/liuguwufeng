(function($) {

  $(document).ready(function() {
    productOwl = $('#product-carousel').owlCarousel({
      loop: false,
      margin: 40,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: 1,
      nav: false,
      center: false,
      dots: true,
      responsive: {
				420: {
					items: 2,
				},
				1200: {
					margin: 40,
					items: 3,
				},
      },
    })
    $('#product-left').click(function() {
      productOwl.trigger('prev.owl.carousel');
    })
    $('#product-right').click(function() {
      productOwl.trigger('next.owl.carousel');
    })

    $('.tab-box .tab').on('click',function() {
      $('.tab-box .tab').removeClass('active')
      $(this).addClass('active')
      console.log($(this).index())
      $('.faq-box').hide()
      $('.faq-box').eq($(this).index()).show()
    })
    $('.faq-ques').on('click',function() {
      $('.faq-ans').slideUp()
      $(this).next().slideDown()
    })
  });
})($);
