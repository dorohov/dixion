"use strict";function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},"md-h":{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]},xl:{default:[],portrait:[],landscape:[]},device:{default:[],portrait:[],landscape:[]},xxl:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w>767&&e.screen.w<1025},e.isMD=function(){return e.screen.w>1024&&e.screen.w<1200},e.isMDH=function(){return e.screen.w>1024&&e.screen.w<1281&&e.screen.h>909},e.isLG=function(){return e.screen.w>1199&&e.screen.w<1400},e.isXL=function(){return e.screen.w>1399&&e.screen.w<1681},e.isXXL=function(){return e.screen.w>1680},e.device=function(){return e.screen.w<1010},e.screenIs=function(){var n="noname";return e.isXS()?n="xs":e.isSM()?n="sm":e.isMD()?n="md":e.isMDH()?n="md-h":e.isLG()?n="lg":e.isXL()?n="xl":e.isXXL()?n="xxl":e.device()&&(n="device"),n},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var n="noname";return e.isPortrait()?n="portrait":e.isLandscape()&&(n="landscape"),n},e.is=function(n){return n==e.screenIs()||n==e.orientationIs()},e.onResize=function(n,s){if(n.type){var i=e.__resizefunctions[n.type];n.orientation?i[n.orientation].push(s):i.default.push(s)}},e.resizeCall=function(n){if(n.type){if(e.__resizefunctions[n.type].default)for(var s=0;s<e.__resizefunctions[n.type].default.length;s++){var i=e.__resizefunctions[n.type].default[s];i(n)}if(e.__resizefunctions[n.type][n.orientation])for(var s=0;s<e.__resizefunctions[n.type][n.orientation].length;s++){var i=e.__resizefunctions[n.type][n.orientation][s];i(n)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}window.onerror=function(e,n,s,i,o){console.log("Error FECSS: "+n+":"+s+":"+i+": "+JSON.stringify(e)+"\n"+JSON.stringify(o))};var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var n=jQuery.fn.addClass,s=jQuery.fn.removeClass,i=jQuery.fn.toggleClass;e.fn.addClass=function(){var s=n.apply(this,arguments);return e(this).trigger("changeClass",["add"]),s},e.fn.removeClass=function(){var n=s.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),n},e.fn.toggleClass=function(){var n=i.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),n}}(jQuery),$(window).on("load",function(){$(document.body).find(".azbn7-preloader").data("is_loaded",!0)}),!function(){$(window).on("load",function(){var e=$(".navbar__hamburger-btn").data("toggle-nav"),n=$(".navbar__hamburger-btn").data("body"),s=$(".navbar__hamburger-btn").data("collapse-nav");$(".navbar__hamburger-btn").on("click",function(){$(n).toggleClass("is--open-navbar"),$(e).toggleClass("is--open"),$(s).toggleClass("is--open"),$(this).toggleClass("is--active")}),$(document.body).on("click",function(i){0==$(i.target).closest(".navbar").length&&($(n).removeClass("is--open-navbar"),$(e).removeClass("is--open"),$(s).removeClass("is--open"),$(".navbar__hamburger-btn").removeClass("is--active"))})})}(),$(function(){$(document.body).on("fecss.default",null,{},function(e){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(e){console.log("body trigger:fecss.init");var n=(new Date).getTime();$(document.body).attr("data-created_at",n)}),$(document.body).on("fecss.window.unload",null,{},function(e,n){console.log("body trigger:fecss.window.unload: "+JSON.stringify(n))}),$(document.body).on("fecss.ajax.success",null,{},function(e){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(e,n){console.log("body trigger:fecss.keydown: "+JSON.stringify(n))}),$(document.body).on("DOMSubtreeModified",null,{},function(e,n){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(e){-e.originalEvent.deltaY||e.originalEvent.detail||e.originalEvent.wheelDelta}),$(document.body).on("changeClass",null,{},function(e,n){$(function(){})}),$(function(){var e="noname-browser",n=navigator.userAgent.toLowerCase();n.indexOf("msie")!=-1&&(e="msie"),n.indexOf("trident")!=-1&&(e="msie"),n.indexOf("konqueror")!=-1&&(e="konqueror"),n.indexOf("firefox")!=-1&&(e="firefox"),n.indexOf("safari")!=-1&&(e="safari"),n.indexOf("chrome")!=-1&&(e="chrome"),n.indexOf("chromium")!=-1&&(e="chromium"),n.indexOf("opera")!=-1&&(e="opera"),n.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){}),$(document.body).on("click.fecss.go-to-top",".go-to-top",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},777)}),$(".banner__carousel").carousel({interval:4e3,pause:"none"}),$(".banner__carousel .banner__carousel-item").eq(0).addClass("active"),$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site"),$(".project-step-panel__item-note ul").addClass("ul-site"),$(".text-block table").addClass("table table-bordered"),$(".text-block .table.table-bordered").wrap('<div class="table-responsive"></div>'),$(".text-block img").parent().addClass("_tb__img"),$("._acb__item ul").addClass("ul-site"),$("blockquote").prepend('<span class="quotes before"><svg class="icon-svg icon-inst" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrows-prev"></use></svg>'),$("blockquote").append('<span class="quotes after"><svg class="icon-svg icon-inst" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrows-next"></use></svg>');var e=window.location.pathname;$('.navbar__nav a[href="'+e+'"]').parent().addClass("is--active"),$('.navbar__nav-dropdown-menu a[href="'+e+'"]').parent().addClass("is--active"),$(".news-item__inner").on("mouseover",function(){$(this).toggleClass("is--hover")}),$(".news-item__inner").on("mouseout",function(){$(this).toggleClass("is--hover")}),!function(){$(document.body).on("click",".price-list__nav li a",{},function(e){var n=$(this),s=n.attr("data-category-tree")||"";""!=s&&$('.price-list__nav_azbn[data-category-tree="'+s+'"]').toggleClass("is--active")}),$(".price-list__nav_azbn li.is--active").length&&$(".price-list__nav_azbn li.is--active").closest(".price-list__nav_azbn").addClass("is--active")}(),$(".specialists-item__item").on("mouseover",function(){$(this).toggleClass("is--hover")}),$(".specialists-item__item").on("mouseout",function(){$(this).toggleClass("is--hover")}),!function(){$(document.body).on("click",".price-list-block__item-link",null,function(e){$(".price-list-block__item-list.active").removeClass("active")})}();var e=window.location.pathname;$('._trp__navbar a[href="'+e+'"]').parent().addClass("is--active"),!function(){var e=$(document.body).find(".azbn7-preloader");if(e.length){var n=!1,s=0,i=e.find(".azbn7-preloader__percent-level"),o=e.find(".azbn7-preloader__percent__value");$(document.body).on("azbn7.preloader.check",null,{},function(e){e.preventDefault(),n&&($(document.body).removeClass("_preloading"),$(window).trigger("resize"))}),$(document.body).on("azbn7.preloader.loaded",null,{},function(n){n.preventDefault(),e.data("is_loaded",!0),$(document.body).trigger("azbn7.preloader.check")}),$(document.body).on("click.azbn7.preloader.cancel-btn",".azbn7-preloader .azbn7-preloader__cancel-btn",{},function(s){s.preventDefault(),e.data("is_loaded",!0),n=!0,$(document.body).trigger("azbn7.preloader.check")});var t=setInterval(function(){var a=Math.random();a>.35&&s<100?(s++,i.css({width:s+"%"}),o.html(s),e.data("is_loaded")&&(s+=7)):s>99&&(clearInterval(t),n=!0,$(document.body).trigger("azbn7.preloader.check"))},33)}else $(document.body).removeClass("_preloading")}(),$(window).on("resize",function(e){$(function(){var e={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},n={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},s="window-width",i="window-height",o=$(window).outerWidth(!0),t=$(window).outerHeight(!0),a=$("html body").eq(0);o<e.xs.max&&(a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),s="window-width-xs"),o>e.sm.min&&o<e.sm.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),s="window-width-sm"),o>e.md.min&&o<e.md.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),s="window-width-md"),o>e.lg.min&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),s="window-width-lg"),t<n.xs.max&&(a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),i="window-height-xs"),t>n.sm.min&&t<n.sm.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),i="window-height-sm"),t>n.md.min&&t<n.md.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),i="window-height-md"),t>n.lg.min&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),i="window-height-lg"),$("html body").eq(0).addClass(s).addClass(i)})}).trigger("resize"),$(window).on("scroll",function(e){$(function(){var e=$(document).scrollTop(),n=$(".go-to-top");n.hasClass("active")?e<200&&n.removeClass("active"):e>200&&n.addClass("active")});var n=$(document).scrollTop(),s=$(".navbar-site.scroll");s.hasClass("scroll-navbar")?n<=500&&s.removeClass("scroll-navbar"):n>500&&s.addClass("scroll-navbar"),s.hasClass("opacity")?n<=200&&s.removeClass("opacity"):n>200&&s.addClass("opacity"),s.hasClass("fixed")?n<=400&&s.removeClass("fixed"):n>400&&s.addClass("fixed")}).trigger("scroll"),window.onbeforeunload=function(e){$("body").trigger("fecss.window.unload",[e])},$(document.body).trigger("fecss.init")});