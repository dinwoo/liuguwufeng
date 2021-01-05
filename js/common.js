(function($) {

	$(document).ready(function() {
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