<?php
/**
 * Left sidebar check.
 *
 * @package wbase
 */
?>

<?php
$sidebar_pos = get_theme_mod( 'wbase_sidebar_position' );
?>

<?php if ( 'left' === $sidebar_pos || 'both' === $sidebar_pos ) : ?>
	<?php get_sidebar( 'left' ); ?>
<?php endif; ?>

<?php {
	$html = '';
	if ( 'right' === $sidebar_pos || 'left' === $sidebar_pos ) {
		$html = '<div class="';
		if ( is_active_sidebar( 'right-sidebar' ) || is_active_sidebar( 'left-sidebar' ) ) {
			$html .= 'col-md-8 content-area" id="primary">';
		} else {
			$html .= 'col-md-12 content-area" id="primary">';
		}
		echo $html;
	} elseif ( is_active_sidebar( 'right-sidebar' ) && is_active_sidebar( 'left-sidebar' ) ) {
		$html = '<div class="';
		if ( 'both' === $sidebar_pos ) {
			$html .= 'col-md-6 content-area" id="primary">';
		} else {
			$html .= 'col-md-12 content-area" id="primary">';
		}
		echo $html;
	} else {
	    echo '<div class="col-md-12 content-area" id="primary">';
	}
}
