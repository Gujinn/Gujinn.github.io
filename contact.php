<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message =$_POST['message'];

    $email_from = 'CV Theo';
    $email_subject = 'New message from CV contact';
    $email_body = "Name: $name.\n".
                  "Email: $email.\n".
                  "Message: $message.\n";

    $to ="tnairi06@outlook.fr";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-to: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("location: success.html");
?>