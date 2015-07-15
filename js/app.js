

$(document).ready(function() {
	$(".ryu").mouseenter(function () {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	});
	//first event, mouse hovers and ryu is rdy
	$('.ryu').mouseleave(function () {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
		});
	//second event, move mouse away and ryu rests
	$('.ryu').mousedown(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
	});
	//third event, click mouse and ryu throws and hadouken appears
	$('.ryu').mouseup(function(){
		 console.log('test test');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});


});
