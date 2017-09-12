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

<article <?php post_class('post-content'); ?> id="post-<?php the_ID(); ?>">
	<?php
	//$counter = 1;
	//$floatclass = ($counter % 2 == 0) ? ' left' : ' right';
	?>

	<div id="<?php echo strtolower(str_replace(' ', '', get_the_title())); ?>" class="<?php echo $imgparal; ?>puur-fullwidth fullwidth-box hundred-percent-fullwidth puur-equal-height-columns<?php echo $floatclass; ?>">
		<div class="puur-builder-row puur-row equal">
			<div class="puur-layout-column puur_builder_column puur_builder_column_2_3  puur-two-third puur-column-first 2_3 layout-content eq-block">
				<div class="puur-column-wrapper puur-animated" data-animationtype="fadeInUp" data-animationduration="1" data-animationoffset="50%" data-bg-url="">
					<div class="puur-column-table">
						<div class="puur-column-tablecell">
							<?php if ( $counter == 1 ) : ?>
							<?php $home_title = get_the_title( get_option('page_on_front') );
							echo '<h1 class="entry-title" itemprop="name"><a href="'. get_the_permalink() .'" title="'. $home_title .'">'. $home_title .'</a></h1>'; ?>
							<?php else : ?>
							<h2 class="entry-title" itemprop="name"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></h2>
							<?php endif; ?>
							<div class="puur-sep-clear"></div>
							<div class="puur-separator sep-single sep-solid hrleft"></div>
							<?php the_excerpt(); ?>
							<div class="puur-button-wrapper puur-aligncenter">
								<a class="puur-button button-flat button-round button-large button-custom button-1" target="_self" href="<?php the_permalink(); ?>">
									<span class="puur-button-text"><?php _e('Read More','wbase'); ?></span>
								</a>
							</div>
						</div>
					</div>
					<div class="puur-clearfix"></div>
				</div>
			</div>
			
			<div class="puur-layout-column puur_builder_column puur_builder_column_1_3  puur-one-third puur-column-last 1_3 layout-image">
				<?php 				
					$thumb_id = get_post_thumbnail_id();
					$thumb_url = wp_get_attachment_image_src($thumb_id, 'home-img', true)[0];
					$thumb_title = get_post(get_post_thumbnail_id())->post_title;
				?>
				<div title="<?php echo $thumb_title; ?>" class="puur-column-wrapper eq-block" style="background-image: url('<?php echo $thumb_url; ?>');" data-bg-url="<?php echo $url; ?>">
					<div class="puur-column-table">
						<div class="puur-column-tablecell"></div>
					</div>
					<div class="puur-clearfix"></div>
				</div>
			</div>
		</div>
	</div>
	<?php 
	$counter++; ?>
</article>