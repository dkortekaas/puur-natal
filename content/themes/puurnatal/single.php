<?php
/**
 * The template for displaying all single posts.
 *
 * @package wbase
 */

/**
 * No direct access.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

get_header();
$remove[] = " ";
$remove[] = "'";
$remove[] = '"';
$remove[] = "-";
$remove[] = "(";
$remove[] = ")";
$remove[] = "’";
?>

<section <?php post_class('post-content'); ?> id="post-<?php the_ID(); ?>">
	<?php 
		$floatclass = $imgparal = $large = $thumb_id = '';	
		$size = 'large';
		$image = get_field('parallax_image', $post->ID);
		if( !empty($image) ):
			$large = $image['sizes'][ $size ];
			$imgparal = 'parallax-img ';
			$title = $image['title'];
		else :
			$large = '';
			$imgparal = '';
		endif;
	?>

	<article id="<?php echo strtolower(str_replace( $remove, "", get_the_title())); ?>" class="<?php echo $imgparal; ?>puur-fullwidth fullwidth-box hundred-percent-fullwidth puur-equal-height-columns<?php echo $floatclass; ?>">
		<div class="puur-builder-row puur-row">
			<div class="puur-layout-column puur_builder_column puur_builder_column_2_3 puur-column-first 2_3 layout-content eq-block">
				<div class="puur-column-wrapper puur-animated" data-animationtype="fadeInUp" data-animationduration="1" data-animationoffset="50%" data-bg-url="">
					<div class="puur-column-table">
						<div class="puur-column-tablecell">
							<?php the_title( '<h1 class="entry-title" itemprop="name">', '</h1>' ); ?>
							<div class="puur-sep-clear"></div>
							<div class="puur-separator sep-single sep-solid hrleft"></div>

							<?php 
							if (get_field('hide_thumbnail') != 1) :
							$thumb_id = get_post_thumbnail_id();
							if ( $thumb_id ) :
								$thumb_url = wp_get_attachment_image_src($thumb_id, 'blog-img', true)[0];
								$thumb_title = get_post($thumb_id)->post_title; ?>
						
								<img src="<?php echo $thumb_url; ?>" class="img-responsive"><br/><br/>
							<?php endif;
							endif; ?>

							<div class="puur-clearfix"></div>
							<div class="puur-sep-clear"></div>
							<?php the_content(); ?>

							<?php get_template_part( 'global-templates/social', 'share' ); ?>
						</div>
					</div>
					<div class="puur-clearfix"></div>
					<div class="puur-separator puur-full-width-sep sep-shadow hrleft"></div>
				</div>
			</div>
		</div>
	</article>
	<?php if( !empty($large) ): ?>
	<div title="<?php echo $title; ?>" class="<?php echo $imgparal; ?>puur-fullwidth fullwidth-box puur-parallax-fixed nonhundred-percent-fullwidth" style="background-image: url('<?php echo $large; ?>');">
		<div class="puur-builder-row puur-row"></div>
	</div>
	<?php endif; ?>	
</section>

<?php get_footer(); ?>