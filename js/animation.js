var $win = $(window);
var $logo = $('.logo');

$('.logo-section').waypoint(function () {
	$logo.addClass('js-logo-animate');
}, {offset: '60%' });
