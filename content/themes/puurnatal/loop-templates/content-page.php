<?php
/**
 * Partial template for content in page.php
 *
 * @package wbase
 */

/**
 * No direct access.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

?>

<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">

	<header class="entry-header">

		<?php the_title( '<h1 class="entry-title" itemprop="name">', '</h1>' ); ?>

	</header>

	<?php echo get_the_post_thumbnail( $post->ID, 'large', array('itemprop' => 'image') ); ?>

	<div class="entry-content" itemprop="mainContentOfPage">

		<?php the_content(); ?>

		<?php
		wp_link_pages( array(
			'before' => '<div class="page-links">' . __( 'Pages:', 'wbase' ),
			'after'  => '</div>',
		) );
		?>

	</div>

	<footer class="entry-footer">

		<?php edit_post_link( __( 'Edit', 'wbase' ), '<span class="edit-link">', '</span>' ); ?>

	</footer>

</article>