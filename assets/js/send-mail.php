<?php
// Adresse du destinataire
$to = 'displayled11@gmail.com';

// Données du formulaire (sécurisées)
$raison_sociale = htmlspecialchars($_POST['raison_sociale']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$demande = htmlspecialchars($_POST['demande']);
$produit = htmlspecialchars($_POST['produit']);
$message = htmlspecialchars($_POST['message']);

// Sujet et corps de l'email
$subject = "Contact depuis le site - $demande";
$body = "Raison sociale : $raison_sociale\n";
$body .= "Email : $email\n";
$body .= "Type de demande : $demande\n";
$body .= "Produit choisi : $produit\n\n";
$body .= "Message :\n$message";

// En-têtes
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Envoi de l'email
if (mail($to, $subject, $body, $headers)) {
    echo "Votre message a été envoyé avec succès.";
} else {
    http_response_code(500); // Erreur serveur
    echo "Échec de l'envoi. Veuillez réessayer plus tard.";
}
?>
