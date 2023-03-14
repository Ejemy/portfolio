<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    
    $recipient = "eric.iwan@mail.com";
    $subject = "New message from $name";

    $content = "Name: $name </br>Email: $email </br>Message: $message";

    $header = "From: $name <$email>";

    mail($recipient, $subject, $content, $header);
?>