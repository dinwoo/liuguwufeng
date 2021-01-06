(function($) {

	$(document).ready(function() {
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


		function stopVideo() {
			$('iframe').each(function () {
				this.contentWindow.postMessage('{"event": "command", "func": "' + 'stopVideo' + '", "args": ""}', '*');
			});
		}

		bannerOwl = $('#banner-carousel').owlCarousel({
			loop: false,
			responsiveClass: true,
			autoplay: true,
			video: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			items: 1,
			nav: false,
			center: false,
			dots: true,
			onTranslated: function(event) {
				stopVideo();
				$('.video_mask').show();
				bannerOwl.trigger('play.owl.autoplay');
				$('#banner-carousel').find('iframe').each(function (key, item) { 
					var url = $(this).attr('src');
					if (url.indexOf('autoplay')>0){
						var newUrl = url.substring(0, url.indexOf("&autoplay"));
						$(this).attr('src', newUrl);
					}
				});
			}
		})

		$('.video_mask').click(function(){
			var iframe = $(this).closest('.iframe-box').find('iframe');
			var iframe_source = iframe.attr('src');
			iframe_source = iframe_source + "&autoplay=1"
			iframe.attr('src', iframe_source);
			$(this).hide();
			bannerOwl.trigger('stop.owl.autoplay');
		});

		$('#banner-left').click(function() {
			bannerOwl.trigger('prev.owl.carousel');
		})
		$('#banner-right').click(function() {
			bannerOwl.trigger('next.owl.carousel');
		})


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
			onTranslated: function(event) {
				$('.mask').hide()
			}
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


		$('.product-item').on('click',function() {
			var ww = window.innerWidth;
			if(ww<=768){
				$('.mask').hide()
				$(this).find('.mask').show()
			}
		})

		$('.product-item .mask .close').on('click',function(e) {
			e.stopPropagation();
			$(this).parents('.mask').hide();
		})
	});
})($);