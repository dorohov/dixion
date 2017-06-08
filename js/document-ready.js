"use strict";function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},"md-h":{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]},xl:{default:[],portrait:[],landscape:[]},device:{default:[],portrait:[],landscape:[]},xxl:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w>767&&e.screen.w<1025},e.isMD=function(){return e.screen.w>1024&&e.screen.w<1200},e.isMDH=function(){return e.screen.w>1024&&e.screen.w<1281&&e.screen.h>909},e.isLG=function(){return e.screen.w>1199&&e.screen.w<1400},e.isXL=function(){return e.screen.w>1399&&e.screen.w<1681},e.isXXL=function(){return e.screen.w>1680},e.device=function(){return e.screen.w<1010},e.screenIs=function(){var s="noname";return e.isXS()?s="xs":e.isSM()?s="sm":e.isMD()?s="md":e.isMDH()?s="md-h":e.isLG()?s="lg":e.isXL()?s="xl":e.isXXL()?s="xxl":e.device()&&(s="device"),s},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var s="noname";return e.isPortrait()?s="portrait":e.isLandscape()&&(s="landscape"),s},e.is=function(s){return s==e.screenIs()||s==e.orientationIs()},e.onResize=function(s,n){if(s.type){var i=e.__resizefunctions[s.type];s.orientation?i[s.orientation].push(n):i.default.push(n)}},e.resizeCall=function(s){if(s.type){if(e.__resizefunctions[s.type].default)for(var n=0;n<e.__resizefunctions[s.type].default.length;n++){var i=e.__resizefunctions[s.type].default[n];i(s)}if(e.__resizefunctions[s.type][s.orientation])for(var n=0;n<e.__resizefunctions[s.type][s.orientation].length;n++){var i=e.__resizefunctions[s.type][s.orientation][n];i(s)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}window.onerror=function(e,s,n,i,o){console.log("Error FECSS: "+s+":"+n+":"+i+": "+JSON.stringify(e)+"\n"+JSON.stringify(o))};var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var s=jQuery.fn.addClass,n=jQuery.fn.removeClass,i=jQuery.fn.toggleClass;e.fn.addClass=function(){var n=s.apply(this,arguments);return e(this).trigger("changeClass",["add"]),n},e.fn.removeClass=function(){var s=n.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),s},e.fn.toggleClass=function(){var s=i.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),s}}(jQuery),!function(){$(window).on("load",function(){var e=$(".navbar__hamburger-btn").data("toggle-nav"),s=$(".navbar__hamburger-btn").data("body"),n=$(".navbar__hamburger-btn").data("collapse-nav");$(".navbar__hamburger-btn").on("click",function(){$(s).toggleClass("is--open-navbar"),$(e).toggleClass("is--open"),$(n).toggleClass("is--open"),$(this).toggleClass("is--active")}),$(document.body).on("click",function(i){0==$(i.target).closest(".navbar").length&&($(s).removeClass("is--open-navbar"),$(e).removeClass("is--open"),$(n).removeClass("is--open"),$(".navbar__hamburger-btn").removeClass("is--active"))})})}(),$(function(){$(document.body).on("fecss.default",null,{},function(e){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(e){console.log("body trigger:fecss.init");var s=(new Date).getTime();$(document.body).attr("data-created_at",s)}),$(document.body).on("fecss.window.unload",null,{},function(e,s){console.log("body trigger:fecss.window.unload: "+JSON.stringify(s))}),$(document.body).on("fecss.ajax.success",null,{},function(e){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(e,s){console.log("body trigger:fecss.keydown: "+JSON.stringify(s))}),$(document.body).on("DOMSubtreeModified",null,{},function(e,s){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(e){-e.originalEvent.deltaY||e.originalEvent.detail||e.originalEvent.wheelDelta}),$(document.body).on("changeClass",null,{},function(e,s){$(function(){})}),$(function(){var e="noname-browser",s=navigator.userAgent.toLowerCase();s.indexOf("msie")!=-1&&(e="msie"),s.indexOf("trident")!=-1&&(e="msie"),s.indexOf("konqueror")!=-1&&(e="konqueror"),s.indexOf("firefox")!=-1&&(e="firefox"),s.indexOf("safari")!=-1&&(e="safari"),s.indexOf("chrome")!=-1&&(e="chrome"),s.indexOf("chromium")!=-1&&(e="chromium"),s.indexOf("opera")!=-1&&(e="opera"),s.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});var e=window.location.pathname;$('._trp__navbar a[href="'+e+'"]').parent().addClass("is--active"),$(".banner__carousel").carousel({interval:4e3,pause:"none"}),$(".banner__carousel .banner__carousel-item").eq(0).addClass("active"),$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site"),$(".project-step-panel__item-note ul").addClass("ul-site"),$(".text-block table").addClass("table table-bordered"),$(".text-block .table.table-bordered").wrap('<div class="table-responsive"></div>'),$(".text-block img").parent().addClass("_tb__img"),$("._acb__item ul").addClass("ul-site"),$("blockquote").prepend('<span class="quotes before"><svg class="icon-svg icon-inst" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrows-prev"></use></svg>'),$("blockquote").append('<span class="quotes after"><svg class="icon-svg icon-inst" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrows-next"></use></svg>');var e=window.location.pathname;$('.navbar__nav a[href="'+e+'"]').parent().addClass("is--active"),$('.navbar__nav-dropdown-menu a[href="'+e+'"]').parent().addClass("is--active"),$(".news-item__inner").on("mouseover",function(){$(this).toggleClass("is--hover")}),$(".news-item__inner").on("mouseout",function(){$(this).toggleClass("is--hover")}),$(".specialists-item__item").on("mouseover",function(){$(this).toggleClass("is--hover")}),$(".specialists-item__item").on("mouseout",function(){$(this).toggleClass("is--hover")}),$(window).on("resize",function(e){$(function(){var e={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},s={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},n="window-width",i="window-height",o=$(window).outerWidth(!0),t=$(window).outerHeight(!0),a=$("html body").eq(0);o<e.xs.max&&(a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),n="window-width-xs"),o>e.sm.min&&o<e.sm.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),n="window-width-sm"),o>e.md.min&&o<e.md.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),n="window-width-md"),o>e.lg.min&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),n="window-width-lg"),t<s.xs.max&&(a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),i="window-height-xs"),t>s.sm.min&&t<s.sm.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),i="window-height-sm"),t>s.md.min&&t<s.md.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),i="window-height-md"),t>s.lg.min&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),i="window-height-lg"),$("html body").eq(0).addClass(n).addClass(i)})}).trigger("resize"),$(window).on("scroll",function(e){var s=$(document).scrollTop(),n=$(".navbar-site.scroll");n.hasClass("scroll-navbar")?s<=500&&n.removeClass("scroll-navbar"):s>500&&n.addClass("scroll-navbar"),n.hasClass("opacity")?s<=200&&n.removeClass("opacity"):s>200&&n.addClass("opacity"),n.hasClass("fixed")?s<=400&&n.removeClass("fixed"):s>400&&n.addClass("fixed")}).trigger("scroll"),window.onbeforeunload=function(e){$("body").trigger("fecss.window.unload",[e])},$(document.body).trigger("fecss.init")});