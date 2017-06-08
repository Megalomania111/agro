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