<?php
//get data from form  
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$selectBasic = $_POST['selectBasic'];
$carModel = $_POST['carModel'];
$datetimepicker = $_POST['datetimepicker'];
$inputAddress = $_POST['inputAddress'];
$message = $_POST['message'];

$to = "sajjadhaider1020@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Mobil Number = " . $phone . "\r\n Email =" . $email ."\r\n Select Service =" . $selectBasic ."
\r\n Car Model =" . $carModel . "\r\n Date =" . $datetimepicker . "\r\n Address =" . $inputAddress . "\r\n Message =" . $message;
$headers = "From: noreply@fusionautoconcept.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:resp.html");
?>