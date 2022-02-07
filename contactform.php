<?php
$NomEtPrenom = $_POST['Nom-Complet'];
$NomEntreprise = $_POST['Nom-Entreprise'];
$Email = $_POST['Email'];
$Message = $_POST['Message'];

$email_from = 'noreply@firsthashtag.ma';

$email_subject = "Nouvelle demande de contact";

$email_body = "Nom et Prénom: $NomComplet\n".
              "Nom de l'entreprise: $NomEntreprise\n".
              "Email: $Email\n".
              "Message: $Message\n";

$to = "contact@firsthashtag.ma";

$headers = "From: $email_from \r\n";

$headers .= "Reply To: $Email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html#Home");

?>
