<?php
/* CONFIGURATION */
// Pandoras Box Master ip address
$host = "127.0.0.1";
// Pandoras Box Master web server port
$port = 6214;



/* SCRIPT */
$command = file_get_contents("php://input");
$timeout = 30;
$fp = fsockopen($host, $port, $errno, $errstr, $timeout);
if($fp)
{
	$request = "PBAUTO / HTTP/1.1\r\n";
	$request.= "Host: ".$host."\r\n";
	$request.= "User-Agent: Coolux PHP Script/1.0\r\n";
	$request.= "Accept: text/html\r\n";
	$request.= "Content-Length: ".strlen($command)."\r\n";
	$request.= "Content-Type: text/plain; charset=UTF-8\r\n";
	$request.= "Connection: keep-alive";
	$request.= "\r\n\r\n".$command;
	
	fwrite($fp, $request);
	
	$status = fgets($fp);
	$ctype = fgets($fp);
	$line3 = fgets($fp);
	$clength = preg_replace("/[^0-9]/","",$line3);
	$clear = fgets($fp);
	echo fgets($fp,$clength+1);
	fclose($fp);
}
else
{
	echo "ERROR: ".$errstr;
}
?>
