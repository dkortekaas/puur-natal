<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package wbase
 */

/**
 * No direct access.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

$container = get_theme_mod( 'wbase_container_type' );
?>
<!DOCTYPE html>
<html <?php html_tag_schema(); ?> <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title" content="<?php bloginfo( 'name' ); ?> - <?php bloginfo( 'description' ); ?>">
	<?php get_template_part( 'global-templates/head', 'favicons' ); ?>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div id="wrapper">
		<div id="home"></div>

		<div id="side-header-sticky"></div>
		<div id="side-header" class="clearfix puur-mobile-menu-design-modern puur-sticky-logo-1 puur-mobile-logo-1 puur-sticky-menu-1 header-shadow">
			<div class="side-header-wrapper">
				<div class="side-header-content puur-logo-center puur-mobile-logo-1">

                    <div class="puur-logo">
                        <a class="puur-logo-link" href="<?php echo esc_url( home_url( '/' ) ); ?>">
                            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Logo-Puur-Natal-header-non-retina2.png" width="640" height="320" alt="<?php bloginfo( 'name' ); ?>" class="puur-logo-1x puur-standard-logo" />

                            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Logo-Puur-Natal-header-retina.png" width="640" height="320" alt="<?php bloginfo( 'name' ); ?>" class="puur-standard-logo puur-logo-2x" />
                        </a>
                    </div>
                </div>
                <div class="puur-main-menu-container puur-logo-menu-center">
                    <nav class="puur-main-menu">
						<?php wp_nav_menu(
							array(
								'theme_location'  => 'primary',
								'container_class' => 'puur-main-menu',
								'container_id'    => 'puur-main-menu',
								'menu_class'      => 'puur-menu',
								'fallback_cb'     => '',
								'menu_id'         => 'menu-main-menu',
								'walker'          => new WP_Bootstrap_Navwalker(),
							)
						); ?>
						<ul>
 							<li class="puur-custom-menu-item puur-main-menu-search puur-last-menu-item">
								 <a class="puur-main-menu-icon"></a>
								 <div class="puur-custom-menu-item-contents">
									 <form role="search" class="searchform" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
										<div class="search-table">
											<div class="search-field">
												<input type="text" value="" name="s" class="s" placeholder="<?php esc_attr_e( 'Search &hellip;', 'wbase' ); ?>">
											</div>
											<div class="search-button">
												<input type="submit" class="searchsubmit" value="">
											</div>
										</div>
									</form>
   								</div>
							</li>
						</ul>
                    </nav>
                    <div class="puur-mobile-menu-icons">
						<a href="#" class="puur-icon puur-icon-bars"></a>
						<?php do_action('icl_language_selector'); ?>
					</div>

					<nav class="puur-mobile-nav-holder"></nav>
				</div>

                <div class="side-header-content side-header-content-1-2">
                    <div class="side-header-content-2 puur-clearfix">
                        <div class="puur-social-links-header">
						<?php
							$social = get_option('wb_social_options');
							if ( $social['wb_sidebar_social_icons']) :
								get_template_part( 'global-templates/social', 'media' );
							endif;
						?>
                        </div>
                    </div>
					<?php do_action('icl_language_selector'); ?>
                </div>

			</div>
			<div class="side-header-background"></div>
			<div class="side-header-border"></div>
		</div>

		<?php if ( is_front_page() ) : ?>
		<div id="sliders-container">
			<div class="puur-slider-container puur-slider-7 -container">
				<div class="tfs-slider flexslider main-flex">
					<div class="slide-content-container slide-content-left">
						<div class="slide-content">
							<div class="heading ">
								<div class="puur-title-sc-wrapper">
									<div class="puur-title title puur-sep-none puur-title-size-two puur-border-below-title">
										<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Logo_PuurNatal_Defenitief-3-e1457540422646.png" alt="Logo Puur Natal" draggable="false">
									</div>
								</div>
							</div>
						</div>
					</div>
					<?php 
						$bgimage = get_field('background_image');
						if( !empty($bgimage) ): 
							// vars
							$url = $bgimage['url'];
							$title = $bgimage['title'];

							// background size
							$size = 'background';
							$thumb = $bgimage['sizes'][ $size ];
						else:
							$title = get_bloginfo( 'name' );
							$url = get_stylesheet_directory_uri(). '/assets/images/happy-baby-header.jpg';
						endif; 
					?>
					<div class="background background-image" title="<?php echo $title; ?>" style="background-image: url(<?php echo $url; ?>);">
					</div>
				</div>
			</div>
		</div>
		<?php endif; ?>
        <div id="main" class="clearfix width-100">