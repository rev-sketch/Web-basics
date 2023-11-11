<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if(isset($_POST["send"])){
    $mail = new PHPMailer (true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'indurivijaybhaskar@gmail.com';
    $mail->Password = 'lqym soda fkob dbey';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail-> setFrom('indurivijaybhaskar@gmail.com'); 
    $mail-> addAddress($_POST["email"]);
    $mail->isHTML (true);

    $mail->Subject = 'Welcome to Restory';
    $mail->Body = $_POST["message"];

    $mail->send();

    echo
    "<script>
    alert('Sent Successsfully');
    document.location.href = 'index.php';
    </script>";
    }
?>