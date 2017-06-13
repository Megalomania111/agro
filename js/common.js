// банер на главной
jQuery(document).ready(function(){
	if (jQuery(".banner_main").length){
	jQuery('.banner_main').owlCarousel({
		loop:true,
		margin:0,
		items:1
	});
	}
});	



jQuery(document).ready(function(){

	// шапка. выбор города
	jQuery('.town_link').click(function() {
		jQuery(".choose_town_link .choose_town_block").toggleClass("active");
	});
	jQuery('.choose_town_link .choose_town_block button').click(function() {
		jQuery(".choose_town_link .choose_town_block").toggleClass("active");
	});
	// jQuery(document).click(function(event) {
	//      if (!jQuery(event.target).closest(jQuery(".choose_town_block")).length){
	//       jQuery(".choose_town_block").removeClass('active');
	//      }
	//      event.stopPropagation();
	//  });


	// шапка. поиск товара
	jQuery( ".search_form input" ).focus(function() {
		jQuery(".searchlist").addClass("active");
	});
	jQuery( ".search_form input" ).blur(function() {
		jQuery(".searchlist").removeClass("active");

	});

	// шапка открытая корзина
	jQuery('.privateroom__phone .basket').click(function() {
		jQuery(".openkorzina").toggleClass("active");
	});

	// мой аккаунт форма
	jQuery('.myaccount a').click(function() {
		jQuery(".myacc").toggleClass("active");
	});

	// Меню на главной/ адаптивное меню
	jQuery(".media_menu button").click(function() {
		jQuery(".media_menu button").toggleClass("active");
		jQuery(".adaptive_menu").toggleClass( "active");
		jQuery(".adaptive_menu_block").toggleClass( "active");
		jQuery("html, css").toggleClass("toggle_overflow");

	});

});




