<?php
/**
 * Template Name: Register with content Page
 *
 * Template for displaying a page with registration form.
 *
 * @package wbase
 */

/**
 * No direct access.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

get_header();
?>

<section <?php post_class('post-content'); ?> id="post-<?php the_ID(); ?>">

    <div class="puur-fullwidth fullwidth-box nonhundred-percent-fullwidth contactcontent">
        <div class="puur-builder-row puur-row ">
            <div class="puur-layout-column puur_builder_column puur_builder_column_1_1  puur-one-full puur-column-last 1_1">
                <div class="puur-column-wrapper puur-animated" data-animationtype="fadeInUp" data-animationduration="1" data-animationoffset="100%">
                    <?php the_title( '<h1 itemprop="name">', '</h1>' ); ?>
                    <div class="puur-sep-clear"></div>
                    <div class="puur-separator sep-single sep-solid"></div>
                    <?php the_content(); ?>
                </div>
            </div>
        </div>
    </div>

    <div class="puur-fullwidth fullwidth-box nonhundred-percent-fullwidth contactblock">
        <div class="puur-builder-row puur-row ">
            <div class="puur-layout-column puur_builder_column puur_builder_column_2_3 puur-two-third 2_3">
                <div class="puur-column-wrapper puur-animated border" data-animationtype="fadeInUp" data-animationduration="1" data-animationoffset="100%">
                    <div class="puur-column-table">
                        <div class="puur-column-tablecell">
                            <?php echo do_shortcode(get_field('contactform_shortcode')); ?>
                        </div>
                    </div>
                    <div class="puur-clearfix"></div>
                </div>
            </div>
        </div>
    </div>

</section>

<?php get_footer(); ?>