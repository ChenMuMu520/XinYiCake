var oGoodList = $('.goods-list');
var oAddCart = $('.add-carts');
var ohide = $('.hide-content');
var oAddCartBtn = $('.add-cart-btn');
var addSuccess = $('.add-success');

var flag = false;
var flag2 = false;
oGoodList.on('click','.hide-content',function(){
		flag = true;
})

oGoodList.on('click','.add-success',function(){
		flag2 = true;
})

$(document).on('click',function(e){
	var e = e || window.event; //浏览器兼容性 
	var elem = $(e.target) || $(e.srcElement);
	
	var index = elem.parent().index();

	if(elem.is('.add-carts')){
		oGoodList.children().children('.hide-content').css({'display':'none','bottom':'-100%'});
		oGoodList.children('li').eq(index).children('.hide-content').css({'display':'block'}).animate({'bottom':'0'},'slow')
		addSuccess.css({'display':'none','bottom':'-100%'})
	}else if(flag){
		flag = false
	}else {
		if(flag2){
			flag2 = false;
		}else {
			addSuccess.css({'display':'none','bottom':'-100%'})	
		}
		oGoodList.children().children('.hide-content').css({'display':'none','bottom':'-100%'});
	}

})
	
ohide.on('click','li',function(){	
	var index = $(this).index()
	$(this).parent().children().eq(index).addClass('active').siblings().removeClass('active')
})

ohide.on('click','.add-cart-btn',function (){
	var index = $(this).parents('li').index()
	addSuccess.eq(index).css({'display':'block'}).animate({'bottom':'0'},'slow');
	ohide.css({'display':'none','bottom':'-100%'})
})