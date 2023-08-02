<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["fullname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];


    $to = "maru.trujillo46@gmail.com";
    $subject = "Contact Form Submission from $name";
    $email_content = "Full Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Message:\n$message\n";
    $headers = "From: $email" . "\r\n";
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error: Unable to send the message.";
    }
}
?>