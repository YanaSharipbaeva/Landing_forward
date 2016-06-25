
<?php
if($_POST)
    {
    $to = "sharipbaeva92@mail.com"; 
    $from = 'mail@mail.ru';
    $subject = "Проверка почты"; //тема
     $message = 'ФИО: '.$_POST['name'].'; Телефон: '.$_POST['phone'].'; Email: '.$_POST['email'].'; Company: '.$_POST['company'].';           ';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <почта@mail.ru>\r\n";
    $result = mail($to, $subject, $message, $headers);
 
    }
?>