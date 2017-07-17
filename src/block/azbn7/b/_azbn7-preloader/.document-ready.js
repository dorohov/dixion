
(function(){
	
	var block = $(document.body).find('.azbn7-preloader');
	
	if(block.length) {
		
		var is_timed = false;
		var percent_position = 0;
		
		var percent_level = block.find('.azbn7-preloader__percent-level');
		
		$(document.body).on('azbn7.preloader.check', null, {}, function(event){
			event.preventDefault();
			
			if(block.data('is_loaded') && is_timed) {
				$(document.body).removeClass('_preloading');
				$(window).trigger('resize');
			}
			
		});
		
		$(document.body).on('azbn7.preloader.loaded', null, {}, function(event){
			event.preventDefault();
			
			block.data('is_loaded', true);
			
			$(document.body).trigger('azbn7.preloader.check');
			
		});
		
		$(document.body).on('click.azbn7.preloader.cancel-btn', '.azbn7-preloader .azbn7-preloader__cancel-btn', {}, function(event){
			event.preventDefault();
			
			block.data('is_loaded', true);
			is_timed = true;
			
			$(document.body).trigger('azbn7.preloader.check');
			
		});
		
		var intr = setInterval(function() {
			
			var check = Math.random();
			
			if(check > 0.5 && percent_position < 100) {
				
				percent_position++;
				
				//block.find('.azbn7-preloader__cancel-btn').text(percent_position);
				
				percent_level.css({
					width : percent_position + '%',
				})
				
				if(block.data('is_loaded')) {
					percent_position = percent_position + 15;
				}
				
				//var h = 100 + (pos);
				//var o = (100 - (pos / 5.5)) / 100;
				
				/*
				b.css({
					'width' : pos + '%',
				})
					.attr('data-pos', pos);
				*/
				
			} else if(percent_position > 99) {
				
				clearInterval(intr);
				
				is_timed = true;
				
				$(document.body).trigger('azbn7.preloader.check');
				
			}
			
		}, 40);
		
	} else {
		
		$(document.body).removeClass('_preloading');
		
	}
	
})();
