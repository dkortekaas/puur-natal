<?php
/**
 * Template Name: Blog Page
 *
 * @package wbase
 */

/**
 * No direct access.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

get_header();
?>


<div class="puur-row" style="max-width:100%;">
	<div id="content" class="full-width">

		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'loop-templates/content', 'blog' ); ?>

		<?php endwhile; ?>

	</div>
</div>

<?php get_footer(); ?>