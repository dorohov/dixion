(function(){
	
	$(document.body).on('click', '.price-list-block__item-link', null, function(event){
		
		$('.price-list-block__item-list.active').removeClass('active');
		
	});
	
})();