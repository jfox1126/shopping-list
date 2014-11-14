$(document).ready(function() {

	//Changes qty-input text color when typed
	$('#qty-input').keydown(function() {
		//alert('pressed');
		$('#qty-input').css('color', '#000000');
	});

	//Hit enter to add items (when on #item-input)
	$('#item-input').keydown(function(event) {
		if (event.which === 13) {
			var item = $('#item-input').val().trim();
			var qty = $('#qty-input').val();
			var itemEntry = '<li class="entry">'+'<button class="strike">'+'<i class="fa fa-close"></i>'+'</button>'+'<button class="item">'+item+'<i class="fa fa-check"></i>'+'</button>'+'<button class="qty">'+qty+'</button>'+'</li>';
			//alert(item);
			//console.log(itemEntry);
			if (item.length == 0) {
				alert ("There's nothing to add!");
			} else {
				$('.list').prepend(itemEntry);
				$('.entry').show().animate({opacity: 1, marginTop: 0}, 500);
			}
			$('#item-input').val('');
			$('#qty-input').val('1');
		}
	});

	//Hit enter to add items (when on #qty-input)
	$('#qty-input').keydown(function(event) {
		if (event.which === 13) {
			var item = $('#item-input').val().trim();
			var qty = $('#qty-input').val();
			var itemEntry = '<li class="entry">'+'<button class="strike">'+'<i class="fa fa-close"></i>'+'</button>'+'<button class="item">'+item+'<i class="fa fa-check"></i>'+'</button>'+'<button class="qty">'+qty+'</button>'+'</li>';
			//alert(item);
			//console.log(itemEntry);
			if (item.length == 0) {
				alert ("There's nothing to add!");
			} else {
				$('.list').prepend(itemEntry);
				$('.entry').show().animate({opacity: 1, marginTop: 0}, 500);
			}
			$('#item-input').val('');
			$('#qty-input').val('1');
		}
	});	

	//Click X to remove
	$(document).on("click", ".strike", function(){
    	console.log("click .strike");
    	$(this).closest('.entry').animate({height: 0, opacity: 0}, 500, function() {
    			$(this).closest('.entry').remove();
    			//alert('removed');
    	});
	});

	//Click anywhere on .item button to check off
	$(document).on("click", ".item", function() {
		console.log("click .item");
		$(this).toggleClass("checked-off");
		$(this).closest('.entry').find('.qty').toggleClass("checked-off");
	});
})

//I CAN'T FIGURE OUT WHY THIS DOESN'T WORK
/*$('.entry').on("click", ".strike", function() {
	console.log('clicked close');
});*/