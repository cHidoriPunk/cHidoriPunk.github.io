<?php

$ipaddress = '';

// Function to get the client IP address
function get_client_ip() {
    global $ipaddress;
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
        $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

$name = $_POST['name'];
if (!isset($name) || $name == null) { die('{"error": "no name given"}'); }
$email = $_POST['email'];
if (!isset($email) || $email == null) { die('{"error": "no mail given"}'); }
$country = $_POST['country'];
if (!isset($country) || $country == null) { die('{"error": "no name given"}'); }
$subject = $_POST['subject'];
if (!isset($subject) || $subject == null) { die('{"error": "no subject given"}'); }
$message = $_POST['message'];
if (!isset($message) || $message == null ) { die('{"error": "no message given"}'); }

echo '{"success": "true"}';

$file = fopen("mydata.txt", "a") or die ("file not open");

$s = "Name:    " . $name . "\n" . "Email:   " . $email . "\n" . "Country: " . $country . "\r\n" . "Subject: " . $subject . "\r\n\n" . "Message:\r\n" . $message. "\r\n\n"."IP Address:\n". get_client_ip(). "\r\n\n-------------------------\r\n\n";

fputs($file, $s) or die ("Data not write");

fclose($file);


