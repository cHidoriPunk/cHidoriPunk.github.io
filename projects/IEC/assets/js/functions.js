var clock, time, currentSequence, nextSequence, prevSequence, startReadSerial, publicSpreadsheetUrl;
var timeSet = 180; // 180 == 3 min
var countDownTimer = 30;
var cameraAndMenuVisible = true;
var cameraAndMenuElements = $('.menu, .camera-feed-wrapper');
var clockPaused = true;

clock = new FlipClock($('.clock'), timeSet, {
    clockFace: 'MinuteCounter',
    countdown: true,
    autoStart: false,
    callbacks: {
        interval: function () {
            time = clock.time.time;
            var activeSlideInSequence = $('[data-slide-in-sequence]:visible')
            if (time === 10 && activeSlideInSequence) {
                $('.countdown-sample').attr('src', 'assets/mp3/countdown.mp3');
                $('.place-your-bets').addClass('last-ten-seconds');
            }
            if (time === 0 && activeSlideInSequence) {
                pagination('next');
            }
        },
        stop: function(){
            clockPaused = true;
        },
        start: function(){
            clockPaused = false;
        }
    }
});

function readSerial() {
    $.ajax({
        url: 'SerialReader.php',
        dataType: "text",
        success: function (data) {
            if (data) {
                console.log(data);
                var arr = data.split('\r\n');
                if ($.inArray("Turn", arr)) {
                } else {
                    stopReadSerial();
                }
            }
        },
        error: function (msg) {
        }
    });
}

function clockVisibility(action) {
    var clockElement = $('.clock');
    return action === 'invisible' ? clockElement.addClass('invisible') : clockElement.removeClass('invisible');
}

function getCameraFeed(action) {
    var iFrame = $('.camera-feed-wrapper').children('iframe');
    if (action === 'startCameraFeed') {
        iFrame.attr('src', 'camera.html');
    } else {
        iFrame.removeAttr('src');
    }
}

function toggleCameraAndMenu() {
    cameraAndMenuVisible = !cameraAndMenuVisible;    
    cameraAndMenuVisible === false ? exitCameraAndMenu() : enterCameraAndMenu();	
}

function enterCameraAndMenu() {
    cameraAndMenuVisible = true;
    // if(currentSequence !== undefined) { toggleSkipButtons(); }
    return cameraAndMenuElements.addClass('in');
}

function exitCameraAndMenu() {
    cameraAndMenuVisible = false;
    return cameraAndMenuElements.removeClass('in');
}

function stopReadSerial() {
    clearInterval(startReadSerial);
}

function getCountdown(slideNum) {
    if (slideNum === 4 || slideNum === 1) {
        clock.stop();
        clock.setTime(timeSet);
        clockVisibility('visible');
    } else if (slideNum === 2) {
        $('.place-your-bets').removeClass('last-ten-seconds');
        clock.stop();
        clock.setTime(countDownTimer);
        clockVisibility('visible');
    } else {
        clock.stop();
        clockVisibility('invisible');
    }
}

function setSlide(slideNum) {
    slideNum = parseInt(slideNum, 10);
    var slideInSequence = $('[data-sequence].active [data-slide-in-sequence="' + slideNum + '"]');
    slideInSequence.siblings().removeClass('active').addClass('hidden');
    slideInSequence.removeClass('hidden').addClass('active');
    getCountdown(slideNum);
}

function highlightMenuButton(buttonNumber) {
    var menuButton = $('.menu li:nth-child(' + buttonNumber + ')');
    menuButton.siblings().removeClass('active');
    menuButton.addClass('active');
}