// страница коризина.  +\-
jQuery(document).ready(function(){
	jQuery('.quont-minus').click(function () {
		var $input = jQuery(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	jQuery('.quont-plus').click(function () {
		var $input = jQuery(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});


	
// формы
jQuery(document).ready(function(){
	// Заказать обратный звонок
	jQuery(".popap_call-submit").click(function() {
		var name = jQuery('#popap_call_name').val();
		var tel = jQuery('#popap_call_tel').val();

		validName = name != "";
		if(!validName) {
			jQuery('#popap_call_name').addClass("inp_valid");
			jQuery(".popap_call .error-name").removeClass("hidden");
		} else {
			jQuery('#popap_call_name').removeClass("inp_valid");
			jQuery(".popap_call .error-name").addClass("hidden");
		}

		validTel = tel != "";
		if(!validTel) {
			jQuery('#popap_call_tel').addClass("inp_valid");
			jQuery(".popap_call .error-tel").removeClass("hidden");
		} else {
			jQuery('#popap_call_tel').removeClass("inp_valid");
			jQuery(".popap_call .error-tel").addClass("hidden");
		}
	});


	// Восстановление пароля
	jQuery(".popap_vostanovl-submit").click(function() {
		var mail = jQuery('#popap_vostanovl_mail').val();

		validMail = mail != "";
		if(!validMail) {
			jQuery('#popap_vostanovl_mail').addClass("inp_valid");
			jQuery(".popap_vostanovl .error-mail").removeClass("hidden");
		} else {
			jQuery('#popap_vostanovl_mail').removeClass("inp_valid");
			jQuery(".popap_vostanovl .error-mail").addClass("hidden");
		}
	});


	// Вход в личный кабинет
	jQuery(".popap_entrance-submit").click(function() {
		var mail = jQuery('#popap_entrance_mail').val();
		var password = jQuery('#popap_entrance_password').val();

		validMail = mail != "";
		if(!validMail) {
			jQuery('#popap_entrance_mail').addClass("inp_valid");
			jQuery(".popap_entrance .error-mail").removeClass("hidden");
		} else {
			jQuery('#popap_entrance_mail').removeClass("inp_valid");
			jQuery(".popap_entrance .error-mail").addClass("hidden");
		}

		validPassword = password != "";
		if(!validPassword) {
			jQuery('#popap_entrance_password').addClass("inp_valid");
			jQuery(".popap_entrance .error-password").removeClass("hidden");
		} else {
			jQuery('#popap_entrance_password').removeClass("inp_valid");
			jQuery(".popap_entrance .error-password").addClass("hidden");
		}
	});


	// Создание аккаунта
	jQuery(".popap_regist-submit").click(function() {
		var name = jQuery('#popap_regist_name').val();
		var mail = jQuery('#popap_regist_mail').val();
		var password = jQuery('#popap_regist_password').val();
		var verpassword = jQuery('#popap_regist_verification_password').val();

		validName = name != "";
		if(!validName) {
			jQuery('#popap_regist_name').addClass("inp_valid");
			jQuery(".popap_regist .error-name").removeClass("hidden");
		} else {
			jQuery('#popap_regist_name').removeClass("inp_valid");
			jQuery(".popap_regist .error-name").addClass("hidden");
		}

		validMail = mail != "";
		if(!validMail) {
			jQuery('#popap_regist_mail').addClass("inp_valid");
			jQuery(".popap_regist .error-mail").removeClass("hidden");
		} else {
			jQuery('#popap_regist_mail').removeClass("inp_valid");
			jQuery(".popap_regist .error-mail").addClass("hidden");
		}

		validPassword = password != "";
		if(!validPassword) {
			jQuery('#popap_regist_password').addClass("inp_valid");
			jQuery(".popap_regist .error-password").removeClass("hidden");
		} else {
			jQuery('#popap_regist_password').removeClass("inp_valid");
			jQuery(".popap_regist .error-password").addClass("hidden");
		}

		validVerPassword = verpassword != "";
		if(!validVerPassword) {
			jQuery('#popap_regist_verification_password').addClass("inp_valid");
			jQuery(".popap_regist .error-verification_password").removeClass("hidden");
		} else {
			jQuery('#popap_regist_verification_password').removeClass("inp_valid");
			jQuery(".popap_regist .error-verification_password").addClass("hidden");
		}
	});

});
jQuery(document).ready(function(){
// вызов селектов каталога
	if (jQuery("#popap_call_tel").length){
	jQuery('#popap_call_tel').mask("+380 (99) 999-99-99");
	}
});	










// каталог
jQuery(document).ready(function(){
	// сбросить все галочки
	jQuery('.sbros_filtr').on('click', function() {
		jQuery('.filtr input[type="checkbox"]').prop('checked',false);
	});


	// сортировка выдачи товара (блочно/линиями)
	jQuery('.displaying_icons_block').click(function() {
		jQuery(".card").removeClass("card_mini");
		jQuery(this).addClass("active");
		jQuery(".displaying_icons_line").removeClass("active");
	});
	jQuery('.displaying_icons_line').click(function() {
		jQuery(".card").addClass("card_mini");
		jQuery(this).addClass("active");
		jQuery(".displaying_icons_block").removeClass("active");
	});


	// удалить фильтр
	jQuery('.navigation_sort_link div').click(function() {
		jQuery(this).parent().parent().remove();
	});


jQuery(document).ready(function(){
// вызов селектов каталога
	if (jQuery("#html5").length){
	//каталог. ползунок
	var html5Slider = document.getElementById('html5');
	noUiSlider.create(html5Slider, {
		start: [ 69, 25600 ],
		connect: true,
		range: {
			'min': 69,
			'max': 25600
		}
	});
	var inputNumber = document.getElementById('input-number');
	var inputNumber2 = document.getElementById('input-number2');
	html5Slider.noUiSlider.on('update', function( values, handle ) {
		var value = values[handle];
		if ( handle ) {
			$("#input-number").val(Math.round(value));
		} else {
			$("#input-number2").val(Math.round(value));
		}
	});

	inputNumber2.addEventListener('change', function(){
		html5Slider.noUiSlider.set([this.value, null]);
	});

	inputNumber.addEventListener('change', function(){
		html5Slider.noUiSlider.set([null, this.value]);
	});
	}
});	


	




	// каталог
	$(".filtr_tovarov_button").click(function(){
		$(".filtr").addClass("active");
		$(".filtr_tovarov_button").addClass("active");

	});
	$("a.close_filtr").click(function(){
		$(".filtr").removeClass("active");
		$(".filtr_tovarov_button").removeClass("active");
	});


	// // вызов селектов каталога
	// $(".chosen-select").chosen();
	// $(".chosen-select").chosen({no_results_text: "Неправильный запрос."}); 

});





// мой акк
jQuery(document).ready(function(){
// страница acc. открытие формы редактирование личной информации
	jQuery('.edit_private_link').on("click", function() {
		jQuery(".myacc_page_block").addClass("switching");
		jQuery(".edit_private").addClass("active");
		jQuery(this).remove();
	});


	// безналичный расчет
	jQuery('.formalization_pay_block label').on('click', function() {
		if (jQuery(this).hasClass('pay_beznal_label')){
			jQuery(".beznal_kod").addClass("active");
		} else {
			jQuery(".beznal_kod").removeClass("active");
		}

	});


	// курьер/самовывоз
	jQuery('.courier_novaya').on("click", function() {
		jQuery(".delivery_address").addClass("active");
		jQuery(".delivery_issue_point").addClass("disactive");
	});
	jQuery('.delivery_itself label' ).on("click", function() {
		jQuery(".delivery_address").removeClass("active");
		jQuery(".delivery_issue_point").removeClass("disactive");
	});
});	




// страница оформления
jQuery(document).ready(function(){
	// добавить/скрыть комментарий
	jQuery('.comment_order_add').on("click", function() {
		jQuery(".comment_order_hide").addClass("active");
		jQuery(".comment_order_area").addClass("active");
		jQuery('.comment_order_add').addClass("disactive");
	});
	jQuery('.comment_order_hide').on("click", function() {
		jQuery(".comment_order_area").removeClass("active");
		jQuery('.comment_order_add').removeClass("disactive");
		jQuery('.comment_order_hide').removeClass("active");
	});
});	



jQuery(document).ready(function(){
// страница Сингл галерея изображений
	jQuery('.exemple-image').on('click', function(){
		jQuery('.product_big_img').attr('src', jQuery(this).data('big'));
		jQuery('.product_big_img').data('big', jQuery(this).data('big'));
	});
});	

jQuery(document).ready(function(){
// вызов селектов каталога
	if (jQuery(".chosen-select").length){
	jQuery(".chosen-select").chosen();
	jQuery(".chosen-select").chosen({no_results_text: "Неправильный запрос."}); 
	}
});	











// кнопка поднятия страницы вверх
	// var top_show = 10;
	// var delay = 1000;
	// jQuery(window).scroll(function() {
	// 	if (jQuery(this).scrollTop() > top_show) jQuery('#scroll-top').fadeIn();
	// 	else jQuery('#scroll-top').fadeOut();
	// });
	// jQuery('#scroll-top').click(function() {
	// 	jQuery('body, html').animate({
	// 		scrollTop: 0
	// 	}, delay);
	// });

	// скрытие формы, если нажатие вне формы
	// $(document).mouseout(function (e) {
	// 	var container = $("choose_town_block ");
	// 	if (container.has(e.target).length === 0){
	// 		container.hide();
	// 	}
	// });
	// jQuery(document).click(function(event) {
	//      if (!jQuery(event.target).closest(jQuery(".choose_town_block ")).length){
	//       jQuery(".choose_town_block ").toggleClass('active');
	//      }
	//      event.stopPropagation();
	//  });


	// вызов селектов каталога
	// $(".chosen-select").chosen();
	// $(".chosen-select").chosen({no_results_text: "Неправильный запрос."}); 





// $ (window).scroll (function () {
// if ($ (this).scrollTop () > 300) {
// $ ('#scroll-top').fadeIn();
// } else {
// $ ('#scroll-top').fadeOut();
// }
// });
 
// $('#scroll-top').click(function(){
// $('body,html').animate({
// scrollTop: 0
// }, 100);
// return false;
// });


jQuery(document).ready(function(){

    jQuery(window).scroll(function() {
     if(jQuery(this).scrollTop() != 0) {
     jQuery('#scroll-top').fadeIn();
     } else {
     jQuery('#scroll-top').fadeOut();
     }
     });
     jQuery('#scroll-top').click(function() {
     jQuery('body,html').animate({scrollTop:0},800);
     });
});