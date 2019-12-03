<?php

$url = 'https://script.google.com/macros/s/AKfycbw2kTmyvLUy-TqYxaNKS2z8IGxJKzrsCH7BIgFcG-DXFh_4-zs/exec';
$myvars = 'name=' . $_POST["name"] . '&tel=' . $_POST["tel"];

$ch = curl_init( $url );

curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
curl_setopt( $ch, CURLOPT_POSTFIELDS, $myvars);
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt( $ch, CURLOPT_HEADER, 0);
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

$fields = curl_exec( $ch );
// $info = curl_getinfo($ch);

$response = mb_convert_encoding($fields, "UTF-8", "Windows-1251");
	// header("Location: https://kvadrat.store/thanks.html"); 
// 	echo json_decode($response);
// 	echo $_POST["tel"] . 'succ';
// 	exit();
// } else {
// 	echo json_decode($response);
// 	// echo $response;
// 	echo $_POST["tel"] . 'error';
// }

?>