function setIframeSrc(currentSequence) {
    var lastSlideInSequenceIframe = $('[data-sequence="' + currentSequence + '"] .last iframe');
    var iframeSrc = '';
    var date = new Date();
    var timestamp = date.getTime();

    switch (currentSequence) {
        case 1:
            iframeSrc = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSF66p1Bj7xogJ4w5vpWr4J8rwqZ3miEVWb8vihpmNsarNMrPENdm7lD9laeBEu8QApBpamoU1_HH5w/pubchart?timestamp='+ timestamp +'&oid=370242720&amp;format=interactive';
            break;
        case 2:
            iframeSrc = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTqxjjjOX9H0UGrrFyYsLVgFcojCa2ckKfyzXZcVYhVlEmJu98HzWhvYNW488GgRIcDvM2wawOpiFqg/pubchart?timestamp='+ timestamp +'&oid=1740425464&amp;format=interactive&timestamp=';
            break;
        case 3:
            iframeSrc = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSw-zpoeZLVetgemlBQY-BVM8r17bN_NqFIezQ2BCEw-dnPqOD95-Zfs1YLnGgxottD-7Lf2X-2in9p/pubchart?timestamp='+ timestamp +'&oid=262261742&amp;format=interactive&timestamp=';
            break;
        case 4:
            iframeSrc = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTPsIUTC_H8dA00MAL4-OaN7UskmGh1C4DiWFODvQqw2wdCXqmODmS42pEt86v9ogdTzUxbQh0dDraz/pubchart?timestamp='+ timestamp +'&oid=1516489373&amp;format=interactive&timestamp=';
            break;
        case 5:
            iframeSrc = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQIaWq_uxfN5E-EtxH-1XUMzdfE-gv0Ys_3wxv6ZZLPw36BvLrgEZTTScceGbpPCrPR2KhdK-69yi85/pubchart?timestamp='+ timestamp +'&oid=1989430801&amp;format=interactive&timestamp=';
            break;
        case 6:
            iframeSrc = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTF_TFrG6DV8yDGH5Z1-2AIJtlJ-TeO2pUPC-zqBZx6eFyzjIZWE5mrxVDC2_EO0nH0Iv9t4tMogVbN/pubchart?timestamp='+ timestamp +'&oid=1768904686&amp;format=interactive&timestamp=';
            break;
        case 7:
            iframeSrc = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQEj1CLrbpt5b8jo1BTQ3wOuZWn5MjrhemH9Vk6XKBhoheL8AgwSIMgZqNviqOC7CaTpOVo0WrwPGZn/pubchart?timestamp='+ timestamp +'&oid=2111587145&amp;format=interactive&timestamp=';
            break;
        case 8:
            iframeSrc = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTUvs3cw7j6gtKE-tGKPWlHRP_lnl4et09Mk3uQJJYlBxiJ0HeF1QEw4BCYXnbzkpifY5uc8ZgxWsXw/pubchart?timestamp='+ timestamp +'&oid=159284256&amp;format=interactive&timestamp=';
            break;
        default:
            iframeSrc = '';
            break;
    }
    lastSlideInSequenceIframe.attr('src', iframeSrc);
}

function fetchDataFromGoggleSpreadSheet(spreadSheetKey, currentSequence){

    $('[data-sequence] .last h2').removeClass('fade-in error');
    var titleElement = $('[data-sequence="' + currentSequence + '"] .last h2');

    var getCell = function(){
        var api = 'https://spreadsheets.google.com/feeds/cells/';
        var spreadsheet = spreadSheetKey;
        var worksheet =   'default';
        var row =         2;
        var col =         4;
        var url = api+spreadsheet+'/'+worksheet+'/public/basic/R'+row+'C'+col+'?alt=json';
        $.getJSON(url)
            .done(function(data){
                console.log(data)
                if(data.entry){
                    if(data.entry.content['$t'] === '#DIV/0!') {
                        titleElement.addClass('error').html('No Data');
                    } else {
                        titleElement.addClass('fade-in').html(data.entry.content['$t']);
                    }
                } else {
                    titleElement.html('No Data');
                }
            })
            .fail(function(){
                alert('Failed to fetch data. Check connection to Internet');
            });
    };
    getCell();

}

function setSpreadSheetURL(currentSequence){
    var spreadSheetKey = '';
    switch (currentSequence) {
        case 1:
            spreadSheetKey = '1DejtI2opYhjp1SQ8KIkK_uvQxacnRirkW1bjwiJ05vA';
            break;
        case 2:
            spreadSheetKey = '1tJxNAmUTIWvJajD-wz-F4jQVuSnqXN7x38PAHCbf6O4';
            break;
        case 3:
            spreadSheetKey = '1rt0SypsuM85W7kc4fWkmC6-cl8Jv0wKiqUUkApfRKmc';
            break;
        case 4:
            spreadSheetKey = '14CxT_qGefhz5hETe3G6e4K80tdxbz7Ev_scqiJfp4RQ';
            break;
        case 5:
            spreadSheetKey = '1u9N5iet6JEPWeTDiK4oiWzRQB8vxkU2xis5YqXS5oJQ';
            break;
        case 6:
            spreadSheetKey = '1IcFVQAkAAvPMQEUlec2Bql8qJ3ZSkzCI57cR7MOMDGE';
            break;
        case 7:
            spreadSheetKey = '1JksUNfep5-FAPtALsLEI1fQT9gkB2__MqQcwwns_x7A';
            break;
        case 8:
            spreadSheetKey = '1NwSFpR70a1jdenN2x6nA2NYyHm3al_9iFqrI_33EEzI';
            break;
        default:
            spreadSheetKey = '';
            break;
    }
    fetchDataFromGoggleSpreadSheet(spreadSheetKey, currentSequence);
}

