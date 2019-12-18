window.onload = function() {
	var btn = document.querySelectorAll('.per-left-list>ul>li');
	var pag = document.querySelectorAll('.per-wap-right>div');



	for (var i = 0; i < btn.length; i++) {
		btn[i].index = i;
		btn[i].onclick = function() {
			for (var j = 0; j < btn.length; j++) {
				btn[j].style.background = 'none';
				pag[j].style.display = 'none';
				// pag[0].style.display='none';
			}
			// this.className = 'active';
			pag[this.index].style.display = 'block';
			btn[this.index].style.background = '#F8F8F8';
		}
	}

	var aad = document.getElementById('add-address');
	var adp = document.getElementById('add-address-page');
	aad.onclick = function() {
		adp.style.display = 'block';
	}

	//用于心愿单取消收藏
	var mWL1 = document.getElementById('myWishList1');
	var mWL2 = document.getElementById('myWishList2');
	var mWL3 = document.getElementById('myWishList3');
	var mWL_i1 = document.getElementById('myWishList-iconHeart1');
	var mWL_i2 = document.getElementById('myWishList-iconHeart2');
	var mWL_i3 = document.getElementById('myWishList-iconHeart3');

	// 用于关注取消
	var mF1 = document.getElementById('myFollow1');
	var mF2 = document.getElementById('myFollow2');
	var mF3 = document.getElementById('myFollow3');
	var cFB1 = document.getElementById('chooseFollowBox1');
	var cFB2 = document.getElementById('chooseFollowBox2');
	var cFB3 = document.getElementById('chooseFollowBox3');
	// 取消心愿单
	mWL_i1.onclick = function() {
		mWL1.style.display = "none";
	}
	mWL_i2.onclick = function() {
		mWL2.style.display = "none";
	}
	mWL_i3.onclick = function() {
		mWL3.style.display = "none";
	}


	// 取消关注
	cFB1.onclick = function() {
		mF1.style.display = "none";
	}
	cFB2.onclick = function() {
		mF2.style.display = "none";
	}
	cFB3.onclick = function() {
		mF3.style.display = "none";
	}

	var aaqx = document.getElementById('add-address-quxiao');
	var aaqd = document.getElementById('add-address-queding');

	aaqx.onclick = function() {
		adp.style.display = 'none';
	}
	aaqd.onclick = function() {
		adp.style.display = 'none';
	}

	// 修改个人资料
	var rp = document.getElementById('re-per');
	var pr = document.getElementById('personal-repear');
	var bt = document.getElementById('back-bt')

	rp.onclick = function() {
		pr.style.display = 'block';
	}
	bt.onclick = function() {
		pr.style.display = 'none'
	}
	var check_bt = $(".check-repear>ul>li");
	var form_type = $(".repear>form");
	var index_c = 0;

	check_bt.on("click", function() {
		for (i = 0; i < check_bt.length; i++) {
			check_bt.eq(i).removeClass("c-hover");
		}
		for (j = 0; j < form_type.length; j++) {
			form_type.eq(j).removeClass("reactive");
		}
		$(this).addClass("c-hover");
		index_c = $(this).index();
		form_type.eq(index_c).addClass("reactive");
	});

}
