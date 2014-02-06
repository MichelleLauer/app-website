var $placeholder = $('.placeholder');

$('.btn-load').on('click', function () {
	$placeholder.load('loaded-in.html');
});

var rand = Math.round( Math.random() * 2 );
var file = 'test-' + rand + '.html';

$('.rand-test').load(file);

