if (document.layers) {
    //Capture the MouseDown event.
    document.captureEvents(Event.MOUSEDOWN);

    //Disable the OnMouseDown event handler.
    document.onmousedown = function () {
        return false;
    };
}
else {
    //Disable the OnMouseUp event handler.
    document.onmouseup = function (e) {
        if (e != null && e.type == "mouseup") {
            //Check the Mouse Button which is clicked.
            if (e.which == 2 || e.which == 3) {
                //If the Button is middle or right then disable.
                return false;
            }
        }
    };
}

//Disable the Context Menu event.
document.oncontextmenu = function () {
    return false;
};

$( function() {

    $( '.col' ).draggable();

    $( '.col' ).dblclick(function(){
      $('#wrapper').addClass('popUpOpen');
      var $this = $(this);
      var $thisSrc = $this.attr('data-image-src');
      $('#popUp').find('img').attr('src', $thisSrc);
      $('#popUp').toggleClass('hidden shown');
    });

    $('body').click(function(){
        var popUp = $('#popUp');
        if(popUp.is('.shown')){
            popUp.removeClass('shown');
            popUp.addClass('hidden');
            $('#wrapper').removeClass('popUpOpen');
        }
    });

    $( '.col' ).each(function(){
        $(this).data({
            'originalLeft': $(this).css('left'),
            'origionalTop': $(this).css('top')
        });
    });

    $("#reset").click(function() {
        $('.col').each(function(){
            $(this).css({
                'left': $(this).data('originalLeft'),
                'top': $(this).data('origionalTop')
            });
        });
    });


    $(".col").swipe( {
        longTap:function(event, target) {
            $('#wrapper').addClass('popUpOpen');
            var $this = $(this);
            var $thisSrc = $this.attr('data-image-src');
            $('#popUp').find('img').attr('src', $thisSrc);
            $('#popUp').toggleClass('hidden shown');
        },
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            //console.log(fingerData);
            $(this).css('position', 'relative');
            $(this).animate({
                top: fingerData[0].last.y - fingerData[0].start.y,
                left: fingerData[0].last.x - fingerData[0].start.x
            }, 250);
        },
        threshold: 50
    });

});

$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        $('.col').each(function(){
            $(this).css({
                'left': $(this).data('originalLeft'),
                'top': $(this).data('origionalTop')
            });
        });
        var popUp = $('#popUp');
        if(popUp.is('.shown')){
            popUp.removeClass('shown');
            popUp.addClass('hidden');
            $('#wrapper').removeClass('popUpOpen');
        }
    }
});