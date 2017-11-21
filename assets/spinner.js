// JQUERY
$(function() {
	// Users can skip the loading process if they want.
	$('.Skip').click(function() {
		$('.overlay, .body').addClass('loaded');
	})
	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, .body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 1000);
	});
	
	
	
});
