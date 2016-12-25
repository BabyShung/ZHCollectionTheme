
//Return to top
$(document).ready(function() {
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
	
	//iframe delay
    $('iframe').easyframe({
  			url: null,
	  attribute: 'data-src',
	    timeout: 2000 
	},function() {
  		//  console.log
	});

	
	
  // var options = [
//     {selector: 'nav', offset: 0, callback: function(el) {
//       $('footer ul').css('opacity', '1.0');
//       Materialize.showStaggeredList($(el));
//     } }
//   ];
//   Materialize.scrollFire(options);
	
});