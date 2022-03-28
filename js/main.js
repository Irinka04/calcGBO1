/* Пишем свой калькулятор на сайт */
$(function () {
	// переменная отвечает за количество кв. метров(1пункт)
	var mCount = $('.m-count'),
	// ползунок
	mCount1 = $('.m-count1'),
	// переменная отвечает за кол-во этажей(2й пункт)
//  floorNumber = $('.floor-number'),
//  переменная какой материал(3.пункт)
 typeOfHouse = $('input[name="typeOfHouse"]').val(),
 typeOfHouse1 = $('input[name="typeOfHouse1"]').val(),
//  project = $('input[type="checkbox"]'),
//  сумма 

//  span[id="price"],
 price = $('#price'),

 finalPrice = 900000;
//  переменная нужен ли дизайн

	// фунсция change(function () отлавливает нажатие на клавишу
	mCount.change(function () {
		// if ($(this).val() >10){
			// если значение > 10 то ф-я считать присвоить
			// $(this).tooltip('destroy');
			// формула подсчета
			finalPrice = ( +mCount.val() * +typeOfHouse1 * +mCount1.val()) - ((+mCount.val() ) * +typeOfHouse * +mCount1.val())
			
			price.text(finalPrice);
		// }else {
			// https://getbootstrap.com/docs/3.4/javascript/#tooltips-methods
			// иначе удалтитьtooltip('toggle');
			// $(this).tooltip('toggle');

		});
		// console.log(finalPrice);
	  price.text('900000')
	// функция change отлавливает изменения в floorNumber
	// floorNumber.change(function () {
		// т.к.выводится не цыфра а строка то при помощи (typeof +) floorNumber меняется на цыфры
		// console.log( typeof + floorNumber.val());
		// новая переменная итогова сумма (где + переводит в цыфры)
		// var summ = +mCount.val() + +floorNumber.val();
		// console.log(summ);
		// формула подсчета
		// finalPrice = ( +mCount.val() * basePrice * +floorNumber.val() * +typeOfHouse1 * +mCount1.val() / 100 ) - ((+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse * +mCount1.val()/ 100 )
			// price.text(finalPrice);
		// });
		// функция определяет коффициэнт val (1 или 2)материала дома(3.пункт)
		$('input[name="typeOfHouse"]').change(function (event) {
			// console.log($(this).val());		
			// формула подсчета
			typeOfHouse = $(this).val();
			finalPrice = ( +mCount.val() * +typeOfHouse1 * +mCount1.val()) - ((+mCount.val() ) * +typeOfHouse * +mCount1.val())	
			price.text(finalPrice);
			// ф-я меняет картинки в зависимости от выбранного материала по value
			if($(this).val() == 17) {
			$('img').attr('src', './img_copy/1.jpg');
		}else{
			$('img').attr('src', './img_copy/2.jpg');
			
		}

		});
		$('input[name="typeOfHouse1"]').change(function (event) {
			// console.log($(this).val());		
			// формула подсчета
			typeOfHouse1 = $(this).val();

			finalPrice = ( +mCount.val() * +typeOfHouse1 * +mCount1.val()) - ((+mCount.val() ) * +typeOfHouse * +mCount1.val())

			price.text(finalPrice);
			
			});
			mCount1.change(function () {
			 finalPrice = ( +mCount.val() * +typeOfHouse1 * +mCount1.val()) - ((+mCount.val() ) * +typeOfHouse * +mCount1.val())
			price.text(finalPrice);			 
				});
	});
// price.text('900000');



			
    
		// project.change(function (event) {
			// if если is(':checked')функция сработает то элемент выбран и сработает др.ф-я
			// if($(this).is(':checked')){				
				// console.log('true');
				// формула подсчета
				// design = 15000;
				// finalPrice = ((+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse1 * + design / 1000000) - ((+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse * + design / 100000)
			// price.text(finalPrice);
			// } else{
				// console.log('false');
				// формула подсчета
				// design = 900;
				// finalPrice = ((+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse1 * + design / 10000) - ((+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse * + design / 10000)
			// price.text(finalPrice);
			// }
		// });
		// price.text('900000')



