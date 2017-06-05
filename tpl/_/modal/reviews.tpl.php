<?	
	/*$this->tpl(
		'_/modal/message', 
		array(
			"class_modals"=>"modal-reviews",
			"prefix_modals" => "modal-reviews__"
		)
	);*/
?>
<div class="modal fade <?=$param["class_modals"];?>" id="modal-ad-reviews" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog <?=$param["prefix_modals"];?>dialog">
		<div class="modal-body <?=$param["prefix_modals"];?>body" >
			<button type="button" class="btn-site btn-close modal-close" data-dismiss="modal" aria-hidden="true">				
				<svg class="icon-svg icon-cancel" role="img">
					<use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#cancel"></use>
				</svg>
			</button>
			<div class="modal-content <?=$param["prefix_modals"];?>content">
				<?
					$this->tpl(
						'_/form/fio-tel-email', 
						array(
							"class_form"=>"block",
							"prefix_form" => "form__",
							"heading_form" => "Заказать рекламу",
							"note_form" => "Наш менеджер скоро свяжется с вами.",
							"btn_name_form" => "Отправить заявку"
						)
					);
				?>
			</div> 
		</div>
	</div>
</div>