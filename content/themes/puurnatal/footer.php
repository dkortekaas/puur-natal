<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package wbase
 */

/**
 * No direct access.
 */
if ( ! defined( 'ABSPATH' ) ) exit;
?>

    </div>
    <a class="puur-one-page-text-link puur-page-load-link"></a>
    <?php
    if (strpos($_SERVER['REQUEST_URI'], "aanmelden") === false) :
        $cta = get_option('wb_cta_options');
        if ( $cta['wb_cta_bgimage']) :
            $ctabgimage = ' style="background-image: url('. $cta['wb_cta_bgimage'] . ')"';
        endif;
    ?>
    <div class="cta puur-fullwidth fullwidth-box puur-parallax-fixed nonhundred-percent-fullwidth"<?php echo $ctabgimage; ?>>
        <div class="overlay"></div>
        <div class="puur-builder-row puur-row ">
            <div class="puur-layout-column puur_builder_column puur_builder_column_1_1  puur-one-full puur-column-last 1_1">
			    <div class="puur-column-wrapper">
                    <?php
                    if ( $cta['wb_cta_text']) :
                        echo '<p>'. $cta['wb_cta_text'] . '</p>';
                    endif;
                    if ( $cta['wb_cta_link']) :
                    ?>
				    <div class="puur-button-wrapper puur-aligncenter">
                        <a class="puur-button button-flat button-round button-large button-custom button-1" target="_self" href="<?php echo  $cta['wb_cta_link']; ?>">
                            <span class="puur-button-text"><?php _e('Register', 'wbase'); ?></span>
                        </a>
                    </div>
                    <?php endif; ?>
                    <div class="puur-clearfix"></div>
			    </div>
		    </div>
        </div>
    </div>
    <?php endif; ?>

    <div class="puur-footer">
    <?php $address = get_option('wb_display_options'); ?>
        <footer class="puur-footer-widget-area puur-widget-area puur-footer-widget-area-center">
            <div class="puur-row">
                <div class="puur-columns puur-columns-1 puur-widget-area">

                    <div class="puur-column puur-column-last col-lg-12 col-md-12 col-sm-12">
                        <div id="text-6" class="puur-footer-widget-column widget widget_text">
                            <div class="textwidget">
                                <div class="puur-fullwidth fullwidth-box nonhundred-percent-fullwidth">
                                    <div class="puur-builder-row puur-row ">
                                        <div class="puur-layout-column puur_builder_column puur_builder_column_1_1  puur-one-full puur-column-last 1_1">
                                            <div class="puur-column-wrapper">
                                                <div class="puur-column-table">
                                                    <div class="puur-column-tablecell">
                                                        <div class="puur-content-boxes content-boxes columns row puur-columns-3 puur-columns-total-3 puur-content-boxes-1 content-boxes-icon-on-top content-left" data-animationOffset="100%">
                                                            <div class="puur-column content-box-column content-box-column content-box-column-1 col-lg-4 col-md-4 col-sm-4 puur-content-box-hover  content-box-column-first-in-row">
                                                                <div class="col content-wrapper link-area-link-icon icon-hover-animation-pulsate">
                                                                    <div class="heading heading-with-icon icon-left">
                                                                        <div class="icon">
                                                                            <i class="fa fontawesome-icon fa-home circle-yes"></i>
                                                                        </div>
                                                                        <h2 class="content-box-heading"><?php _e('Address', 'wbase'); ?></h2>
                                                                    </div>
                                                                    <div class="puur-clearfix"></div>
                                                                    <?php if ( $address['wb_address'] && $address['wb_zipcode_city']) : ?>
                                                                    <div class="content-container"><?php echo $address['wb_address']; ?><br> <?php echo $address['wb_zipcode_city']; ?></div>
                                                                    <?php endif; ?>
                                                                </div>
                                                            </div>
                                                            <div class="puur-column content-box-column content-box-column content-box-column-2 col-lg-4 col-md-4 col-sm-4 puur-content-box-hover">
                                                                <div class="col content-wrapper link-area-link-icon icon-hover-animation-pulsate">
                                                                    <div class="heading heading-with-icon icon-left">
                                                                        <div class="icon">
                                                                            <i class="fa fontawesome-icon fa-phone circle-yes"></i>
                                                                        </div>
                                                                        <h2 class="content-box-heading"><?php _e('Phone numbers', 'wbase'); ?></h2>
                                                                    </div>
                                                                    <div class="puur-clearfix"></div>
                                                                    <div class="content-container">
                                                                        <?php if ( $address['wb_phone_1'] ) : ?>
                                                                        <div class="col-xs-6"><?php _e('Practice', 'wbase'); ?></div>
                                                                        <?php endif; ?>
                                                                        <?php if ( $address['wb_phone_2'] ) : ?>
                                                                        <div class="col-xs-6"><?php _e('Emergency', 'wbase'); ?></div>
                                                                        <?php endif; ?>
                                                                        <?php if ( $address['wb_phone_1'] ) : ?>
                                                                        <div class="col-xs-6"><a href="tel:<?php echo $address['wb_phone_1']; ?>"><?php echo $address['wb_phone_1']; ?></a></div>
                                                                        <?php endif; ?>
                                                                        <?php if ( $address['wb_phone_2'] ) : ?>
                                                                        <div class="col-xs-6"><a href="tel:<?php echo $address['wb_phone_2']; ?>"><?php echo $address['wb_phone_2']; ?></a></div>
                                                                        <?php endif; ?>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="puur-column content-box-column content-box-column content-box-column-3 col-lg-4 col-md-4 col-sm-4 puur-content-box-hover content-box-column-last content-box-column-last-in-row">
                                                                <div class="col content-wrapper link-area-link-icon icon-hover-animation-pulsate">
                                                                    <div class="heading heading-with-icon icon-left">
                                                                        <div class="icon">
                                                                            <i class="fa fontawesome-icon fa-envelope circle-yes"></i>
                                                                        </div>
                                                                        <h2 class="content-box-heading"><?php _e('Email', 'wbase'); ?></h2>
                                                                    </div>
                                                                    <div class="puur-clearfix"></div>
                                                                    <?php if ( $address['wb_email'] ) : ?>
                                                                    <div class="content-container"><?php _e('Click', 'wbase'); ?> <a href="<?php echo $address['wb_email']; ?>"><?php _e('here', 'wbase'); ?></a> <?php _e('to sent an email', 'wbase'); ?></div>
                                                                    <?php endif; ?>
                                                                </div>
                                                            </div>
                                                            <div class="puur-clearfix"></div>
                                                            <div class="puur-clearfix"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="puur-clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="clear:both;"></div>
                        </div>
                    </div>

                    <div class="puur-clearfix"></div>
                </div>
            </div>
        </footer>

        <footer id="footer" class="puur-footer-copyright-area puur-footer-copyright-center">
            <div class="puur-row">

                    <div class="puur-social-links-footer xs-visible">
                    <?php 
                        $social = get_option('wb_social_options');
                        if ( $social['wb_footer_social_icons']) :
                            get_template_part( 'global-templates/social', 'media' );
                        endif;
                    ?>
                    </div>

                <div class="puur-copyright-content">

                    <div class="puur-copyright-notice">
                        <div>Copyright ©
                            <script>document.write(new Date().getFullYear());</script>
                            <?php
                                $footer = get_option('wb_display_options');
                                if ( $footer['wb_copyright_footer']) :
                                    echo $footer['wb_copyright_footer'];
                                endif;
                            ?>                            
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    </div>
</div>

<?php wp_footer(); ?>
</body>
</html>