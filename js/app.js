

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
		playHadouken();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
  {'left': '1020px'},
  700,
  function() {
    $(this).hide();
    $(this).css('left', '520px');
  }
);
	});
	//third event, click mouse and ryu throws and hadouken appears
	$('.ryu').mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});


});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
