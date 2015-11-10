$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		// Play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show().animate( 
			{ 'left': '1020px' },
			500,
		function() {
			$(this).hide();
			$(this).css('left', '520px');
			}
		);
		// Show hadouken and animake it to the right of the screen
	})
	.mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		// ryu goes back to its ready position
	})
	

});

// 1. Explain why this is chaining. Does it have to do with the lack of the semi-colon?
// 2. Explain in detail what a callback function is and exactly what it does
// 3. Walk me thru the hadouken function starting at line 14
