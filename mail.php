<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];


$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->SMTPAuth = true;                               // Enable SMTP authentication

$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->Host = 'smtp.gmail.com'; 					  // Specify main and backup SMTP servers


$mail->Username = ''; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = ''; // Ваш пароль от почты с которой будут отправляться письма

$mail->setFrom(''); // от кого будет уходить письмо?
$mail->addAddress('');     // Кому будет уходить письмо 


$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с Quantcloud';
$mail->Body    = "\nИмя: ".$name."\nТелефон: " .$phone."\nE-mail: " .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
?>
    <script type='javasript'>
    	$.magnificPopup.open({
    	  items: {
    	    src: '#popup-success'
    	  },
    	  type: 'inline',
    	  preloader: false,
    	  focus: '#username',
    	  modal: true
    	});
    </script>
<?php 
}
?>

