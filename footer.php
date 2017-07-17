<?
/*
Для битрикса
*/

IncludeTemplateLangFile(__FILE__);

if(defined('ERROR_404') && ERROR_404 == 'Y' && $APPLICATION->GetCurPage(true) != '/404.php') {
	LocalRedirect('/404.php');
}
/*
if($curPage == '/contacts/index.php' || $curPage == '/en/contacts/index.php') {
	
}
*/

?>


<?

$APPLICATION->IncludeComponent(
	'dixion:tpl.footer',
	'',
	array(
		'CACHE_TIME' => '3600',
		'CACHE_TYPE' => 'A',
		//'CONTACTS_ADR1' => '<span>г.Город 1</span>, ул.Улица 1, д.1',
		//'CONTACTS_ADR2' => '<span>г. Орел</span>, ул.Улица 2, д.2',
	),
	null,
	array(
		'HIDE_ICONS' => 'Y',
	)
);

/*
$APPLICATION->IncludeComponent(
	'bitrix:main.include',
	'',
	Array(
		'AREA_FILE_SHOW' => 'file',
		'PATH' => SITE_TEMPLATE_PATH . '/tpl/_/footer/' . LANGUAGE_ID . '.tpl.php',
		'EDIT_TEMPLATE' => '',
	),
false
);
*/

?>

<!--
<script src="<?=SITE_TEMPLATE_PATH;?>/js/jquery.min.js" ></script>
-->

</body>
</html>