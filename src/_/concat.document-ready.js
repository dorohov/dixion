$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$(document.body).on("click.fecss.go-to-top",".go-to-top",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},777)});
$(".banner__carousel").carousel({interval:4e3,pause:"none"}),$(".banner__carousel .banner__carousel-item").eq(0).addClass("active");
$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site"),$(".project-step-panel__item-note ul").addClass("ul-site"),$(".text-block table").addClass("table table-bordered"),$(".text-block .table.table-bordered").wrap('<div class="table-responsive"></div>'),$(".text-block img").parent().addClass("_tb__img"),$("._acb__item ul").addClass("ul-site"),$("blockquote").prepend('<span class="quotes before"><svg class="icon-svg icon-inst" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrows-prev"></use></svg>'),$("blockquote").append('<span class="quotes after"><svg class="icon-svg icon-inst" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrows-next"></use></svg>');
var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.navbar__nav-dropdown-menu a[href="'+url+'"]').parent().addClass("is--active");
$(".news-item__inner").on("mouseover",function(){$(this).toggleClass("is--hover")}),$(".news-item__inner").on("mouseout",function(){$(this).toggleClass("is--hover")});
!function(){$(document.body).on("click",".price-list__nav li a",{},function(a){var i=$(this),t=i.attr("data-category-tree")||"";""!=t&&$('.price-list__nav_azbn[data-category-tree="'+t+'"]').toggleClass("is--active")}),$(".price-list__nav_azbn li.is--active").length&&$(".price-list__nav_azbn li.is--active").closest(".price-list__nav_azbn").addClass("is--active")}();
$(".specialists-item__item").on("mouseover",function(){$(this).toggleClass("is--hover")}),$(".specialists-item__item").on("mouseout",function(){$(this).toggleClass("is--hover")});
!function(){$(document.body).on("click",".price-list-block__item-link",null,function(i){$(".price-list-block__item-list.active").removeClass("active")})}();
var url=window.location.pathname;$('._trp__navbar a[href="'+url+'"]').parent().addClass("is--active");