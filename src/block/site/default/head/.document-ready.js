$('img').addClass('img-responsive');
$('.text-block ul').addClass('ul-site');
$('.project-step-panel__item-note ul').addClass('ul-site');


$('.text-block table').addClass('table table-bordered');
$('.text-block .table.table-bordered').wrap('<div class="table-responsive"></div>'); 
$('.text-block img').parent().addClass('_tb__img'); 

$('._acb__item ul').addClass('ul-site');
$('blockquote').prepend('<span class="quotes before"><svg class="icon-svg icon-inst" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrows-prev"></use></svg>');
$('blockquote').append('<span class="quotes after"><svg class="icon-svg icon-inst" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrows-next"></use></svg>');