(function($) {

	$(document).ready(function() {
		$('.header-burger').click(function (e) { 
			e.preventDefault();
			$('.header').toggleClass('active');
		});
	});
})($);