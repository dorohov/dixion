'use strict';
$(function() {
	
	var owl = $('.owl-block');
	
	if(owl.length) {
		
		if(screenJS.isXS()) {
			
			owl.each(function(index){
				
				var _own = $(this);
				
				var items;
				
				items = _own.find('.news-item__item');
				if(items.length) {
					items.each(function(index){
						
						if(index > 3) {
							$(this).empty().remove();
						}
						
					})
				}
				
				items = _own.find('.specialists-item__item');
				if(items.length) {
					items.each(function(index){
						
						if(index > 3) {
							$(this).empty().remove();
						}
						
					})
				}
				
			});
			
		}
		
		owl.owlCarousel({
			navText: ['<svg class="icon-svg icon-arrow-left-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/azbn7theme/img/svg/sprite.svg#arrow-left-900"></use></svg> назад', 'вперед <svg class="icon-svg icon-arrow-right-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/azbn7theme/img/svg/sprite.svg#arrow-right-900"></use></svg> '],
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
		
	}
	
	
	
	var pl_owl = $('.price-list-block__owl');
	
	if(pl_owl.length) {
		
		pl_owl.owlCarousel({
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
		
	}
	
});