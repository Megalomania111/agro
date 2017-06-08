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




	// каталог
	$(".filtr_tovarov_button").click(function(){
		$(".filtr").addClass("active");
		$(".filtr_tovarov_button").addClass("active");

	});
	$("a.close_filtr").click(function(){
		$(".filtr").removeClass("active");
		$(".filtr_tovarov_button").removeClass("active");
	});


	// вызов селектов каталога
	$(".chosen-select").chosen();
	$(".chosen-select").chosen({no_results_text: "Неправильный запрос."}); 


