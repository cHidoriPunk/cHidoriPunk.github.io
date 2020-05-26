<?php
ini_set("display_errors", "1");
error_reporting(E_ALL);

// echo "UID=".ser_getuid();

$portName = 'com9:';
$baudRate = 9600;
$bits = 8;
$stopBits = "1";

$isStopped = "";

ser_register("Daniel Kalaora #1","-172026520");
ser_open($portName, $baudRate, $bits, "None", $stopBits, "None");
$data = ser_read();
echo $data == "" ? 'no data' : $data;

//ser_flush(true, true);
ser_close();