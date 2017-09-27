'use strict';
$(function() { 
	$('#sl-block').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: "#sl-nav",
		fade: true,
		arrows: true,
		//draggable: false,
		//swipe: false,
		//fade: true,
		//variableWidth: true,
		//centerMode: true,
		prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrow-left-900"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrow-right-900"></use></svg></button>'
	});
	$('#sl-nav').slick({
		slidesToShow: 9,
		slidesToScroll: 1,
		asNavFor: "#sl-block",
		centerMode: true,
		focusOnSelect: true,
		draggable: false,
		swipe: false,
		responsive: [
		    {
				breakpoint: 1200,
				settings: {
					slidesToShow: 7,
				}
		    },
		    {
				breakpoint: 1025,
				settings: {
					slidesToShow: 9,
				}
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 5,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 6,
		      }
		    }
		]
	});
}); 