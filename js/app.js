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
		playhadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate( 
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

function playhadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}



// 1. Explain why this is chaining. Does it have to do with the lack of the semi-colon?
// 2. Explain in detail what a callback function is and exactly what it does
// 3. Walk me thru the hadouken function starting at line 14
// 4. Help me with the syntax - brackets, braces, etc....what is that telling the browser?
// 5. Walk me thru how to think about JS and how to implement it
