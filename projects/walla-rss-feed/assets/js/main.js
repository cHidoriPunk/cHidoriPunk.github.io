function formSubmit() {

    var speed             = $('[name="speed"]').val() || '10';
    var width             = $('[name="width"]').val() || 'auto';
    var height            = $('[name="height"]').val() || '75';
    var backgroundColor   = $('[name="backgroundColor"]').val();
    var textColor         = $('[name="textColor"]').val();
    var textSize          = $('[name="textSize"]').val() || '18';
    var maxItemsToDisplay = $('[name="maxItemsToDisplay"]').val() || -1;
    var fetchIntervals    = $('[name="intervals"]').val() * 3600 * 1000 || 2 * 3600 * 1000;

    var data =
        {
            settings:
                {
                    speed: speed,
                    width: width,
                    height: height,
                    backgroundColor: backgroundColor,
                    textColor: textColor,
                    textSize: textSize,
                    maxItemsToDisplay: maxItemsToDisplay,
                    fetchIntervals: fetchIntervals
                }
        };

    doAfterXhr(data);


    setInterval(function(){
        doUpadte(data);
    } , data.settings.fetchIntervals);

}

function doAfterXhr(data){
    $.ajax({
        method: "POST",
        url: "feed.php",
        data: data
    })
    .done(function (content) {
        $('form').remove();

        $('#webTicker').append(content).webTicker({
            speed: data.settings.speed,
            height: data.settings.height + 'px',
            direction: 'right',
            updateType: 'swap',
            duplicate: true,
            transition: 'ease'
        });

        $('#tickerWrapper').css({'background-color': data.settings.backgroundColor, width: data.settings.width});
        $('#webTicker li').css({ 'color': data.settings.textColor, 'font-size': data.settings.textSize + 'px' });
    });
}

function doUpadte(data){
    $.ajax({
        method: "POST",
        url: "feedUpdate.php",
        data: data
    })
    .done(function (content) {
        $('#webTicker').webTicker('update', content, 'swap', true, false);
        $('#tickerWrapper').css({'background-color': data.settings.backgroundColor, width: data.settings.width});
        $('#webTicker li').css({ 'color': data.settings.textColor, 'font-size': data.settings.textSize + 'px' });
    });
}
