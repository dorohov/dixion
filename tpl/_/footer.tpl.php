		<?
			$class_footer = 'footer-site';
			$prefix_footer = 'footer__';
			/*
				id = 1 "Главная",
				id = 2 "Реклама",
				id = 3 "О нас",
				id = 4 "Новости",
				id = 5 "Спецпроекты",
				id = 6 "Контакты",
				id = 7 "Новое Радио Орёл",
				id = 8 "Европа Плюс Орёл",
				id = 9 "Радио 7 Орёл",
				id = 10 "Спорт FM Орёл",
				id = 11 "Милицейская волна Орёл",
				id = 12 "Новое радио Белгород",
				id = 13 "Персональные данные",
			*/
		?>
		<footer class="<?=$class_footer;?>">	
			<div class="container <?=$prefix_footer;?>container">
				<div class="row <?=$prefix_footer;?>row">			
					<div class="cols <?=$prefix_footer;?>copyright-cols">
						<a href="<?=l(1);?>">
							<span class="_logo"><svg class="icon-svg icon-logotip" role="img"><use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#logotip"></use></svg></span>
						</a>
					</div>
					<div class="cols <?=$prefix_footer;?>contacts-cols">
						<div class="row <?=$prefix_footer;?>contacts-row">
							<?if (getContact('phone1')) {?>
							<div class="cols">						
								<div class="<?=$prefix_block;?>contacts-item">
									<a href="tel:<?=phone(getContact('phone1'));?>" class="<?=$prefix_block;?>phone"><?=getContact('phone1');?></a>
								</div>
							</div>
							<?}?>
							<?if (getContact('adr')) {?>
							<div class="cols">						
								<div class="<?=$prefix_footer;?>contacts-item">
									<?=getContact('adr');?>
								</div>
							</div>
							<?}?>
							<?if (getContact('email')) {?>
							<div class="cols">
								<div class="<?=$prefix_footer;?>contacts-item">
									<a href="mailto:<?=getContact('email');?>"><?=getContact('email');?></a>
								</div>						
							</div>
							<?}?>
						</div>	
					</div>
					<div class="cols <?=$prefix_footer;?>dorohovdesign-cols">
						<div class="row <?=$prefix_footer;?>dorohovdesign__row">
							<div class="cols">
								<div>Создание сайта</div>
							</div>
							<div class="cols">
								<div class="<?=$prefix_footer;?>dorohovdesign__logo">
									<a href="http://www.dorohovdesign.ru/" target="_blank">
										<svg class="icon-svg icon-dorohovdesign" role="img"><use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#dorohovdesign"></use></svg>
									</a>
								</div>	
							</div>
						</div>				 
					</div>	
				</div>
			</div>
		</footer>

		<? wp_footer(); ?>

		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
			<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->

		<script src="<?=$this->path('js');?>/jquery-3.2.1.min.js" ></script>
		<script src="<?=$this->path('js');?>/document-ready.js" ></script>

		<script src="<?=$this->path('js');?>/bootstrap.min.js" ></script>
		<script src="<?=$this->path('js');?>/device.min.js" ></script>

		<script src="<?=$this->path('js');?>/svg4everybody.min.js" ></script>
		<script>svg4everybody();</script>

		<?
			//Для id = 1 "Главная" 
			if($this->post['id'] == 1 ) {
				$this->tpl('_/script/googleMap', array());
				$this->tpl('_/script/owl', array());
			}
			if($this->post['id'] == 2 ) {
				$this->tpl('_/script/validationEngine', array());
				$this->tpl(
					'_/modal/reviews', 
					array(
						"class_modals"=>"modal-reviews",
						"prefix_modals" => "modal-reviews__",
						"heading_modals" => "Выберите город",
					)
				);
			}
			//Для id = 3 "О нас"
			if($this->post['id'] == 3 ) {
				$this->tpl('_/script/fancybox3', array());
			}
			//Для id = 6 "Контакты"
			if($this->post['id'] == 6 ) {
				$this->tpl('_/script/googleMap', array());
			}
			//Для id = 7 "Новое Радио Орёл"
			if($this->post['id'] == 7 ) {
				$this->tpl('_/script/validationEngine', array());
			}
			//Для id = 8 "Европа Плюс Орёл",
			if($this->post['id'] == 8 ) {
				$this->tpl('_/script/validationEngine', array());
			}
			//Для id = 9 "Радио 7 Орёл",
			if($this->post['id'] == 9 ) {
				$this->tpl('_/script/validationEngine', array());
			}
			//Для id = 10 "Спорт FM Орёл",
			if($this->post['id'] == 10 ) {
				$this->tpl('_/script/validationEngine', array());
			}
			//Для id = 11 "Милицейская волна Орёл",
			if($this->post['id'] == 11 ) {
				$this->tpl('_/script/validationEngine', array());
			}
			//Для id = 12 "Новое радио Белгород",
			if($this->post['id'] == 11 ) {
				$this->tpl('_/script/validationEngine', array());
			}
			//Для страниц записи новости,
			if(get_post_type($this->post['id']) == 'news') {
				$this->tpl('_/script/fancybox3', array());
			}
			$this->tpl('_/script/metrics', array()); 
		?> 
	
	</body>
</html>