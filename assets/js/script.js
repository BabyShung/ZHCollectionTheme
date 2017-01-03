
$(document).ready(function() {
	//1.Return to top
	var returnTopID = "#return-to-top";
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
			$(returnTopID).fadeIn(200);    // Fade in the arrow
		} else {
			$(returnTopID).fadeOut(400);   // Else fade out the arrow
		}
	});
	$(returnTopID).click(function() {      // When arrow is clicked
		$('body,html').animate({
			scrollTop : 0                       // Scroll to top of body
		}, 500);
	});
	
	//2.iframe delay
    $('iframe').easyframe({
  			url: null,
	  attribute: 'data-src',
	    timeout: 2500 
	},function(el) {
  		// remove indicator
  		el.next().removeClass('active').hide();
	});
});