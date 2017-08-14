(function(){
	
	$(document.body).on('click', '.price-list__nav li a', {}, function(event){
		
		var btn = $(this)
		var tree_uid = btn.attr('data-category-tree') || '';
		
		if(tree_uid != '') {
			$('.price-list__nav_azbn[data-category-tree="' + tree_uid + '"]').toggleClass('is--active');
		}
		
	});
	
	if($('.price-list__nav_azbn li.is--active').length) {
		
		$('.price-list__nav_azbn li.is--active').closest('.price-list__nav_azbn').addClass('is--active');
		
	}
	
})();

(function(){
	
	var rows = $('.directions-page .price-block table.price-list__table tr');
	
	if(rows.length) {
		
		rows.each(function(index){
			
			if(index > 5) {
				$(this).hide();
			}
			
		})
		
		$(document.body).on('click', '.azbn__directions__price__more', {}, function(event){
			event.preventDefault();
			
			var btn = $(this);
			
			rows.filter(':not(:visible)').fadeIn('fast');
			
			btn.empty().remove();
			
		});
		
	}
	
})();
