// страница Сингл галерея изображений
	jQuery('.exemple-image').on('click', function(){
		jQuery('.product_big_img').attr('src', jQuery(this).data('big'));
		jQuery('.product_big_img').data('big', jQuery(this).data('big'));
	});
