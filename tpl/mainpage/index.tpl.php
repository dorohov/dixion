<div class="header-index-block">
	<div class="_hib__inner">
		<div class="container _hib__container">
			<h1 class="_hib__heading">
				Реклама<br> на радио
			</h1>	
			<div id="carousel-header" class="carousel slide carousel-fade _hib__carousel" data-ride="carousel">
				<?
					/*
						в этот блок подгружаем страницы радиостанций.
						1) волну
						2) название
						3) ссылку на страницу
						4) логотип для слайдера

						сортируем в зависимости от выбранного города, пока что Орёл и Белгород
					*/
				?>
				<ol class="carousel-indicators _hib__carousel-indicators">
					<li 
						data-target="#carousel-header" 
						data-slide-to="0" 
						data-wave="<?/*волна*/?>"
						class="active"
					>
						<span><?/*название радиостанции*/?></span>
					</li>
				</ol>
				<div class="carousel-inner _hib__carousel-inner">
					<div class="item active _hib__carousel-item">
						<a href="<?/*ссылка на страницу радиостанции*/?>"><img src="<?/*логотип для слайдера*/?>" alt=""></a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="_hib__bg" style="background-image: url(<?=get_field('bg-header', 1);?>);"></div> 	
</div>
<div class="clients-index-block">
	<div class="_cib__inner">
		<div class="container _cib__container">
			<h2 class="_cib__heading index-header-block">Нам доверяют</h2>
			<div class="_cib__owl">
				<?
					/*
						в этот блок подгружаем картинки клиентов с помощью "взаимоотношения" на главной странице
					*/
				?>
				<div class="_cib__owl-item">
					<img src="/img/index/clients-item1.png" alt="">
				</div>
				<div class="_cib__owl-item">
					<img src="/img/index/clients-item2.png" alt="">
				</div>
				<div class="_cib__owl-item">
					<img src="/img/index/clients-item3.png" alt="">
				</div>
				<div class="_cib__owl-item">
					<img src="/img/index/clients-item4.png" alt="">
				</div>
				<div class="_cib__owl-item">
					<img src="/img/index/clients-item5.png" alt="">
				</div>
				<div class="_cib__owl-item">
					<img src="/img/index/clients-item6.png" alt="">
				</div>
				<div class="_cib__owl-item">
					<img src="/img/index/clients-item7.png" alt="">
				</div>
				<div class="_cib__owl-item">
					<img src="/img/index/clients-item8.png" alt="">
				</div>
				<div class="_cib__owl-item">
					<img src="/img/index/clients-item9.png" alt="">
				</div>
				<div class="_cib__owl-item">
					<img src="/img/index/clients-item10.png" alt="">
				</div>
				<div class="_cib__owl-item">
					<img src="/img/index/clients-item13.png" alt="">
				</div>
				<div class="_cib__owl-item">
					<img src="/img/index/clients-item11.png" alt="">
				</div>
				<div class="_cib__owl-item">
					<img src="/img/index/clients-item12.png" alt="">
				</div>
			</div>	
		</div>
	</div>
</div>
<div class="news-index-block">
	<div class="container _nib__container">
		<h2 class="_nib__heading index-header-block">Новости</h2>
		<div class="_nib__inner">
			<?
				/*
					сюда подгружаем 2 последние новости.
					Выводим:
						1) Дату
						2) Заголовок
						3) Короткое описание
						4) Превью
						5) Ссылку
						6) Логотип радиостанции, к которому относиться новость (логотипы должны автоматом создаваться из одного логотипа, который заливается на страницу конкретной радиостанции)
				*/
				/*
					для первой новости меняем значение $news_class
					$news_class = "news-item right";
					для второй новости
					$news_class = "news-item left";
				*/
				$news_class = "news-item right";
				$news_block = "news__";
				$prefix_block = "_nih__"
				/*
					для первой новости меняем значение $news_preview_line
					$news_preview_line="line-top";
					для второй новости
					$news_preview_line="line-bottom";
				*/
				$news_preview_line="line-top";

				/* этот шаблон можно использовать на странице новости с параметрами

				$news_class = "news-item right"
				$news_block = "news__"
				$prefix_block = "_np__"
				$news_preview_line = "line-top"

				*/
			?>
			<article class="<?=$news_class;?>">
				<div class="row <?=$news_block;?>row">
					<div class="cols <?=$news_block;?>left-cols <?=$prefix_block;?>news-left-cols">
						<a href="{{news_link}}" class="<?=$news_block;?>preview">
							<img src="{{url-path-img}}{{news_preview}}" alt="">
							<span class="<?=$news_block;?>preview-line <?=$prefix_block;?>news-preview-line">
								<svg class="icon-svg icon-{{news_preview_line}}" role="img">
									<use xlink:href="{{url-path-img}}/svg/sprite.svg#{{news_preview_line}}"></use>
								</svg>
							</span>
							<div class="<?=$news_block;?>preview-wave <?=$prefix_block;?>news-preview-wave"><img src="{{url-path-img}}/default/{{news_wave}}" alt=""></div>
						</a>
					</div>
					<div class="cols <?=$news_block;?>right-cols <?=$prefix_block;?>news-right-cols">
						<div class="<?=$news_block;?>inner <?=$prefix_block;?>news-inner">
							<div class="<?=$news_block;?>date <?=$prefix_block;?>news-date">{{news_date}}</div>
							<h4 class="<?=$news_block;?>heading <?=$prefix_block;?>news-heading"><a href="{{news_link}}">{{news_heading}}</a></h4>
							<div class="<?=$news_block;?>note <?=$prefix_block;?>news-note">{{news_note}}</div>
							<div class="row <?=$news_block;?>row-inner <?=$prefix_block;?>news-row-inner">
								<div class="cols <?=$news_block;?>cols-link <?=$prefix_block;?>news-cols-link">
									<a href="{{news_link}}" class="<?=$news_block;?>next">
										читать далее
										<span>
										<svg class="icon-svg icon-arrows-next" role="img">
											<use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#arrows-next"></use>
										</svg></span>
									</a>
								</div>
								<div class="cols <?=$news_block;?>cols-wave <?=$prefix_block;?>news-cols-wave">
									<img src="{{url-path-img}}/default/{{news_wave}}" alt="">
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</article> 
		</div>
		<div class="_nib__btn-block">
			<a href="<?=l(4);?>" class="btn-site btn-line btn-news-all">
				Все новости
				<span class="top-line"></span>
				<span class="bottom-line"></span>
			</a>
		</div>
	</div>
</div>
<?	
	$this->tpl(
		'contacts/block', 
		array(
			"class"=>"contacts-block-index",
			"prefix_block" => "_cnp__",
		)
	);
?>