<?php
/**
 * WBase functions and definitions
 *
 * @package wbase
 */

/**
 * No direct access.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Set site owner for login.
 */
define('WBASE_LOGIN_WEBLOGIQ', false);

/**
 * Theme setup and custom theme supports.
 */
require get_template_directory() . '/inc/setup.php';

/**
 * Theme plugin activation.
 */
if ( is_admin() ) :
    require get_template_directory() . '/inc/tgm/class-tgm-plugin-activation.php';
    require get_template_directory() . '/inc/tgm/plugins.php';
endif;

/**
 * Register widget area.
 */
require get_template_directory() . '/inc/widgets.php';

/**
 * Load functions to secure WP install.
 */
require get_template_directory() . '/inc/security.php';

/**
 * Disable Dasboard widgets.
 */
require get_template_directory() . '/inc/dashboard.php';

/**
 * Enqueue scripts and styles.
 */
require get_template_directory() . '/inc/enqueue.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/pagination.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Custom comments.
 */
require get_template_directory() . '/inc/custom-comments.php';

/**
 * Load custom WordPress nav walker.
 */
require get_template_directory() . '/inc/bootstrap-wp-navwalker.php';

/**
 * Load WooCommerce functions if WooCommerce is active.
 */
if ( class_exists( 'WooCommerce' ) ) :
    require get_template_directory() . '/inc/woocommerce.php';
endif;

/**
 * Load Editor functions.
 */
require get_template_directory() . '/inc/editor.php';

/**
 * Load Custom login.
 */
require get_template_directory() . '/inc/custom-login.php';

/**
 * Duplicate post/page.
 */
require get_template_directory() . '/inc/duplicate.php';

/**
 * Register Options page.
 */
require get_template_directory() . '/inc/options.php';

/**
 * Support Rich Snippets - Schema.org
 */
require get_template_directory() . '/inc/rich-snippets.php';

/**
 * Yoast WPML support.
 */
require get_template_directory() . '/inc/yoast-wpml.php';