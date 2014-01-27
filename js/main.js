var $items = $('.carousel-items img');

var switchItems = function (outgoing, incoming) {
	$items.eq(incoming).attr('data-state', 'incoming').fadeIn(250, function () {
		$items.eq(outgoing).attr('data-state', '').hide();
		$items.eq(incoming).attr('data-state', 'current');
	});
};

$items.filter(':not([data-state="current"])').hide();

$('.next').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var next = current + 1;
	
	if (next >= $items.length) {
		next = 0;
	}
	
	switchItems(current, next);
});

$items.filter(':not([data-state="current"])').hide();

$('.previous').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var next = current - 1;
	
	if (next >= $items.length) {
		next = 0;
	}
	
	switchItems(current, next);
});

var $dialog = $('#video');
var $placeholder = $('#video-placeholder');

dialogPolyfill.registerDialog($dialog.get(0));

$('#btn-open').on('click', function () {
	$placeholder.html('<iframe src="http://player.vimeo.com/video/81435576?color=ffffff&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	$dialog.get(0).showModal();
}); 

 $('#btn-close').on('click', function () {
	$dialog.get(0).close();
	$placeholder.html('');
})
