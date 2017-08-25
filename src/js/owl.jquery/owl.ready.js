'use strict';
$(function() {
	
	var owl = $('.owl-block');
	
	var genOwl = function(_owl, _item_length) {
		
		_item_length = parseInt(_item_length);
		
		_owl.owlCarousel({
			navText: ['<svg class="icon-svg icon-arrow-left-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/azbn7theme/img/svg/sprite.svg#arrow-left-900"></use></svg> назад', 'вперед <svg class="icon-svg icon-arrow-right-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/azbn7theme/img/svg/sprite.svg#arrow-right-900"></use></svg> '],
			nav: true,
			dots: true,
			smartSpeed: 500,
			margin: 30,
			//loop: true,
			//mouseDrag: false,
			//center : true,
			responsive : {
				0 : {
					items:1,
					margin: 0,
					nav: false,
				},
				570 : {
					items:2,
					nav: (_item_length > 2) ? true : false,
					dots: (_item_length > 2) ? true : false,
				},
				980 : {
					items:3,
					nav: (_item_length > 3) ? true : false,
					dots: (_item_length > 3) ? true : false,
				},
				1400 : {
					items:5,
					nav: (_item_length > 5) ? true : false,
					dots: (_item_length > 5) ? true : false,
				}
			}
		});	
		
	}
	
	if(owl.length) {
		
		if(screenJS.isXS()) {
			
			owl.each(function(index){
				
				var _owl = $(this);
				
				var items;
				
				items = _owl.find('.news-item__item');
				
				if(items.length) {
					
					items.each(function(index){
						
						if(index > 3) {
							$(this).empty().remove();
						}
						
					});
					
					genOwl(_owl, _owl.find('.news-item__item').length);
					
				} else if(_owl.find('.specialists-item__item').length) {
					
					items = _owl.find('.specialists-item__item');
					if(items.length) {
						
						items.each(function(index){
							
							if(index > 3) {
								$(this).empty().remove();
							}
							
						});
						
						genOwl(_owl, _owl.find('.specialists-item__item').length);
						
					}
					
				} else if(_owl.find('.license-item__item').length) {
					
					items = _owl.find('.license-item__item');
					if(items.length) {
						
						genOwl(_owl, items.length);
						
					}
					
				}
				
				
				
			});
			
		} else {
			
			owl.each(function(index){
				
				var _owl = $(this);
				
				var items;
				
				items = _owl.find('.news-item__item');
				
				if(items.length) {
					
					genOwl(_owl, items.length);
					
				} else if(_owl.find('.specialists-item__item').length) {
					
					items = _owl.find('.specialists-item__item');
					
					if(items.length) {
						genOwl(_owl, items.length);
					}
					
				} else if(_owl.find('.license-item__item').length) {
					
					items = _owl.find('.license-item__item');
					
					if(items.length) {
						genOwl(_owl, items.length);
					}
					
				}
				
			});
			
		}
		
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
	$('.owl-tour').owlCarousel({
		navText: ['<svg class="icon-svg icon-arrow-left-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/azbn7theme/img/svg/sprite.svg#arrow-left-900"></use></svg> назад', 'вперед <svg class="icon-svg icon-arrow-right-900" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/azbn7theme/img/svg/sprite.svg#arrow-right-900"></use></svg> '],
		nav: false,
		dots: true,
		smartSpeed: 500,
		margin: 30,
		//loop: true,
		//mouseDrag: false,
		//center : true,
		responsive : {
			0 : {
				items:1,
				margin: 0,
				touchDrag: true
			},
			570 : {
				items:2,
				nav: false,
				dots: false,
				mouseDrag: false,
				touchDrag: false 
			}
		}
	});
	
});