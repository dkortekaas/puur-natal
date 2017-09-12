<?php
$social = get_option('wb_social_options');
$facebook_url = $social['wb_facebook_url'];
$twitter_url = $social['wb_twitter_url'];
$linkedin_url = $social['wb_linkedin_url'];
$google_url = $social['wb_googleplus_url'];
$instagram_url = $social['wb_instagram_url'];
$pinterest_url = $social['wb_pinterest_url'];
$youtube_url = $social['wb_youtube_url'];
$mail_adrress = $social['wb_email_url'];
?>

<div class="puur-social-networks boxed-icons">
    <div class="puur-social-networks-wrapper">
        <?php
        if (isset($facebook_url) && !empty($facebook_url)) :
            echo '<a class="puur-social-network-icon puur-tooltip puur-facebook puur-icon-facebook" href="'. esc_url($facebook_url) .'" target="_blank" rel="nofollow noopener noreferrer" data-placement="top" data-title="Facebook" data-toggle="tooltip" title="Facebook">';
                echo '<span class="screen-reader-text">Facebook</span>';
            echo '</a>';
        endif;
        if (isset($twitter_url) && !empty($twitter_url)) :
            echo '<a class="puur-social-network-icon puur-tooltip puur-twitter puur-icon-twitter" href="'. esc_url($twitter_url) .'" target="_blank" rel="nofollow noopener noreferrer" data-placement="top" data-title="Twitter" data-toggle="tooltip" title="Twitter">';
                echo '<span class="screen-reader-text">Twitter</span>';
            echo '</a>';
        endif;
        if (isset($google_url) && !empty($google_url)) :
            echo '<a class="puur-social-network-icon puur-tooltip puur-googleplus puur-icon-googleplus" href="'. esc_url($google_url) .'" target="_blank" rel="nofollow noopener noreferrer" data-placement="top" data-title="Google+" data-toggle="tooltip" title="Google+">';
                echo '<span class="screen-reader-text">Google+</span>';
            echo '</a>';
        endif;
        if (isset($linkedin_url) && !empty($linkedin_url)) :
            echo '<a class="puur-social-network-icon puur-tooltip puur-linkedin puur-icon-linkedin" href="'. esc_url($linkedin_url) .'" target="_blank" rel="nofollow noopener noreferrer" data-placement="top" data-title="LinkedIn" data-toggle="tooltip" title="LinkedIn">';
                echo '<span class="screen-reader-text">LinkedIn</span>';
            echo '</a>';
        endif;
        if (isset($pinterest_url) && !empty($pinterest_url)) :
            echo '<a class="puur-social-network-icon puur-tooltip puur-pinterest puur-icon-pinterest" href="'. esc_url($pinterest_url) .'" target="_blank" rel="nofollow noopener noreferrer" data-placement="top" data-title="Pinterest" data-toggle="tooltip" title="Pinterest">';
                echo '<span class="screen-reader-text">Pinterest</span>';
            echo '</a>';
        endif;
        if (isset($instagram_url) && !empty($instagram_url)) :
            echo '<a class="puur-social-network-icon puur-tooltip puur-instagram puur-icon-instagram" href="'. esc_url($instagram_url) .'" target="_blank" rel="nofollow noopener noreferrer" data-placement="top" data-title="Instagram" data-toggle="tooltip" title="Instagram">';
                echo '<span class="screen-reader-text">Instagram</span>';
            echo '</a>';
        endif;
        if (isset($youtube_url) && !empty($youtube_url)) :
            echo '<a class="puur-social-network-icon puur-tooltip puur-youtube puur-icon-youtube" href="'. esc_url($youtube_url) .'" target="_blank" rel="noopener noreferrer" data-placement="top" data-title="Youtube" data-toggle="tooltip" title="Youtube">';
                echo '<span class="screen-reader-text">Youtube</span>';
            echo '</a>';
        endif;
        if (isset($mail_adrress) && !empty($mail_adrress)) :
            if (strpos($mail_adrress, '@') !== false) :
                echo '<a class="puur-social-network-icon puur-tooltip puur-mail puur-icon-mail" href="mailto:'. esc_url($mail_adrress) .'" target="_blank" rel="noopener noreferrer" data-placement="top" data-title="E-mail" data-toggle="tooltip" title="E-mail">';
                    echo '<span class="screen-reader-text">E-mail</span>';
                echo '</a>';
            else:
                echo '<a class="puur-social-network-icon puur-tooltip puur-mail puur-icon-mail" href="'. esc_url($mail_adrress) .'" target="_blank" rel="noopener noreferrer" data-placement="top" data-title="Contact" data-toggle="tooltip" title="Contact">';
                    echo '<span class="screen-reader-text">Contact</span>';
                echo '</a>';
            endif;
        endif;
        ?>
    </div>
</div>