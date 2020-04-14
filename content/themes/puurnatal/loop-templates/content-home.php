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
	$posts = get_posts(array(
		'posts_per_page'	=> -1,
		'post_type'			=> 'page',
		'meta_query'	=> array(
			'relation'		=> 'AND',
			array(
				'key'	  	=> 'on_homepage',
				'value'	  	=> '1',
				'compare' 	=> '=',
			),
		),
	));

	if( $posts ):
	$counter = 1;
	foreach( $posts as $post ) : setup_postdata( $post ); 
		$floatclass = ($counter % 2 == 0) ? ' left' : ' right';
	?>

	<div id="<?php echo strtolower(str_replace(' ', '', get_the_title())); ?>" class="puur-fullwidth fullwidth-box hundred-percent-fullwidth puur-equal-height-columns<?php echo $floatclass; ?>">
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
	$counter++;
	endforeach;
	wp_reset_postdata();
	endif; ?>
</article>

<?php
$args = array( 'numberposts' => '1' );
$recent_posts = wp_get_recent_posts( $args );
if ( $recent_posts ) : 
foreach( $recent_posts as $recent ) : 
$floatblog = ($floatclass == ' right') ? ' left' : ' right';
?>
<article>
	<div id="<?php echo strtolower(str_replace(' ', '', $recent["post_title"])); ?>" class="post-content puur-fullwidth fullwidth-box hundred-percent-fullwidth puur-equal-height-columns<?php echo $floatblog; ?>">
		<div class="puur-builder-row puur-row equal">
			<div class="puur-layout-column puur_builder_column puur_builder_column_2_3  puur-two-third puur-column-first 2_3 layout-content eq-block">
				<div class="puur-column-wrapper puur-animated" data-animationtype="fadeInUp" data-animationduration="1" data-animationoffset="50%" data-bg-url="">
					<div class="puur-column-table">
						<div class="puur-column-tablecell">
							<?php
							echo '<h1 class="entry-title" itemprop="name"><a href="'. get_permalink($recent["ID"]) .'" title="'. $recent["post_title"] .'">'. $recent["post_title"] .'</a></h1>';
							echo '<div class="puur-sep-clear"></div>';
							echo '<div class="puur-separator sep-single sep-solid hrleft"></div>';
							echo '<p>'. apply_filters('the_content', $recent["post_excerpt"]) .'</p> ';

							echo '<div class="puur-button-wrapper puur-aligncenter">';
								echo '<a class="puur-button button-flat button-round button-large button-custom button-1" target="_self" href="'. get_permalink($recent["ID"]) .'">';
									echo '<span class="puur-button-text">'. __('Read More', 'wbase') .'</span>';
								echo '</a>';
							echo '</div>';
							?>
						</div>
					</div>
				</div>
				<div class="puur-clearfix"></div>
			</div>
		
			<div class="puur-layout-column puur_builder_column puur_builder_column_1_3  puur-one-third puur-column-last 1_3 layout-image">
				<?php 				
					$thumb_url = get_the_post_thumbnail_url($recent["ID"], 'home-img', true);
				?>
				<div title="<?php echo $recent["post_title"]; ?>" class="puur-column-wrapper eq-block" style="background-image: url('<?php echo $thumb_url; ?>');" data-bg-url="<?php echo $thumb_url; ?>">
					<div class="puur-column-table">
						<div class="puur-column-tablecell"></div>
					</div>
					<div class="puur-clearfix"></div>
				</div>
			</div>
		</div>
	</div>
</article>
<?php
endforeach;
wp_reset_query();
endif; ?>