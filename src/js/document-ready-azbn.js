'use strict';

(function(){

	var azbn_p = 'azbn.';

	var LS = {
		set : function(id,value) {localStorage.setItem(azbn_p + id, value);},
		get : function(id) {var item = localStorage.getItem(azbn_p + id);if(typeof item !== 'undefined' && item != null) {return item;} else {return null;}},
		remove : function(id) {localStorage.removeItem(azbn_p + id);},
		clear : function() {localStorage.clear();},
		obj2s : function(id,obj2save) {this.set(id, JSON.stringify(obj2save));},
		s2obj : function(id) {var item = this.get(id);if(typeof item != 'undefined' && item != null) {return JSON.parse(item);} else {return null;}},
	};
	/*
	var SS = {
		set : function(id,value) {sessionStorage.setItem(azbn_p + id, value);},
		get : function(id) {var item = sessionStorage.getItem(azbn_p + id);if(typeof item !== 'undefined' && item != null) {return item;} else {return null;}},
		remove : function(id) {sessionStorage.removeItem(azbn_p + id);},
		clear : function() {sessionStorage.clear();},
		obj2s : function(id,obj2save) {this.set(id, JSON.stringify(obj2save));},
		s2obj : function(id) {var item = this.get(id);if(typeof item !== 'undefined' && item != null) {return JSON.parse(item);} else {return null;}},
	};
	*/
	
	var Cart = {
		
		prefix : 'dixion.cart.',
		
		lscart_uid : function(){
			return this.prefix + 'services';
		},
		
		set : function(product, qty) {
			var cart = LS.s2obj(this.lscart_uid());
			
			product.material = 0;
			product.size = 0;
			product.color = 0;
			
			if(cart != null) {
				
			} else {
				cart = {};
			}
			
			if(cart[product.id]) {
				
			} else {
				cart[product.id] = {};
			}
			
			if(cart[product.id][product.material]) {
				
			} else {
				cart[product.id][product.material] = {};
			}
			
			if(cart[product.id][product.material][product.size]) {
				
			} else {
				cart[product.id][product.material][product.size] = {};
			}
			
			cart[product.id][product.material][product.size][product.color] = {
				id : product.id,
				title : product.title,
				qty : qty,
				cost1 : product.cost1 ? parseFloat('' + product.cost1) : cart[product.id][product.material][product.size][product.color].cost1,
				cost2 : product.cost2 ? parseFloat('' + product.cost2) : '',//cart[product.id][product.material][product.size][product.color].cost2
			};
			
			LS.obj2s(this.lscart_uid(), cart);
			
		},
		
		getQty : function(product) {
			var cart = LS.s2obj(this.lscart_uid());
			
			product.material = 0;
			product.size = 0;
			product.color = 0;
			
			if(cart != null) {
				
			} else {
				cart = {};
			}
			
			var res = 0;
			
			res = cart[product.id] ? (cart[product.id][product.material] ? (cart[product.id][product.material][product.size] ? (cart[product.id][product.material][product.size][product.color] ? cart[product.id][product.material][product.size][product.color].qty : res) : res) : res) : res;
			
			return parseInt(res);
		},
		
		getAll : function(){
			
			var cart = LS.s2obj(this.lscart_uid());
			
			if(cart != null) {
				
			} else {
				cart = {};
			}
			
			var res = 0;
			var sum = 0;
			
			for(var _id in cart) {
				
				(function(by_id){
					
					for(var _material in by_id) {
						
						(function(by_material){
							
							for(var _size in by_material) {
								
								(function(by_size){
									
									for(var _color in by_size) {
										
										res = res + by_size[_color].qty;
										sum = sum + (by_size[_color].qty * by_size[_color].cost);
										
									}
									
								})(by_material[_size]);
								
							}
							
						})(by_id[_material]);
						
					}
					
				})(cart[_id]);
				
			}
			
			return {
				qty : res,
				sum : sum,
			};
			
		},
		
		iterAll : function(cb, cb2) {
			
			var cart = LS.s2obj(this.lscart_uid());
			
			if(cart != null) {
				
			} else {
				cart = {};
			}
			
			var sum = 0;
			var qty = 0;
			
			for(var _id in cart) {
				
				(function(by_id){
					
					for(var _material in by_id) {
						
						(function(by_material){
							
							for(var _size in by_material) {
								
								(function(by_size){
									
									for(var _color in by_size) {
										
										//res = res + by_size[_color];
										qty = qty + by_size[_color].qty;
										sum = sum + (by_size[_color].qty * by_size[_color].cost1);
										
										cb({
											id : _id,
											//material : _material,
											//size : _size,
											//color : _color,
											title : by_size[_color].title,
											qty : by_size[_color].qty,
											cost1 : by_size[_color].cost1,
											cost2 : by_size[_color].cost2,
										});
										
									}
									
								})(by_material[_size]);
								
							}
							
						})(by_id[_material]);
						
					}
					
				})(cart[_id]);
				
			}
			
			cb2(sum, qty);
			
		},
		
		del : function(product) {
			var cart = LS.s2obj(this.lscart_uid());
			
			product.material = 0;
			product.size = 0;
			product.color = 0;
			
			if(cart != null) {
				
			} else {
				cart = {};
			}
			
			if(cart[product.id]) {
				
				if(cart[product.id][product.material]) {
					
					if(cart[product.id][product.material][product.size]) {
						
						if(cart[product.id][product.material][product.size][product.color]) {
							
							cart[product.id][product.material][product.size][product.color] = null;
							delete cart[product.id][product.material][product.size][product.color];
							
							LS.obj2s(this.lscart_uid(), cart);
							
						}
						
					}
					
				}
				
			}
			
		},
		
		clear : function() {
			LS.obj2s(this.lscart_uid(), {});
		},
		
	};
	
	
	var incart_item_ideal;
	
	var CartPageItem = function(product) {
		
		//console.log(product);
		
		var item = incart_item_ideal.clone(true);
		
		item
			.attr('data-service-id', product.id)
			.attr('data-service-cost1', product.cost1)
			.attr('data-service-cost2', product.cost2)
		;
		
		item.find('.azbn__incart-item__title').html(product.title);
		item.find('.azbn__incart-item__cost1').html(product.cost1);
		item.find('.azbn__incart-item__cost2').html(product.cost2 ? '/ ' + product.cost2 : '');
		
		return item;
		
	};
	
	
	$(function(){
		
		var cont = $('.price-list-page');
		
		if(cont.length) {
			
			var incart_items = $('.azbn__incart-items');
			var incart_items2 = $('.azbn__incart-items2');
			
			incart_item_ideal = incart_items.find('.azbn__incart-item_ideal');
			
			if(incart_item_ideal.length) {
				
				$(document.body).on('azbn.cart.recalc', null, {}, function(event){
					
					var form_input_arr = [''];//["Заказанные услуги"];
					
					$('.azbn__service-item').each(function(index){
						
						var btn = $(this).find('.btn-basket.azbn__service-item__add');
						
						btn.removeClass('is--active');
						btn.find('svg')
							.removeClass('icon-basket-active')
							.addClass('icon-basket-add')
						;
						var _use_href = btn.find('svg use').attr('xlink:href');
						_use_href = _use_href.split('#');
						_use_href = _use_href[0];
						btn.find('svg use').attr('xlink:href', _use_href + '#basket-add');
						
					});
					
					Cart.iterAll(function(item){
						
						CartPageItem(item).appendTo(incart_items);
						CartPageItem(item).appendTo(incart_items2);
						/*
						incart_items.each(function(index){
							
							$(this).append(CartPageItem(item));
							
						});
						*/
						
						form_input_arr.push(item.id + ') ' + item.title + '. Первичный: ' + item.cost1 + ' руб. Вторичный: ' + item.cost2);
						
						$('.azbn__service-item[data-service-id="' + item.id + '"]').each(function(index){
							
							var btn = $(this).find('.btn-basket.azbn__service-item__add');
							
							btn.addClass('is--active');
							btn.find('svg')
								.removeClass('icon-basket-add')
								.addClass('icon-basket-active')
							;
							var _use_href = btn.find('svg use').attr('xlink:href');
							_use_href = _use_href.split('#');
							_use_href = _use_href[0];
							btn.find('svg use').attr('xlink:href', _use_href + '#basket-active');
							
						});
						
					}, function(sum, qty){
						
						$('.azbn__incart-sum').html(sum);
						$('.azbn__incart-qty').html(qty);
						$('.azbn__incart-list').val(form_input_arr.join("\n"));
						
					});
					
				});
				
				$(document.body).on('click.azbn', '.azbn__service-item__add', {}, function(event){
					
					var btn = $(this);
					var item = btn.closest('.azbn__service-item');
					
					var product_id = parseInt(item.attr('data-service-id'));
					
					Cart.set({
						id : product_id,
						title : item.attr('data-service-title'),
						cost1 : parseFloat(item.attr('data-service-cost1')),
						cost2 : item.attr('data-service-cost2') || '',
					}, 1);
					
					incart_items.empty();
					incart_items2.empty();
					
					/*
					btn.addClass('is--active');
					btn.find('svg')
						.removeClass('icon-basket-add')
						.addClass('icon-basket-active')
					;
					var _use_href = btn.find('svg use').attr('xlink:href');
					_use_href = _use_href.split('#');
					_use_href = _use_href[0];
					btn.find('svg use').attr('xlink:href', _use_href + '#basket-active');
					*/
					
					$(document.body).trigger('azbn.cart.recalc');
					
				});
				
				$(document.body).on('click.azbn', '.azbn__incart-item__delete', {}, function(event){
					
					var btn = $(this);
					var item = btn.closest('.azbn__incart-item');
					
					var product_id = parseInt(item.attr('data-service-id'));
					
					Cart.del({
						id : product_id,
					})
					
					incart_items.empty();
					incart_items2.empty();
					
					$(document.body).trigger('azbn.cart.recalc');
					
				});
				
				incart_item_ideal.detach();
				
				incart_items.empty();
				incart_items2.empty();
				
				$(document.body).trigger('azbn.cart.recalc');
				
			}
			
		}
		
		
		$(document.body).on('submit', '.azbn-api-formsave', {}, function(event){
			event.preventDefault();
			
			var form = $(this);
			var _form = form.clone(true);
			
			var _method = form.attr('data-method') || 'formsave'
			
			_form
				.append($('<input/>', {
					type : 'hidden',
					name : 'method',
					value : _method,
				}))
			;
			
			$.post('/api/', _form.serialize(), function(data){
				
				data = JSON.parse(data);
				
				_form.empty().remove();
				form.trigger('reset');
				
				form.closest('.modal').modal('hide');
				
				$('.azbn-api-formsave-result').html(data.response.message.text);
				
				$('#modal-message-formsave-result').modal();
				
				if(form.hasClass('_azbn-service-order-form')) {
					
					Cart.clear();
					
				}
				
			});
			
		});
		
		
		$(document.body).on('click', '.azbn-specialist-order-btn', {}, function(event){
			//event.preventDefault();
			
			var btn = $(this);
			var spec_name = btn.attr('data-specialist-name') || '';
			
			$('#modal-appointment input.azbn-form-editable').val(spec_name);
			
		});
		
		$(document.body).on('click', '.azbn-service-program-order-btn', {}, function(event){
			//event.preventDefault();
			
			var btn = $(this);
			var spec_name = btn.attr('data-service-program') || '';
			
			$('#modal-order input.azbn-form-editable').val(spec_name);
			
		});
		
		$(document.body).on('click', 'svg polygon.azbn-tour-polygon', {}, function(event){
			//event.preventDefault();
			
			var btn = $(this);
			var img = btn.attr('data-room-preview') || '';
			var title = btn.attr('data-room-name') || '';
			
			$('.azbn-tour-image').css({
				'background-image' : 'url(' + img + ')',
			});
			
			$('.azbn-tour-title').html(title);
			
			$('svg polygon.azbn-tour-polygon').removeClass('is--active');
			btn.addClass('is--active');
			
		});
		
		$(document.body).on('click', '.price-list__nav_azbn-filter li ._azbn-btn', {}, function(event){//:not(.is--active)
			event.preventDefault();
			
			var btn = $(this);
			var clinic_filter = btn.attr('data-clinic-code');
			var cont = btn.closest('ul');
			var catcont = cont.next(btn.attr('data-clinic-filter'));
			
			cont.find('li.is--active').removeClass('is--active');
			btn.closest('li').addClass('is--active');
			
			catcont.children('li:not([data-clinic-code="' + clinic_filter + '"]):not(._no-hide)').hide();
			catcont.children('li[data-clinic-code="' + clinic_filter + '"]').fadeIn('fast');
			
		});
		
		$('svg polygon.azbn-tour-polygon').eq(0).trigger('click');
		
		$('.schedule-page .price-list-block__item-list .price-list-block__item-link').eq(0).trigger('click');
		
		$('.price-list__nav_azbn-filter li.is--active ._azbn-btn').eq(0).trigger('click');
		
		(function(){
			
			var btn = $('.directions-page .panel-group li.panel a[data-toggle="collapse"][href="' + window.location.hash + '"]');
			
			if(btn.length) {
				/*
				$('html, body').animate({
					scrollTop : btn.closest('.personnel-item__block').offset().top - 60 + 'px',
				}, 333);
				*/
				btn.eq(0).trigger('click');
				
			}
			
		})();
		
	});

})();