<?php
  $name - $_GET['name'];
  $email = $_GET['email'];
  $to = 'alwin@almunakh.com';
  $subject = 'Notify me request';
  $headers = 'From: $email\n';
  $message = 'A visitor to your site has sent the following email address to be added to your mailing list.\nName: $name\nEmail Address: $email';
  mail($to,$subject,$message,$headers);
?>