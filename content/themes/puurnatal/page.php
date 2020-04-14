<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package wbase
 */

/**
 * No direct access.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

get_header();
$maintitle = '';
$remove[] = " ";
$remove[] = "'";
$remove[] = '"';
$remove[] = "-";
$remove[] = "(";
$remove[] = ")";
$remove[] = "’";
$remove[] = "&";
$remove[] = "#038;";
$remove[] = "#8217;";

?>

<section <?php post_class('post-content'); ?> id="post-<?php the_ID(); ?>">
	<?php 
		if (get_field('hide_thumbnail') != 1) :
			$thumb_id = get_post_thumbnail_id();
			if( !empty($thumb_id) ):
				$thumb_url = wp_get_attachment_image_src($thumb_id, 'home-img', true)[0];
				$thumb_title = get_post($thumb_id)->post_title;
				$column = 'puur-two-third';
			endif;	
		endif;
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

	<?php if ((strtolower(get_the_title()) == 'de verloskundigenpraktijk' ) || (strtolower(get_the_title()) == 'aanmelden' )) :
		$maintitle = get_the_title();
	else : ?>

		<article id="<?php echo strtolower(str_replace( $remove, "", get_the_title())); ?>" class="<?php echo $imgparal; ?>puur-fullwidth fullwidth-box hundred-percent-fullwidth puur-equal-height-columns<?php echo $floatclass; ?>">
			<div class="puur-builder-row puur-row equal">
				<div class="puur-layout-column puur_builder_column puur_builder_column_2_3 puur-column-first 2_3 layout-content eq-block <?php echo $column; ?>">
					<div class="puur-column-wrapper puur-animated" data-animationtype="fadeInUp" data-animationduration="1" data-animationoffset="50%" data-bg-url="">
						<div class="puur-column-table">
							<div class="puur-column-tablecell">
								<?php the_title( '<h1 class="entry-title" itemprop="name">', '</h1>' ); ?>
								<div class="puur-sep-clear"></div>
								<div class="puur-separator sep-single sep-solid hrleft"></div>
								<?php the_content(); ?>
							</div>
						</div>
						<div class="puur-clearfix"></div>
						<div class="puur-separator puur-full-width-sep sep-shadow hrleft"></div>
					</div>
				</div>

				<?php 
				if (get_field('hide_thumbnail') != 1) :
				if( !empty($thumb_id) ): ?>
				<div class="puur-layout-column puur_builder_column puur_builder_column_1_3 puur-one-third puur-column-last puur-no-small-visibility 1_3 layout-image">
					<div title="<?php echo $thumb_title; ?>" class="puur-column-wrapper eq-block" style="background-image: url('<?php echo $thumb_url; ?>');" data-bg-url="<?php echo $url; ?>">
						<div class="puur-column-table">
							<div class="puur-column-tablecell"></div>
						</div>
						<div class="puur-clearfix"></div>
					</div>
				</div>
				<?php endif;
				endif; ?>
			</div>
		</article>
		<?php if( !empty($large) ): ?>
		<div title="<?php echo $title; ?>" class="<?php echo $imgparal; ?>puur-fullwidth fullwidth-box puur-parallax-fixed nonhundred-percent-fullwidth" style="background-image: url('<?php echo $large; ?>');">
			<div class="puur-builder-row puur-row"></div>
		</div>
		<?php endif; ?>	
	<?php endif; ?>

	<?php
	$args = array(
		'post_parent' => get_the_ID(),
		'post_type'   => 'page',
		'numberposts' => -1,
		'post_status' => 'any',
		'orderby' => 'menu_order'
	);
	$children = get_children( $args );

	if( $children ):
		$counter = 1;
		$floatclass = $imgparal = $large = $thumb_id = '';	
		$size = 'large';
		foreach( $children as $post ) : setup_postdata( $post ); 
			$column = 'puur-three-third';
			$floatclass = ($counter % 2 == 0) ? ' left' : ' right';
			$image = get_field('parallax_image', $post->ID);
			if( !empty($image) ):
				$large = $image['sizes'][ $size ];
				$imgparal = 'parallax-img ';
				$title = $image['title'];
			else :
				$large = '';
				$imgparal = '';
			endif;

			if (get_field('hide_thumbnail') != 1) :
				$thumb_id = get_post_thumbnail_id();
				if ( get_the_title() == 'Locatie'  ) :
					$column = 'puur-two-third';
				elseif ( $thumb_id ) :
					$thumb_url = wp_get_attachment_image_src($thumb_id, 'full', true)[0];
					$thumb_title = get_post($thumb_id)->post_title;
					$column = 'puur-two-third';
				endif;
			endif;
	?>

	<article id="<?php echo strtolower(str_replace( $remove, "", get_the_title())); ?>" class="<?php echo $imgparal; ?>puur-fullwidth fullwidth-box hundred-percent-fullwidth puur-equal-height-columns<?php echo $floatclass; ?>">
		<div class="puur-builder-row puur-row equal">
			<div class="puur-layout-column puur_builder_column puur_builder_column_2_3 puur-column-first 2_3 layout-content eq-block <?php echo $column; ?>">
				<div class="puur-column-wrapper puur-animated" data-animationtype="fadeInUp" data-animationduration="1" data-animationoffset="50%" data-bg-url="">
					<div class="puur-column-table">
						<div class="puur-column-tablecell">
							<?php if ($maintitle != '') :
								echo '<h1 class="entry-title" itemprop="name">' . $maintitle . '</h1>'; 
								echo '<div class="puur-sep-clear"></div>';
								echo '<div class="puur-separator sep-single sep-solid hrleft"></div>';
								the_title( '<h2 class="entry-title" itemprop="name">', '</h2>' );
								$maintitle = '';
							else :
								the_title( '<h2 class="entry-title" itemprop="name">', '</h2>' );
								echo '<div class="puur-sep-clear"></div>';
								echo '<div class="puur-separator sep-single sep-solid hrleft"></div>';
							endif; ?>
							<?php the_content(); ?>

							<?php if( have_rows('tabs') ): ?>
								<div class="puur-tabs puur-tabs-1 classic vertical-tabs">
									<div class="nav">
										<ul class="nav-tabs">
										<?php while( have_rows('tabs') ): the_row(); 
											$title = get_sub_field('title');
										?>

										<li>
										<?php if( $title ): ?>
											<a class="tab-link" data-toggle="tab" id="puur-tab-<?php echo strtolower(str_replace( $remove, "", $title)); ?>" href="#tab-<?php echo strtolower(str_replace( $remove, "", $title)); ?>">
												<h4 class="puur-tab-heading"><?php echo $title; ?></h4>
											</a>            
										<?php endif; ?>
										</li>

										<?php endwhile; ?>
										</ul>
									</div>
								
									<div class="tab-content">
										<?php while( have_rows('tabs') ): the_row(); 
											$title = get_sub_field('title');
											$text = get_sub_field('text');
										?>

										<?php if( $title ): ?>
										<div class="nav puur-mobile-tab-nav">
											<ul class="nav-tabs">
												<li>
													<a class="tab-link" data-toggle="tab" id="puur-tab-<?php echo strtolower(str_replace( $remove, "", $title)); ?>" href="#tab-<?php echo strtolower(str_replace( $remove, "", $title)); ?>">
														<h4 class="puur-tab-heading"><?php echo $title; ?></h4>
													</a>
												</li>
											</ul>
										</div>
										<div class="tab-pane fade in" id="tab-<?php echo strtolower(str_replace( $remove, "", $title)); ?>">
											<?php echo $text; ?>
										</div>
										<?php endif; ?>

										<?php endwhile; ?>

									</div>
								</div>

							<?php endif; ?>

							<?php if ( get_field('text') ) :
								the_field('text');
							endif; ?>

						</div>
					</div>
					<div class="puur-clearfix"></div>
					<div class="puur-separator puur-full-width-sep sep-shadow hrleft"></div>
				</div>
			</div>

			<?php if ( get_the_title() == 'Locatie'  || get_the_title() == 'Location' ) : ?>
			<div class="puur-layout-column puur_builder_column puur_builder_column_1_3 puur-one-third puur-column-last puur-no-small-visibility 1_3 layout-image">
				<div title="<?php echo $thumb_title; ?>" class="puur-column-wrapper eq-block">
					<div class="puur-column-table">
						<div class="puur-column-tablecell">
							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10076.762111727587!2d5.686289!3d50.846156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0e9b0ee812aa7%3A0xca6ec4fdddbe4e8d!2sVerloskundigenpraktijk+Puur+Natal!5e0!3m2!1sen!2snl!4v1492692038416" width="550" height="550" frameborder="0" style="border:0" allowfullscreen></iframe>
						</div>
					</div>
					<div class="puur-clearfix"></div>
				</div>
			</div>
			<?php elseif (get_field('hide_thumbnail') != 1) :
			if  ( $thumb_id ) : ?>
			<div title="<?php echo $thumb_title; ?>" class="puur-layout-column puur_builder_column puur_builder_column_1_3 puur-one-third puur-column-last puur-no-small-visibility 1_3 layout-image">
				<div class="puur-column-wrapper eq-block" style="background-image: url('<?php echo $thumb_url; ?>');" data-bg-url="<?php echo $url; ?>">
					<div class="puur-column-table">
						<div class="puur-column-tablecell"></div>
					</div>
					<div class="puur-clearfix"></div>
				</div>
			</div>
			<?php endif;
			endif; ?>
		</div>
	</article>
	<?php if( !empty($large) ): ?>
	<div title="<?php echo $title; ?>" class="<?php echo $imgparal; ?>puur-fullwidth fullwidth-box puur-parallax-fixed nonhundred-percent-fullwidth" style="background-image: url('<?php echo $large; ?>');">
		<div class="puur-builder-row puur-row"></div>
	</div>
	<?php endif; ?>

	<?php 
	$counter++;
	endforeach;
	wp_reset_postdata();
	endif; ?>
</section>

<?php get_footer(); ?>