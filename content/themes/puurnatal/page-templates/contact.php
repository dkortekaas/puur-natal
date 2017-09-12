<?php
/**
 * Template Name: Contact Page
 *
 * Template for displaying a contact page with contact form.
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

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.1905344370566!2d5.684099816100234!3d50.84615587953197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0e9b0ee8d8b11%3A0x216a6e5731bf83c9!2sTongersestraat+18%2C+6211+LN+Maastricht!5e0!3m2!1snl!2snl!4v1491475101330" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>

                <?php if ( get_field('text') ) :
                    the_field('text');
                endif; ?>
                <p></p>
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
                        <?php echo '<h2 class="upper" itemprop="name">'. get_field('subtitle') .'</h2>' ?>
                    </div>
                </div>
                <div class="puur-clearfix"></div>

                <div class="puur-column-table">
                    <div class="puur-column-tablecell">
                        <div class="puur-sep-clear"></div>
                        <div class="puur-separator sep-single sep-solid"></div>
                    </div>
                </div>
                <div class="puur-clearfix"></div>

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

<?php get_footer(); ?>