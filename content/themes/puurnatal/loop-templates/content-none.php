<?php
/**
 * The template part for displaying a message that posts cannot be found.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package wbase
 */

/**
 * No direct access.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

?>
<div id="<?php echo strtolower(str_replace(' ', '', $recent["post_title"])); ?>" class="post-content puur-fullwidth fullwidth-box hundred-percent-fullwidth">
	<div class="puur-builder-row puur-row equal">
		<div class="puur-layout-column puur_builder_column puur_builder_column_2_3  puur-two-third puur-column-first 2_3 layout-content eq-block">
			<div class="puur-column-wrapper puur-animated" data-animationtype="fadeInUp" data-animationduration="1" data-animationoffset="50%" data-bg-url="">
				<div class="puur-column-table">
					<div class="puur-column-tablecell">
						<h1 class="page-title"><?php esc_html_e( 'Nothing Found', 'wbase' ); ?></h1>
						<div class="puur-sep-clear"></div>
						<div class="puur-separator sep-single sep-solid hrleft"></div>						
						<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

							<p><?php printf( wp_kses( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'wbase' ), array( 'a' => array( 'href' => array() ) ) ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>

						<?php elseif ( is_search() ) : ?>

							<p><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'wbase' ); ?></p>
							<?php
								get_search_form();
						else : ?>

							<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'wbase' ); ?></p>
							<?php
								get_search_form();
						endif; ?>
					</div>
				</div>
			</div>
			<div class="puur-clearfix"></div>
		</div>
	</div>
</div>