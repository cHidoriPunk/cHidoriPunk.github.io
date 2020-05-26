var clickEveryFiveSec = null;

$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});

$(document).ready(function(){

	clickFilterItem = setInterval(function() {
  		var items = $('.mbr-gallery-filter li');
  		var itemsLength = items.length;
    	var rand = Math.ceil(Math.random() * itemsLength);
    	item = $('.mbr-gallery-filter li:nth-child('+ rand +')');
     	items.removeClass('bright-yellow-shadow');
      	item.toggleClass('bright-yellow-shadow');
  	},2000);
	
	$('.mbr-gallery-filter li').click(function(){
		clearInterval(clickFilterItem);
		$('.mbr-gallery-filter li').removeClass('bright-yellow-shadow');
		clickFilterItem = 0;
		setTimeout(function(){
			$('#lb-gallery2-0').modal('show');
		},10000);
	});	

	$('#lb-gallery2-0').on('show.bs.modal', function(){
		if(clickEveryFiveSec){ clearInterval(clickEveryFiveSec); } 
		clickEveryFiveSec = setInterval(function(){ $('.carousel-control.right').trigger('click'); }, 5000);	
	});

	
	$('#lb-gallery2-0').on('hidden.bs.modal', function(){

		if(clickEveryFiveSec){ clearInterval(clickEveryFiveSec); }
		
		clickFilterItem = setInterval(function() {
	  		var items = $('.mbr-gallery-filter li');
	  		var itemsLength = items.length;
	    	var rand = Math.ceil(Math.random() * itemsLength);
	    	item = $('.mbr-gallery-filter li:nth-child('+ rand +')');
	     	items.removeClass('bright-yellow-shadow');
	      	item.toggleClass('bright-yellow-shadow');
	  	},2000);
	});	

});

(function($) {
  $.fn.nodoubletapzoom = function() {
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp
          , t1 = $(this).data('lastTouch') || t2
          , dt = t2 - t1
          , fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1) return; // not double-tap

        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(this).trigger('click').trigger('click');
      });
  };
})(jQuery);