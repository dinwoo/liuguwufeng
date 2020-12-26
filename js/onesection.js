(function($) {

	$(document).ready(function() {
		newsOwl = $('#news-carousel').owlCarousel({
			loop: false,
			margin: 20,
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

		$('.header-burger').click(function (e) { 
			e.preventDefault();
			$('.header').toggleClass('active');
		});
		$('#aboutus').click(function (e) { 
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $('section.aboutus').offset().top-150
			}, 500);
			$('.header').removeClass('active');
		});
		$('#news').click(function (e) { 
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $('section.news').offset().top-113
			}, 500);
			$('.header').removeClass('active');
		});
		$('#product').click(function (e) { 
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $('section.product').offset().top-113
			}, 500);
			$('.header').removeClass('active');
		});
		$('#faq').click(function (e) { 
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $('section.faq').offset().top-113
			}, 500);
			$('.header').removeClass('active');
		});
		$('#contact').click(function (e) { 
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $('section.contact').offset().top-113
			}, 500);
			$('.header').removeClass('active');
		});
		$('#index').click(function (e) { 
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 500);
			$('.header').removeClass('active');
		});
	});
})($);