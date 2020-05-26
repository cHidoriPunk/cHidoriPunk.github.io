<?php
$xml = "http://rss.walla.co.il/?w=/1/0/12/@rss.e";

$xmlDoc = new DOMDocument();
$xmlDoc->load($xml);

//get and output "<item>" elements
$items      = $xmlDoc->getElementsByTagName('item');
$itemsArray = [];

foreach($items as $node){
    $itemsArray[] = $node;
}

if(isset($_POST['settings']['maxItemsToDisplay']) && $_POST['settings']['maxItemsToDisplay'] != -1){
    $arrayLength = $_POST['settings']['maxItemsToDisplay'];
} else {
    $arrayLength = sizeof($itemsArray);
}

for ($i=0; $i<$arrayLength; $i++) {
    $item_title = $itemsArray[$i]->getElementsByTagName('title')->item(0)->childNodes->item(0)->nodeValue;
    $increment = $i+1;
    echo "<li data-update=\"item$increment\">." . $item_title . "</li>";
}
