<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();?>
<?
if (!empty($arResult)) {
	if(count($arResult['ITEMS'])) {
		
		//azbn_ed($arResult);
		
?>

<div class="banner-block">
	<div id="banner-carousel" class="carousel slide carousel-fade banner__carousel" data-ride="carousel">
		<div class="carousel-inner banner__carousel-inner">
			
			<?
			foreach($arResult['ITEMS'] as $item) {
				
				$img_full = CFile::GetPath($item['DETAIL_PICTURE']);
				$img_mobile = CFile::GetPath($item['PREVIEW_PICTURE']);
				
			?>
			
			<div class="item banner__carousel-item">
				<a href="#"><img 
					src="<?=$img_full;?>" 
						data-src-320="<?=$img_mobile;?>" 
						data-src-480="<?=$img_mobile;?>" 
						data-src-768="<?=$img_full;?>" 
					alt="">
				</a>
			</div>
			
			
			<?
			}
			?>
			
		</div>
		<a class="left carousel-control banner__carousel-control" href="#banner-carousel" data-slide="prev">
			<svg class="icon-svg icon-arrow-left-900" role="img">
				<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#arrow-left-900"></use>
			</svg>
		</a>
		<a class="right carousel-control banner__carousel-control" href="#banner-carousel" data-slide="next">
			<svg class="icon-svg icon-arrow-right-900" role="img">
				<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#arrow-right-900"></use>
			</svg>
		</a>
	</div>
</div>


<?
	}
}
