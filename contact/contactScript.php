<?php

$admin = 'mark_199518@hotmail.co.uk' ;
$replymsg = 'Thanks for your email! I will respond shortly.' ;
$formurl = 'contact.html' ; 
$errorurl = 'error.html' ; 
$success = 'success.html' ; 

function remove_headers($string) {
    $headers = array("/to\:/i","/from\:/i","/bcc\:/i","/cc\:/i",
                    "/Content\-Transfer\-Encoding\:/i",
                    "/Content\-Type\:/i", "/Mime\-Version\:/i");
    if (preg_replace($headers, '', $string) == $string){
        return $string;
    }
    else{
        die('You are not completing the form correctly.');
    }
}

$uself = 0;
$headersep = (!isset( $uself ) || ($uself == 0)) ? "\r\n" : "\n" ;

$email = remove_headers($_POST['email']) ;
$name = remove_headers($_POST['name']) ;
$subject = remove_headers($_POST['subject']) ;
$message = remove_headers($_POST['message']) ;

if (get_magic_quotes_gpc()){
    $name = stripslashes( $name );
    $subject = stripslashes( $subject );
    $message = stripslashes( $message );
}
if (!isset($_POST['email'])){
    header( "Location: $formurl" ); 
}
elseif ($_POST['catchbot'] !=""){
    die();
}
elseif ( preg_match( "[\r\n]", $name ) || preg_match( "[\r\n]", $email ) ){
    header( "Location: $errorurl" );
    exit;
}
else{
    mail( $admin, "Feedback: $subject", "$name\r\n$email\r\n$message", "From: $name <$admin>" );
    mail( $email, "Feedback: $subject", $replymsg , "From: $admin" );
    header( "Location: $success" );
}

?>

