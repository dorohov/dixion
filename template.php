<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();?>
<?

/*
GetMessage('DIX_COMP_NAME')
$arParams['CONTACTS_ADR1']
$arResult['ITEMS']

echo COption::GetOptionString('AZBN_CONTACTS', 'UF_CONTACT_ADR1' );

*/

?>

<?
$APPLICATION->IncludeComponent(
	'dixion:tpl.footer.pricelist',
	'',
	array(
		
	),
	false
);
?>


<footer class="footer-site <?if($arResult['CONFIG']['IS']['PAGE_CONTACTS']){echo 'dd';}?> ">	
	<div class="container footer__container">
		<div class="row footer__row">			
			<div class="cols footer__copyright-cols">
				<a href="/">
					<span class="_logo"><svg class="icon-svg icon-logotip" role="img">
						<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#logotip"></use>
					</svg></span>
				</a>
			</div>
			<div class="cols footer__contacts-cols">
				<div class="row footer__contacts-row">
					
					<?
					$phone1 = azbn_phone(azbn_field('CONTACTS_PHONE1'));
					$phone2 = azbn_phone(azbn_field('CONTACTS_PHONE2'));
					?>
					
					<div class="cols">						
						<div class="footer__contacts-item">
							<a href="tel:+<?=$phone1;?>" class="footer__phone">+<?=substr($phone1, 0, 1);?> (<?=substr($phone1, 1, 4);?>) <span><?=substr($phone1, 5, 2);?>-<?=substr($phone1, 7, 2);?>-<?=substr($phone1, 9, 2);?></span></a>
						</div>				
						<div class="footer__contacts-item">
							<a href="tel:+<?=$phone2;?>" class="footer__phone">+<?=substr($phone2, 0, 1);?> (<?=substr($phone2, 1, 4);?>) <span><?=substr($phone2, 5, 2);?>-<?=substr($phone2, 7, 2);?>-<?=substr($phone2, 9, 2);?></span></a>
						</div>
					</div>
					<div class="cols">						
						<div class="footer__contacts-item">
							<span><?=azbn_field('CONTACTS_CITY1');?>,</span> <?=azbn_field('CONTACTS_ADR1');?>
						</div>						
						<div class="footer__contacts-item">
							<span><?=azbn_field('CONTACTS_CITY1');?>,</span> <?=azbn_field('CONTACTS_ADR2');?>
						</div>
					</div>
					<div class="cols">
						<div class="footer__contacts-item">
							<a href="#" class="footer__cabinet">Личный кабинет</a>
						</div>						
					</div>
				</div>	
			</div>	
			<div class="cols footer__soc-cols">
				<div class="social-block">
					<div class="row social__row"> 
						<div class="cols social__cols">
							<a href="<?=azbn_field('CONTACTS_VK');?>" target="_blank" class="footer__soc-item social__item _vk">
								<svg class="icon-svg icon-vk" role="img">
									<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#vk"></use>
								</svg> 
							</a>
						</div>
						<div class="cols social__cols">
							<a href="<?=azbn_field('CONTACTS_FB');?>" target="_blank" class="footer__soc-item social__item">
								<svg class="icon-svg icon-fb" role="img">
									<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#fb"></use>
								</svg> 
							</a>
						</div>
						<div class="cols social__cols">
							<a href="<?=azbn_field('CONTACTS_OK');?>" target="_blank" class="footer__soc-item social__item _ok">
								<svg class="icon-svg icon-ok" role="img">
									<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#ok"></use>
								</svg> 
							</a>
						</div>
					</div>
				</div> 
			</div>	
			<div class="cols footer__dorohovdesign-cols">
				<div class="row footer__dorohovdesign__row"> 
					<div class="cols">
						<div>Создание сайта</div>
					</div>
					<div class="cols">
						<div class="footer__dorohovdesign__logo">
							<a href="http://www.dorohovdesign.ru/" target="_blank">
								<svg class="icon-svg icon-dorohovdesign" role="img">
									<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#dorohovdesign"></use>
								</svg>
							</a>
						</div>	
					</div>
				</div>				 
			</div>		
		</div>
	</div>
</footer>

<?
$APPLICATION->IncludeComponent(
	'dixion:tpl.footer.modals',
	'',
	array(
		
	),
	false
);
?>

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<!-- <script src="/js/jquery.min.js" ></script> -->
<script src="<?=SITE_TEMPLATE_PATH;?>/js/jquery-3.2.1.min.js" ></script>
<script src="<?=SITE_TEMPLATE_PATH;?>/js/document-ready.js?v=201707171148" ></script>
<script src="<?=SITE_TEMPLATE_PATH;?>/js/document-ready-azbn.js?v=201707171148" ></script>

<script src="<?=SITE_TEMPLATE_PATH;?>/js/bootstrap.min.js" ></script>
<script src="<?=SITE_TEMPLATE_PATH;?>/js/device.min.js" ></script>

<script src="<?=SITE_TEMPLATE_PATH;?>/js/svg4everybody.min.js" ></script>
<script>svg4everybody();</script> 
<link rel="stylesheet" type="text/css" href="<?=SITE_TEMPLATE_PATH;?>/css/owl.jquery.css?v=201707171148">
<script src="<?=SITE_TEMPLATE_PATH;?>/js/owl.jquery/owl.carousel.min.js"></script> 
<script src="<?=SITE_TEMPLATE_PATH;?>/js/owl.jquery/owl.ready.js?v=201707171148"></script>  
<link rel="stylesheet" type="text/css" href="<?=SITE_TEMPLATE_PATH;?>/css/validationEngine.jquery.css">
<script src="<?=SITE_TEMPLATE_PATH;?>/js/validationEngine.jquery/jquery.validationEngine.min.js" ></script>
<script src="<?=SITE_TEMPLATE_PATH;?>/js/validationEngine.jquery/jquery.validationEngine-ru.min.js" ></script>
<script src="<?=SITE_TEMPLATE_PATH;?>/js/jquery.maskedinput.js" ></script>
<script>		
  	$(document).ready(function () {
  		$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
  		$(".form__control[data-mask='timepicker']").mask("99:99",{placeholder:"ЧЧ:ММ"});
  		$(".form__control[data-mask='datapicker']").mask("9999-99-99",{placeholder:"ГГГГ-ММ-ДД"});
		$("form.form-site").validationEngine(
			'attach', {
				promptPosition : "bottomLeft",
				scrollOffset: 200
			}
		);
	});
</script>

<link rel="stylesheet" type="text/css" href="<?=SITE_TEMPLATE_PATH;?>/css/scrollbar.jquery.css">
<script src="<?=SITE_TEMPLATE_PATH;?>/js/jquery.mCustomScrollbar.js"></script>
<script>		
	$(document).ready(function () {
		$(".scroller").mCustomScrollbar();
	});
</script> 

<link href="<?=SITE_TEMPLATE_PATH;?>/css/jquery.fancybox.css" rel="stylesheet" type="text/css" />
<script src="<?=SITE_TEMPLATE_PATH;?>/js/fancybox3.jquery/jquery.fancybox.js" ></script>

<?
if($arResult['CONFIG']['IS']['PAGE_CONTACTS']) {
?>
<script src="<?=SITE_TEMPLATE_PATH;?>/js/google-map.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC5mvq0SP3WCozmHWsYmfdLq_Y3vlaosik&callback=initMap" async defer></script>
<?
}
?>

<!--<div >footer сайта</div>-->
