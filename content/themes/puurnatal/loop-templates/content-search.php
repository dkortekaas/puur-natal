<?php
/**
 * Search results partial template.
 *
 * @package wbase
 */

/**
 * No direct access.
 */
if ( ! defined( 'ABSPATH' ) ) exit;
$remove[] = " ";
$remove[] = "'";
$remove[] = '"';
$remove[] = "-";
$remove[] = "(";
$remove[] = ")";
$remove[] = "’";
?>

<article id="<?php echo strtolower(str_replace( $remove, "", get_the_title())); ?>" class="puur-fullwidth fullwidth-box hundred-percent-fullwidth puur-equal-height-columns">
	<div class="puur-builder-row puur-row">
		<div class="puur-layout-column puur_builder_column puur_builder_column_2_3 puur-column-first 2_3 layout-content">
			<div class="puur-column-wrapper puur-animated" data-animationtype="fadeInUp" data-animationduration="1" data-animationoffset="50%" data-bg-url="">
				<div class="puur-column-table">
					<div class="puur-column-tablecell">
						<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
						<div class="puur-sep-clear"></div>
						<div class="puur-separator sep-single sep-solid hrleft"></div>
						<?php the_excerpt(); ?>
					</div>
				</div>
				<div class="puur-clearfix"></div>
				<div class="puur-separator puur-full-width-sep sep-shadow hrleft"></div>
			</div>
		</div>
	</div>
</article>