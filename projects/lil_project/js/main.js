$(document).ready(function(){

	var listItem = $('main .list .item');
	listItem.click(function(){
		var imgSrc = $(this).children('img').attr('src');
		$(this).parent().prev('#main-image').children('img').fadeOut(500, function(){
			$(this).fadeIn(1500).attr('src', imgSrc);
		});
		
	});

});