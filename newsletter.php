<?php
$NL_email = $_POST['user-email'];

$email_from = 'noreply@firsthashtag.ma';

$email_subject = "Nouvelle inscription à la newsletter";

$email_body = "Adresse mail: $NL_email\n";


$to = "contact@firsthashtag.ma";


$headers = "From: $email_from \r\n";

$headers .= "Reply To: $NL_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html#Home");

?>