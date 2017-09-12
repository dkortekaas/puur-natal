<?php
    $isSecure = false;
    if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') :
        $isSecure = true;
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https' || !empty($_SERVER['HTTP_X_FORWARDED_SSL']) && $_SERVER['HTTP_X_FORWARDED_SSL'] == 'on') :
        $isSecure = true;
    endif;
    $REQUEST_PROTOCOL = $isSecure ? 'https://' : 'http://';
    wp_redirect( $REQUEST_PROTOCOL . $_SERVER['HTTP_HOST'], 301 ); exit;
?>