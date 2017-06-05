<?
	$class_navbar = 'navbar-site scroll';
	$prefix_navbar = 'navbar__';

	$class_modals = 'modal-location';
	$prefix_modals = 'modal-location__';
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
		id = 13 "Персональные данные"
	*/
?>

 <nav class="navbar <?=$class_navbar;?>">
 	<div class="container <?=$prefix_navbar;?>container">
 		<div class="row <?=$prefix_navbar;?>row">
 			<div class="cols <?=$prefix_navbar;?>col-header"> 				
				<div class="<?=$prefix_navbar;?>header">
					<div class="row <?=$prefix_navbar;?>row-header ">
						<div class="cols <?=$prefix_navbar;?>col-hamburger">
							<div class="<?=$prefix_navbar;?>hamburger">
								<button class="<?=$prefix_navbar;?>hamburger-btn hamburger hamburger--arrow" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false" data-toggle-nav=".navbar-site" data-body="html" data-collapse-nav=".navbar__collapse">
									<span class="hamburger-box">
										<span class="hamburger-inner"></span>
									</span>
								</button>
							</div>
						</div>
						<div class="cols <?=$prefix_navbar;?>col-brand">
							<a class="<?=$prefix_navbar;?>brand" href="/">
								<span class="_logo"><svg class="icon-svg icon-logotip" role="img"><use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#logotip"></use></svg></span>
							</a>
						</div>
					</div>
				</div>
 			</div>
 			<div class="cols <?=$prefix_navbar;?>col-collapse">
				<div class="<?=$prefix_navbar;?>collapse" >
					<div class="<?=$prefix_navbar;?>collapse-inner">
						<div class="row <?=$prefix_navbar;?>collapse-row" >
							<div class="cols <?=$prefix_navbar;?>nav-cols" >
								<ul class="<?=$prefix_navbar;?>nav">
									<?
										if(!is_front_page()) {
									?>		 	
									<li class="<?=$prefix_navbar;?>nav-item">
										<a href="<?=l(1);?>" class="<?=$prefix_navbar;?>nav-link">
										<?=t(1);?>
										<span class="<?=$prefix_navbar;?>nav-line"></span>
										</a> 
									</li>	
									<?
									}
									?>	 	
									<li class="<?=$prefix_navbar;?>nav-item">
										<a href="<?=l(2);?>" class="<?=$prefix_navbar;?>nav-link">
											<?=t(2);?>
											<span class="<?=$prefix_navbar;?>nav-line"></span>
										</a> 
									</li>		 	
									<li class="<?=$prefix_navbar;?>nav-item">
										<a href="<?=l(3);?>" class="<?=$prefix_navbar;?>nav-link">
											<?=t(3);?>
											<span class="<?=$prefix_navbar;?>nav-line"></span>
										</a> 
									</li>	 	
									<li class="<?=$prefix_navbar;?>nav-item">
										<a href="<?=l(4);?>" class="<?=$prefix_navbar;?>nav-link">
											<?=t(4);?>
											<span class="<?=$prefix_navbar;?>nav-line"></span>
										</a> 
									</li>	 	
									<li class="<?=$prefix_navbar;?>nav-item">
										<a href="<?=l(5);?>" class="<?=$prefix_navbar;?>nav-link">
											<?=t(5);?>
											<span class="<?=$prefix_navbar;?>nav-line"></span>
										</a> 
									</li>	 	
									<li class="<?=$prefix_navbar;?>nav-item">
										<a href="<?=l(6);?>" class="<?=$prefix_navbar;?>nav-link">
											<?=t(6);?>
											<span class="<?=$prefix_navbar;?>nav-line"></span>
										</a> 
									</li>
								</ul>
							</div>
							<div class="cols <?=$prefix_navbar;?>tel-cols" >
								<a href="tel:<?=phone(getContact('phone1'));?>" class="<?=$prefix_navbar;?>tel"><?=getContact('phone1');?></a>
							</div>
							<? if(getContact('inst')){?>
							<div class="cols <?=$prefix_navbar;?>soc-cols" >
								<a href="<?=getContact('inst');?>" class="<?=$prefix_navbar;?>soc" target="_blank">
									<svg class="icon-svg icon-inst" role="img"><use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#inst"></use></svg>
								</a>
							</div>
							<?}?>
							<div class="cols <?=$prefix_navbar;?>select-cols" >
								<button type="button" class="btn-site <?=$prefix_navbar;?>btn-select" data-toggle="modal" data-target="#modal-location">
									<span class="icon"><svg class="icon-svg icon-arrows-down" role="img"><use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#arrows-down"></use></svg></span>
									Орёл
								</button>
							</div>
						</div>
					</div>
				</div>
 			</div>
 		</div>
 	</div>
</nav>

<div class="modal fade <?=$class_modals;?>" id="modal-location" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog <?=$prefix_modals;?>dialog">
		<div class="modal-body <?=$prefix_modals;?>body" >
			<button type="button" class="btn-site btn-close modal-close" data-dismiss="modal" aria-hidden="true">
				<svg class="icon-svg icon-cancel" role="img"><use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#cancel"></use></svg>
			</button>
			<div class="modal-content <?=$prefix_modals;?>content">
				<h3 class="modal-title <?=$prefix_modals;?>title">Выберите город</h3>
				<div class="modal-note <?=$prefix_modals;?>note">		
					<ul class="<?=$prefix_modals;?>list">
						<li><a href="#">Белгород</a></li>
						<li class="is--active"><a href="#">Орёл</a></li>
						<li><a href="#">Белгород</a></li>
					</ul>
				</div>
			</div> 
		</div>
	</div>
</div>