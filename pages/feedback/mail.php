<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$call = $_POST['call'];
$website = $_POST['website'];
$priority = $_POST['priority'];
$type = $_POST['type'];
$message = $_POST['message'];
$formcontent=" Ot: $name \n \n \n Tip Na Feetbacka-a: $type \n \n \n SUOBSHTENIE: $message";
$recipient = "we.r.ginr@gmail.com";
$subject = "Feedback Ot MIROEGEI.ML";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "<a href='https://miroegei.ml' style='text-decoration:none;color:green; background:wheat; font-size: 15rem; border-radius:25px;'>  BLAGODARQ CHE OSTAVIHTE BEZPOLEZNOTO SI MNENIE \nVurnete Se Obratno</a>";
?>