function pagination(action, sequenceNum) {

    // in case entering from menu
    if (sequenceNum != null) {
        $('[data-sequence]').addClass('hidden').removeClass('active');
        $('[data-sequence="' + sequenceNum + '"] .first').siblings().addClass('hidden').removeClass('active');
        $('[data-sequence="' + sequenceNum + '"], [data-sequence="' + sequenceNum + '"] .first').removeClass('hidden').addClass('active');
        getCountdown(1); // set clock for first slide in sequence
        highlightMenuButton(sequenceNum);
        return;
    }

    var sequenceVisible = $('[data-sequence]:visible');
    var sequencesLength = $('[data-sequence]').length;

    sequenceVisible.addClass('active');
    var activeSequence = $('.sequence.active');
    var isActiveSequenceVisible = activeSequence.length !== 0;
    if (isActiveSequenceVisible) {
        currentSequence = parseInt(activeSequence.attr('data-sequence'), 10);
        nextSequence = currentSequence + 1;
        prevSequence = currentSequence !== 1 ? currentSequence - 1 : currentSequence;
        var childrenLength = activeSequence.children().length;
        var slideInSequenceVisible = parseInt(activeSequence.children(':visible').attr('data-slide-in-sequence'), 10);
        var nextSlide = slideInSequenceVisible < childrenLength - 1 ? slideInSequenceVisible + 1 : childrenLength;
        var prevSlide = slideInSequenceVisible > 1 ? slideInSequenceVisible - 1 : 1;
        var sequenceFirstChild = activeSequence.find('.first');
        var sequenceLastChild = activeSequence.find('.last');
        var isLastChildVisible = sequenceLastChild.is(':visible');
        var isFirstChildVisible = sequenceFirstChild.is(':visible');

        if (action === 'next') {
            if (isLastChildVisible && currentSequence !== sequencesLength) {
                sequenceLastChild.addClass('hidden').removeClass('active');
                var nextSequenceElement = $('[data-sequence="' + nextSequence + '"]');
                getCountdown(1);
                nextSequenceElement.siblings().addClass('hidden').removeClass('active');
                nextSequenceElement.removeClass('hidden').addClass('active');
                nextSequenceElement.find('.first').siblings().addClass('hidden').removeClass('active');
                nextSequenceElement.find('.first').addClass('active').removeClass('hidden');
                highlightMenuButton(nextSequence);
            } else {
                setSlide(nextSlide);
            }
            if(nextSlide === childrenLength && !isLastChildVisible){
                //setIframeSrc(currentSequence);
                setSpreadSheetURL(currentSequence);
            } else {
                $('.last iframe').removeAttr('src');
            }
        } else {
            if (isFirstChildVisible && currentSequence !== 1) {
                sequenceFirstChild.addClass('hidden').removeClass('active');
                var prevSequenceElement = $('[data-sequence="' + prevSequence + '"]');
                getCountdown(prevSequenceElement.find('.last').index());
                prevSequenceElement.siblings().addClass('hidden').removeClass('active');
                prevSequenceElement.removeClass('hidden').addClass('active');
                prevSequenceElement.find('.last').siblings().addClass('hidden').removeClass('active');
                prevSequenceElement.find('.last').removeClass('hidden').addClass('active');
                highlightMenuButton(prevSequence);
            } else {
                setSlide(prevSlide);
            }
            if(prevSlide === 1 && isFirstChildVisible){
                //setIframeSrc(prevSequence);
                setSpreadSheetURL(prevSequence);
            } else {
                $('.last iframe').removeAttr('src');
            }
        }

    } else {
        highlightMenuButton(1);
        getCountdown(1);
        exitCameraAndMenu();
        var firstSequence = $('[data-sequence]:first-child');
        firstSequence.removeClass('hidden').addClass('active');
        firstSequence.find('.first').addClass('active');
    }
}

$('button.clock-button').mousedown(function () {
    var $this = $(this);
    return $this.data('clock') === 'stop' ? clock.stop() : clock.start();
});

$('.menu [data-show]').mousedown(function () {
    var $this = $(this);
    var show = parseInt($this.attr('data-show'), 10);
    $(this).parent().addClass('active').siblings().removeClass('active');
    pagination('next', show);
});

$('button.skip-button').mousedown(function () {
    var action = $(this).attr('data-action');
    pagination(action);
});

$(document).keypress(function (ev) {
    switch (ev.which) {
        case 112:
            clockPaused === true ? clock.start() : clock.stop();
            break;
        case 109:
            $('.menu').toggleClass('in');
            break;
        case 32:
            toggleCameraAndMenu();
            break;
        case 46:
            pagination('next');
            break;
        case 44:
            pagination('prev');
            break;
    }
});

$(document).mousedown(function () {
    if (cameraAndMenuVisible) exitCameraAndMenu();
});

$(document).ready(function () {
    // enter the roulette frame
    getCameraFeed('startCameraFeed');
    enterCameraAndMenu();
    //startReadSerial = setInterval(readSerial, 5000);
});