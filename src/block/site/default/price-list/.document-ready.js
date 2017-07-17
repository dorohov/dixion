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