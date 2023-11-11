<?php
session_start();
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../phpmailer/src/Exception.php';
require '../phpmailer/src/PHPMailer.php';
require '../phpmailer/src/SMTP.php';
require "db_connection.php";
if($conn) {
    $email = $_GET["email"];
    $agent_name= $_SESSION["username"];
    $mail = new PHPMailer (true);
    $mail->isSMTP();
    $mail->Host = 'smtppro.zoho.in';
    $mail->SMTPAuth = true;
    $mail->Username = 'care@restory.in';
    $mail->Password = 'za0FCAQWfy1U';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail-> setFrom('care@restory.in'); 
    $mail-> addAddress($email);
    $mail->isHTML (true);

    $mail->Subject = 'Welcome to Restory';
    $mail->Body = "Welcome to Restory<br><br>
    Your Agent details
    name:" . $agent_name;

    try{
    $mail->send();
    
    echo
    "Email sent successfully";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
