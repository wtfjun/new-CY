$(document).ready(function() {
	$('.my_thumbnail a').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).siblings('.content').css({'top': '0px','opacity': 1});
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).siblings('.content').css({
			'top': '20px',
			'opacity': 0
		});;
	});	
	});	