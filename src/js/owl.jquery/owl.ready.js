'use strict';
$(function() {
	$('.owl-block').owlCarousel({
		navText: ['<svg class="icon-svg icon-arrow-left-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/svg/sprite.svg#arrow-left-900"></use></svg> назад', 'вперед <svg class="icon-svg icon-arrow-right-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/svg/sprite.svg#arrow-right-900"></use></svg> '],
		nav: true,
		dots: true,
		smartSpeed: 500,
		margin: 30,
		//loop: true,
		//mouseDrag: false,
		responsive : {
			0 : {
				items:1,
				margin: 0,
				nav: false,
			},
			570 : {
				items:2,
			},
			980 : {
				items:3,
			},
			1400 : {
				items:5,
			}
		}
	});	
	$('.price-list-block__owl').owlCarousel({
		nav: false,
		dots: true,
		smartSpeed: 500,
		margin: 30,
		//loop: true,
		//mouseDrag: false,
		responsive : {
			0 : {
				items:1,
				margin: 0,
			},
			570 : {
				items:2,
			},
			980 : {
				items:3,
			},
			1400 : {
				items:4,
			}
		}
	});	
});