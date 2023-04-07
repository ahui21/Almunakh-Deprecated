<?php
  $name - $_POST['name'];
  $email = $_POST['email'];
  $to = 'alwin@almunakh.com';
  $subject = 'Notify me request';
  $headers = 'From: $email\n';
  $message = 'A visitor to your site has sent the following email address to be added to your mailing list.\n
              Name: $name\n
              Email Address: $email';
  mail($to,$subject,$message,$headers);
?>