<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();?>
<?
if (!empty($arResult)) {
	if(count($arResult['ITEMS'])) {
		
		//azbn_ed($arResult);
?>

		<div class="clinics-block">			
			
				<?
				foreach($arResult['ITEMS'] as $item) {
					
					$phone1 = azbn_phone($item['props']['PHONE1']['VALUE']);
					$phone2 = azbn_phone($item['props']['PHONE2']['VALUE']);
					
					$img_full = CFile::GetPath($item['item']->fields['PREVIEW_PICTURE']);
					
				?>
			<div class="clinics-item__block">
				
				<div class="row clinics-item__row">
					<div class="cols clinics-item__cols cols-6 preview">
						<div class="clinics-item__preview" style="background-image: url(<?=$img_full;?>)"></div>
					</div>
					<div class="cols clinics-item__cols cols-6 note">
						<h3 class="clinics-item__name"><?=$item['props']['OFFICIAL_TITLE']['VALUE'];?></h3>
						<div class="clinics-item__address"><?=$item['props']['POST_INDEX']['VALUE'];?>, <?=$item['props']['ADR']['VALUE'];?></div>
						<div class="clinics-item__phone">Тел. 
							
							<?
							if($phone1 != '') {
							?>
							<a href="tel:+<?=$phone1;?>" class="{{navbar_prefix}}tel">+<?=substr($phone1, 0, 1);?> (<?=substr($phone1, 1, 4);?>) <span><?=substr($phone1, 5, 2);?>-<?=substr($phone1, 7, 2);?>-<?=substr($phone1, 9, 2);?></span></a>
							<?
							}
							?>
							
							<?
							if($phone2 != '') {
							?>
							, <a href="tel:+<?=$phone2;?>" class="{{navbar_prefix}}tel"><span><?=substr($phone2, 5, 2);?>-<?=substr($phone2, 7, 2);?>-<?=substr($phone2, 9, 2);?></span></a>
							<?
							}
							?>
							
						</div>
						<div class="clinics-item__work">
							<div>Время работы:</div>
							<?=$item['props']['WORKTIME']['~VALUE']['TEXT'];?>
						</div>
						<div><a href="<?=$item['item']->fields['DETAIL_PAGE_URL']?>" class="btn-site btn-blue clinics-item__btn btn-line">Подробнее</a></div>
					</div>
				</div>
				
			</div> 
				<?
				}
				?>
				
		</div>

<?
		
	}
}
