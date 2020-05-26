<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>Walla News Feed Ticker</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="author" href="humans.txt">
</head>
<body>

<form>
    <div>
        <input name="speed" placeholder="Speed (pixels per second)" type="number"/>
    </div>
    <div>
        <span>
            <input name="width" placeholder="Width" type="number"/>
        </span>
        <span>
            <input name="height" placeholder="Height" type="number"/>
        </span>
    </div>
    <div>
        <input name="intervals" placeholder="Feed Intervals (hours)" type="number"/>
    </div>
    <div>
        <span>
            <label for="backgroundColor">Background Color:</label>
            <input name="backgroundColor" type="color" value="#000000"/>
        </span>
        <span>
            <label for="textColor">Text Color:</label>
            <input name="textColor" type="color" value="#ffffff"/>
        </span>
    </div>
    <div>
        <input name="textSize" placeholder="Text Size" type="number"/>
    </div>
    <div>
        <input name="maxItemsToDisplay" placeholder="Max items to display" type="number"/>
    </div>
    <div>
        <input type="button" value="submit" onclick="formSubmit()"/>
    </div>
</form>

<div id="tickerWrapper">
    <ul id="webTicker"></ul>
</div>

<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/jquery.webticker.min.js"></script>
<script src="assets/js/main.js"></script>

</body>
</html>