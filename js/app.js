

$(document).ready(function() {
	$(".ryu").hover(function () {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	});
	$('.ryu').mouseleave(function () {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
		});
	$('.ryu').click(function() {
		$('.ryu-still').hide();
		$('ryu-ready').hide();
		$('.ryu-throwing').show();
	});


});
