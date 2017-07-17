<?
/*
Для битрикса
*/
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true) {
	die();
}

IncludeTemplateLangFile(__FILE__);
CModule::IncludeModule('iblock');

$curPage = $APPLICATION->GetCurPage(true);

global $USER;

/*
if($curPage == '/news/detail.php') {
	$APPLICATION->SetPageProperty("title", 'test');
}
*/

?><!DOCTYPE html>
<html dir="ltr" lang="ru-RU"> 
<head>

<?
/*
echo SITE_TEMPLATE_PATH;
echo LANGUAGE_ID;
*/
?>

<meta charset="utf-8">	
<title><? $APPLICATION->ShowTitle();?></title>

<?
$APPLICATION->ShowMeta('robots', false, true);
$APPLICATION->ShowMeta('keywords', false, true);
$APPLICATION->ShowMeta('description', false, true);
?>

<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="apple-touch-icon" sizes="180x180" href="<?=SITE_TEMPLATE_PATH;?>/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="<?=SITE_TEMPLATE_PATH;?>/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="<?=SITE_TEMPLATE_PATH;?>/favicon/favicon-16x16.png">
<link rel="manifest" href="<?=SITE_TEMPLATE_PATH;?>/favicon/manifest.json">
<link rel="mask-icon" href="<?=SITE_TEMPLATE_PATH;?>/favicon/safari-pinned-tab.svg" color="#29497a">
<link rel="shortcut icon" href="<?=SITE_TEMPLATE_PATH;?>/favicon/favicon.ico">
<meta name="apple-mobile-web-app-title" content="klinika-dixion.ru">
<meta name="application-name" content="klinika-dixion.ru">
<meta name="msapplication-config" content="<?=SITE_TEMPLATE_PATH;?>/favicon/browserconfig.xml">
<meta name="theme-color" content="#ffffff">
<link href="<?=SITE_TEMPLATE_PATH;?>/css/site.css?v=201707171148" rel="stylesheet">

<!--
Стили и скрипты лучше размещать сюда
-->

<? $APPLICATION->ShowHead();?>

</head>
<body class=" <? if ($USER->IsAdmin()) {echo 'bitrix_is-admin';} else {echo '_preloading';}?> " >

<div id="panel" ><? $APPLICATION->ShowPanel();?></div>

<?

$APPLICATION->IncludeComponent(
	'dixion:tpl.nav',
	'',
	array(
		'CACHE_TIME' => '3600',
		'CACHE_TYPE' => 'A',
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
		'PATH' => SITE_TEMPLATE_PATH . '/tpl/_/header/' . LANGUAGE_ID . '.tpl.php',
		'EDIT_TEMPLATE' => '',
	),
false
);
*/