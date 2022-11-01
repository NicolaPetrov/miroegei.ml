<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$call = $_POST['call'];
$website = $_POST['website'];
$priority = $_POST['priority'];
$type = $_POST['type'];
$message = $_POST['message'];
$formcontent=" OT:   $name \n  \n CHESTOTA:   $priority \n PRICHINA:   $type ";
$recipient = "we.r.ginr@gmail.com";
$subject = "ABONIRANE ZA NEWSLETTER-a Na MIROEGEI.ML";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "<a href='https://miroegei.ml' style='text-decoration:none;color:green; background:wheat; font-size: 10rem; border-radius:25px;'>ABONIRAHTE SA USPESHNO\n Vurnete Se Obratno</a>";
?>
