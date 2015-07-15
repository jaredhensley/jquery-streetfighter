

$(document).ready(function() {
	$(".ryu").mouseenter(function () {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	});
	$('.ryu').mouseleave(function () {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
		});
	$('.ryu').mousedown(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		//shows his ready state and hadouken 
	});
	$('.ryu').mouseup(function(){
		 console.log('test test');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		//return ryu to still state
	});


});
