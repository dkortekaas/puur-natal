<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package wbase
 */

/**
 * No direct access.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

get_header(); ?>

<div class="puur-row" style="max-width:100%;">
	<div id="content" class="full-width">

		<?php if ( have_posts() ) : ?>
		<?php $counter = 1; ?>
			<?php while ( have_posts() ) : the_post(); ?>

				<article <?php post_class('post-content'); ?> id="post-<?php the_ID(); ?>">
					<?php
					$floatclass = ($counter % 2 == 0) ? ' left' : ' right';
					?>

					<div id="<?php echo strtolower(str_replace(' ', '', get_the_title())); ?>" class="puur-fullwidth fullwidth-box hundred-percent-fullwidth puur-equal-height-columns<?php echo $floatclass; ?>">
						<div class="puur-builder-row puur-row equal">
							<div class="puur-layout-column puur_builder_column puur_builder_column_2_3  puur-two-third puur-column-first 2_3 layout-content eq-block">
								<div class="puur-column-wrapper puur-animated" data-animationtype="fadeInUp" data-animationduration="1" data-animationoffset="50%" data-bg-url="">
									<div class="puur-column-table">
										<div class="puur-column-tablecell">
											<?php if ( $counter == 1 ) : ?>
											<h1 class="entry-title" itemprop="name"><?php _e('Blog','wbase'); ?></h1>
											<h2 class="entry-title" itemprop="name"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></h2>											
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
									$thumb_url = wp_get_attachment_image_src($thumb_id, 'full', true)[0];
									$thumb_title = get_post(get_post_thumbnail_id())->post_title;
								?>
								<div title="<?php echo $thumb_title; ?>" class="puur-column-wrapper eq-block" style="background-image: url('<?php echo $thumb_url; ?>');" data-bg-url="<?php echo $thumb_url; ?>">
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

			<?php endwhile; ?>

		<?php else : ?>

			<?php get_template_part( 'loop-templates/content', 'none' ); ?>

		<?php endif; ?>

		<?php //wbase_pagination(); ?>

		<?php
			global $wp_query;
 
			$total_pages = $wp_query->max_num_pages;
		
			if ($total_pages > 1) :
			echo '<div class="pagination">';
				$current_page = max(1, get_query_var('paged'));
		
				echo paginate_links(array(
					'base' => get_pagenum_link(1) . '%_%',
					'format' => 'page/%#%',
					'current' => $current_page,
					'total' => $total_pages,
				));
			echo '</div>';
			endif;
		?>

	</div>
</div>

<?php get_footer(); ?>