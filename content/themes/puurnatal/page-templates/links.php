<?php
/**
 * Template Name: Links Page
 *
 * Template for displaying a links page.
 *
 * @package wbase
 */

/**
 * No direct access.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

get_header();
?>

<section <?php post_class('post-content links'); ?> id="post-<?php the_ID(); ?>">

	<article id="<?php echo strtolower(str_replace("'", '', str_replace(')', '', str_replace('(', '', str_replace(' ', '', get_the_title()))))); ?>" class="<?php echo $imgparal; ?>puur-fullwidth fullwidth-box hundred-percent-fullwidth puur-equal-height-columns<?php echo $floatclass; ?>">
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

			<?php if ( $thumb_id ) : ?>
			<div class="puur-layout-column puur_builder_column puur_builder_column_1_3 puur-one-third puur-column-last puur-no-small-visibility 1_3 layout-image">
				<div class="puur-column-wrapper eq-block" style="background-image: url('<?php echo $thumb_url; ?>');" data-bg-url="<?php echo $url; ?>">
					<div class="puur-column-table">
						<div class="puur-column-tablecell"></div>
					</div>
					<div class="puur-clearfix"></div>
				</div>
			</div>
			<?php endif; ?>
		</div>
	</article>
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

    if( !empty($large) ): ?>
	<div title="<?php echo $title; ?>" class="<?php echo $imgparal; ?>puur-fullwidth fullwidth-box puur-parallax-fixed nonhundred-percent-fullwidth" style="background-image: url('<?php echo $large; ?>');">
		<div class="puur-builder-row puur-row"></div>
	</div>
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
                $title = $image['title'];
				$imgparal = 'parallax-img ';
			else :
				$large = '';
				$imgparal = '';
			endif;

			$thumb_id = get_post_thumbnail_id();
			if ( $thumb_id ) :
				$thumb_url = wp_get_attachment_image_src($thumb_id, 'home-img', true)[0];
				$column = 'puur-two-third';
			endif;
	?>

	<article id="<?php echo strtolower(str_replace("'", '', str_replace(')', '', str_replace('(', '', str_replace(' ', '', get_the_title()))))); ?>" class="<?php echo $imgparal; ?>puur-fullwidth fullwidth-box hundred-percent-fullwidth puur-equal-height-columns<?php echo $floatclass; ?>">
		<div class="puur-builder-row puur-row equal">
			<div class="puur-layout-column puur_builder_column puur_builder_column_2_3 puur-column-first 2_3 layout-content eq-block <?php echo $column; ?>">
				<div class="puur-column-wrapper puur-animated" data-animationtype="fadeInUp" data-animationduration="1" data-animationoffset="50%" data-bg-url="">
					<div class="puur-column-table">
						<div class="puur-column-tablecell">
							<?php the_title( '<h2 class="entry-title" itemprop="name">', '</h2>' ); ?>
							<div class="puur-sep-clear"></div>
							<div class="puur-separator sep-single sep-solid hrleft"></div>

                            <?php if( have_rows('links') ): ?>
                                <?php 
                                    $counter = 0;
                                    $totalrows = count(get_field('links'));
                                    if ( $totalrows == 1 ) : ?>

                                    <div class="puur-content-boxes content-boxes columns row puur-columns-3 puur-columns-total-3 puur-content-boxes-1 content-boxes-icon-on-top content-left" data-animationoffset="100%" style="margin-top:50px;margin-bottom:0px;">
                                    <?php while( have_rows('links') ): the_row(); 
                                        
                                        $cursus = get_sub_field('naam_cursus');
                                        $bedrijf = get_sub_field('naam_bedrijf');
                                        $telefoon = get_sub_field('telefoon');
                                        $email = get_sub_field('email');
                                        $website = get_sub_field('website');

                                        if( $telefoon ): ?>
                                        <div class="puur-column content-box-column content-box-column content-box-column-1 col-lg-4 col-md-4 col-sm-4 puur-content-box-hover  content-box-column-first-in-row">
                                            <div class="col content-wrapper link-area-link-icon icon-hover-animation-fade link-area-link-icon-hover">
                                                <div class="heading heading-with-icon icon-left">
                                                    <div class="icon">
                                                        <i class="fa fontawesome-icon fa-phone circle-yes"></i>
                                                    </div>
                                                </div>
                                                <div class="puur-clearfix"></div>
                                                <div class="content-container">
                                                    <h4><a href="tel:<?php echo $telefoon; ?>"><?php echo $telefoon; ?></a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <?php endif;
                                        if( $email ): ?>
                                        <div class="puur-column content-box-column content-box-column content-box-column-2 col-lg-4 col-md-4 col-sm-4 puur-content-box-hover ">
                                            <div class="col content-wrapper link-area-link-icon icon-hover-animation-fade">
                                                <div class="heading heading-with-icon icon-left">
                                                    <div class="icon">
                                                        <i class="fa fontawesome-icon fa-envelope circle-yes"></i>
                                                    </div>
                                                </div>
                                                <div class="puur-clearfix"></div>
                                                <div class="content-container">
                                                    <h4><a href="mailto:<?php echo $email; ?>?Subject=<?php echo $cursus; ?>%20via%20Puur%20Natal"><?php _e('Signup for', 'wbase'); ?> <?php echo $cursus; ?></a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <?php endif;
                                        if( $website ): ?>
                                        <div class="puur-column content-box-column content-box-column content-box-column-3 col-lg-4 col-md-4 col-sm-4 puur-content-box-hover  content-box-column-last content-box-column-last-in-row">
                                            <div class="col content-wrapper link-area-link-icon icon-hover-animation-fade">
                                                <div class="heading heading-with-icon icon-left">
                                                    <div class="icon">
                                                        <i class="fa fontawesome-icon fa-desktop circle-yes"></i>
                                                    </div>
                                                </div>
                                                <div class="puur-clearfix"></div>
                                                <div class="content-container">
                                                    <h4><a href="<?php echo $website; ?>" target="_blank" rel="nofollow">Website <?php echo $bedrijf; ?></a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <?php endif; ?>
                                        <div class="puur-clearfix"></div>
                                        <div class="puur-clearfix"></div>
                                        <?php endwhile; ?>
                                    </div>

                                    <?php else : ?>

                                    <div class="puur-content-boxes content-boxes columns row puur-columns-2 puur-columns-total-2 puur-content-boxes-2 content-boxes-icon-on-top content-left" data-animationoffset="100%" style="margin-top:50px;margin-bottom:0px;">

                                    <?php while( have_rows('links') ): the_row(); 
                                        
                                        $cursus = get_sub_field('naam_cursus');
                                        $bedrijf = get_sub_field('naam_bedrijf');
                                        $telefoon = get_sub_field('telefoon');
                                        $email = get_sub_field('email');
                                        $website = get_sub_field('website');
                                        ?>

                                        <div class="puur-column content-box-column content-box-column content-box-column-1 col-lg-6 col-md-6 col-sm-6 col-xs-12 puur-content-box-hover  content-box-column-first-in-row">
                                            <div class="col content-wrapper link-area-link-icon icon-hover-animation-fade">
                                                <div class="puur-clearfix"></div>
                                                <div class="content-container">
                                                    <?php if( $cursus ): ?>
                                                    <h4><strong>
                                                        <?php echo $cursus;
                                                        if( $bedrijf ): 
                                                            echo ', ' . $bedrijf;
                                                        endif; ?>
                                                    </strong></h4>
                                                    <?php endif; ?>    
                                                    <p>&nbsp;</p>
                                                    <?php if( $telefoon ): ?>
                                                    <div class="alignleft">
                                                        <i class="fa fontawesome-icon fa-phone circle-yes"></i>
                                                    </div>
                                                    <a href="tel:<?php echo $telefoon; ?>"><?php echo $telefoon; ?></a>
                                                    <p></p>
                                                    <?php endif; ?>
                                                    <?php if( $email ): ?>
                                                    <div class="alignleft">
                                                        <i class="fa fontawesome-icon fa-envelope circle-yes"></i>
                                                    </div>
                                                    <a href="mailto:<?php echo $email; ?>?Subject=<?php echo $cursus; ?>%20via%20Puur%20Natal"><?php echo $email; ?></a>
                                                    <p></p>
                                                    <?php endif; ?>
                                                    <?php if( $website ): ?>
                                                    <div class="alignleft">
                                                        <i class="fa fontawesome-icon fa-desktop circle-yes"></i>
                                                    </div>
                                                        <?php if( $bedrijf ) : ?>
                                                        <a href="<?php echo $website; ?>" target="_blank" rel="nofollow">Website <?php echo $bedrijf; ?></a>
                                                        <?php else : ?>
                                                        <a href="<?php echo $website; ?>" target="_blank" rel="nofollow">Website <?php echo $cursus; ?></a>
                                                        <?php endif; ?>
                                                    <?php endif; ?>
                                                </div>
                                            </div>
                                        </div>

                                        <?php if ( $counter == 1 ) : ?>
                                        <div class="puur-sep-clear"></div>
                                        <div class="puur-separator puur-full-width-sep sep-shadow hrleft"></div>
                                        <?php endif; ?>

                                        <?php $counter++; ?>
                                        <?php endwhile; ?>

                                    </div>
                                <?php endif; ?>
                            <?php endif; ?>

                            <?php if( have_rows('facebook') ): ?>
                            <div class="puur-column content-box-column content-box-column content-box-column-1 col-lg-12 col-md-12 col-sm-12 puur-content-box-hover content-box-column-last content-box-column-last-in-row align-center">
                                <?php while( have_rows('facebook') ): the_row(); 
                                    $naam = get_sub_field('naam');
                                    $url = get_sub_field('url');
                                    $omschrijving = get_sub_field('omschrijving');
                                ?>
                                <div class="col content-wrapper link-area-link-icon icon-hover-animation-fade">
                                    <div class="heading heading-with-icon icon-left">
                                        <div class="icon">
                                            <i style="border-color:#d36e70;border-width:1px;background-color:#d36e70;height:38px;width:38px;line-height:38px;border-radius:50%;color:#ffffff;font-size:19px;" class="fa fontawesome-icon fa-facebook circle-yes"></i>
                                        </div>
                                    </div>
                                    <div class="puur-clearfix"></div>
                                    <div class="content-container">
                                    <?php if( $naam ): ?>
                                        <h4><strong><a href="<?php echo $url; ?>" target="_blank" rel="nofollow"> <?php echo $naam; ?></a></strong></h4>
                                        <p><?php echo $omschrijving; ?></p>
                                    <?php endif; ?>
                                    </div>
                                </div>
                                <?php endwhile; ?>
                            </div>
                            <?php endif; ?>

                            <?php if( have_rows('affiliate') ): ?>
                            <div class="puur-column content-box-column content-box-column content-box-column-1 col-lg-12 col-md-12 col-sm-12 puur-content-box-hover content-box-column-last content-box-column-last-in-row align-center">
                                <?php while( have_rows('affiliate') ): the_row(); 
                                    $afnaam = get_sub_field('naam');
                                    $afurl = get_sub_field('url');
                                    $afomschrijving = get_sub_field('omschrijving');
                                ?>
                                <div class="col content-wrapper link-area-link-icon icon-hover-animation-fade">
                                    <div class="heading heading-with-icon icon-left">
                                        <div class="icon">
                                            <i style="border-color:#d36e70;border-width:1px;background-color:#d36e70;height:38px;width:38px;line-height:38px;border-radius:50%;color:#ffffff;font-size:19px;" class="fa fontawesome-icon fa-heart circle-yes"></i>
                                        </div>
                                    </div>
                                    <div class="puur-clearfix"></div>
                                    <div class="content-container">
                                    <?php if( $afnaam ): ?>
                                        <h4><strong><?php echo $afnaam; ?></strong></h4>
                                        <p><a href="<?php echo $afurl; ?>" target="_blank" rel="nofollow"> <?php echo $afomschrijving; ?></a></p>
                                    <?php endif; ?>
                                    </div>
                                </div>
                                <?php endwhile; ?>
                            </div>
                            <?php endif; ?>                            
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

	<?php 
	$counter++;
	endforeach;
	wp_reset_postdata();
	endif; ?>
</section>

<?php get_footer(); ?>