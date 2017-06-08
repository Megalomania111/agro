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
jQuery(document).ready(function(){
	jQuery(".media_menu button").click(function() {
		jQuery(".media_menu button").toggleClass("active");
		jQuery(".adaptive_menu").toggleClass( "active");
		jQuery(".adaptive_menu_block").toggleClass( "active");
		jQuery("html, css").toggleClass("toggle_overflow");

	});

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

jQuery('#popap_call_tel').mask("+380 (99) 999-99-99");