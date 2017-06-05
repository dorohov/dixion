<?	
	/*$this->tpl(
		'_/form/fio-tel-comment', 
		array(
			"class_form"=>"block _adspp__form wave__ad-form",
			"prefix_form" => "form__",
			"heading_form" => "Заказать рекламу<br> на Европе Плюс",
			"note_form" => "Наш менеджер скоро свяжется с вами.",
			"btn_name_form" => "Отправить заявку"
		)
	);
	*/

					
?>
<form action="#" class="form-site <?=$param["class_form"];?>"  >
	<? if ($param["heading_form"]){?>
	<h4 class="<?=$param["prefix_form"];?>heading"><?=$param["heading_form"];?></h4>	
	<?}?>	
	<div class="row <?=$param["prefix_form"];?>row">
		<div class="cols <?=$param["prefix_form"];?>cols">
			<div class="<?=$param["prefix_form"];?>item">
				<input type="text" class="<?=$param["prefix_form"];?>control form-control validate[required, custom[onlyLetterSp]]" id="f[name]" name="f[Имя]" placeholder="Ваше имя">
			</div>	
		</div>
		<div class="cols <?=$param["prefix_form"];?>cols">
			<div class="<?=$param["prefix_form"];?>item">
				<input type="tel" class="<?=$param["prefix_form"];?>control form-control validate[required,custom[phone]]" id="f[tel]" name="f[Телефон]" placeholder="Ваш номер телефона"> 
			</div>	
		</div>
		<div class="cols <?=$param["prefix_form"];?>cols">
			<div class="<?=$param["prefix_form"];?>item">
				<input type="text" class="<?=$param["prefix_form"];?>control form-control validate[required]" id="f[note]" name="f[Вопрос]" placeholder="Ваш комментарий"> 
			</div>	
		</div>
		<div class="cols <?=$param["prefix_form"];?>cols full material-cols">
			<div class="material-switch <?=$param["prefix_form"];?>item">
                <input class="material-switch__input validate[required]" id="f[processing]" name="f[processing]" type="checkbox" checked />
                <label for="f[processing]" class="material-switch__label">
                	<span class="material-switch__before">
                		<span class="material-switch__checkbox"></span>
                	</span>
                	<span class="material-switch__after"></span>
                </label>
				<label for="f[processing]" class="material-switch__text"> 
					Я согласен на обработку <a href="<?=l(13);?>">персональных данных</a>
				</label>
            </div>	
		</div>
		<div class="cols <?=$param["prefix_form"];?>cols">
			<div class="<?=$param["prefix_form"];?>btn-block">
				<button type="submit" class="btn-site btn-line btn-submit <?=$param["prefix_form"];?>btn">					
					<?=$param["btn_name_form"];?>
					<span class="top-line"></span>
					<span class="bottom-line"></span>
				</button>
			</div>	 
		</div>		
	</div>	
	<? if ($param["note_form"]){?>
	<div class="<?=$param["prefix_form"];?>note"><?=$param["note_form"];?></div>
	<?}?>	
</form>