<?php
ini_set('display_errors', '0');

//-- settings --//

//brainboxes serial ports
//on 'nix start with cu.usbserial-
//on windows starts with com : must be lower case in windows and end with a colon
$portName = 'com9:';
$baudRate = 9600;
$bits = 8;
$spotBit = 1;

header( 'Content-type: text/plain; charset=utf-8' );

$scanTime = isset($_GET['TTW']) ? $_GET['TTW'] : 10;

function echoFlush($string)
{
	echo $string;
	flush();
	ob_flush();
}

if(!extension_loaded('dio'))
{
	echoFlush( "PHP Direct IO does not appear to be installed for more info see: http://www.php.net/manual/en/book.dio.php" );
	exit;
}

try {
    //the serial port resource
    $bbSerialPort;

    if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
        $bbSerialPort = dio_open($portName, O_RDWR);
        //we're on windows configure com port from command line
        exec("mode {$portName} baud={$baudRate} data={$bits} stop={$spotBit} parity=n xon=on");
    }

    //date_default_timezone_set ("Europe/Rome");

    $runForSeconds = new DateInterval("PT10S"); //10 seconds
    $endTime = (new DateTime())->add($runForSeconds);

    while (new DateTime() < $endTime){
        $data = dio_read($bbSerialPort, 256); //this is a blocking call
        if ($data) {
            if ($data && $data != null) {
                $isStopped = $data != 'Turn\n' ? 'true' : 'false';
                echoFlush($isStopped);
            } else {
                echoFlush('no data');
            }
        }
    }

    dio_close($bbSerialPort);
} 
catch (Exception $e) 
{
	echoFlush(  $e->getMessage() );
	exit(1);
}