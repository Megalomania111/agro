

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