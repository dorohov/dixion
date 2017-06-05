'use strict';
$(function() {
	$('.owl-block').owlCarousel({
		//navText: ['<svg class="icon-svg icon-arrow-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/svg/sprite.svg#arrows-prev"></use></svg>', '<svg class="icon-svg icon-arrow-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/svg/sprite.svg#arrows-next"></use></svg>'],
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