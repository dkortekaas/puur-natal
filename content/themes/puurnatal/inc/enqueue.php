<?php
/**
 * WBase enqueue scripts and styles
 *
 * @package wbase
 */

/**
 * No direct access.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

if ( ! function_exists( 'wbase_enqueue_styles' ) ) :
	/**
	 * Load theme's CSS sources.
	 */
	function wbase_enqueue_styles() {
		// Get the theme data.
		$the_theme = wp_get_theme();
		wp_enqueue_style( 'font-css', 'https://fonts.googleapis.com/css?family=Karla', array(), $the_theme->get( 'Version' ) );
		wp_enqueue_style( 'puurnatal-css', get_stylesheet_directory_uri() . '/assets/css/main.css', array(), $the_theme->get( 'Version' ) );
	}
endif;
add_action( 'wp_enqueue_scripts', 'wbase_enqueue_styles' );


if ( ! function_exists( 'wbase_enqueue_scripts' ) ) :
	/**
	 * Load theme's JavaScript sources.
	 */
	function wbase_enqueue_scripts() {
		// Get the theme data.
		$the_theme = wp_get_theme();
		wp_enqueue_script( 'jquery' );
		wp_enqueue_script( 'modernizr-script', get_template_directory_uri() . '/assets/js/modernizr.js', array(), $the_theme->get( 'Version' ), false );
		wp_enqueue_script( 'bootstrap-script', get_template_directory_uri() . '/assets/js/bootstrap.js', array(), $the_theme->get( 'Version' ), true );
		wp_enqueue_script( 'cssua-script', get_template_directory_uri() . '/assets/js/cssua.js', array(), $the_theme->get( 'Version' ), true );
		wp_enqueue_script( 'appear-script', get_template_directory_uri() . '/assets/js/jquery.appear.js', array(), $the_theme->get( 'Version' ), true );
		wp_enqueue_script( 'waypoints-script', get_template_directory_uri() . '/assets/js/jquery.waypoints.js', array(), $the_theme->get( 'Version' ), true );
		wp_enqueue_script( 'easing-script', get_template_directory_uri() . '/assets/js/jquery.easing.js', array(), $the_theme->get( 'Version' ), true );
		wp_enqueue_script( 'placeholder-script', get_template_directory_uri() . '/assets/js/jquery.placeholder.js', array(), $the_theme->get( 'Version' ), true );
		wp_enqueue_script( 'fitvids-script', get_template_directory_uri() . '/assets/js/jquery.fitvids.js', array(), $the_theme->get( 'Version' ), true );
		wp_enqueue_script( 'hoverIntent-script', get_template_directory_uri() . '/assets/js/jquery.hoverIntent.js', array(), $the_theme->get( 'Version' ), true );

		wp_enqueue_script( 'wbase-script', get_template_directory_uri() . '/assets/js/theme.js', array(), $the_theme->get( 'Version' ), true );
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) :
			wp_enqueue_script( 'comment-reply' );
		endif;
	}
endif;
add_action( 'wp_enqueue_scripts', 'wbase_enqueue_scripts' );


// Admin
if ( ! function_exists( 'wbase_enqueue_admin_styles' ) ) :
	/**
	 * Load theme's CSS sources.
	 */
	function wbase_enqueue_admin_styles() {
		// Get the theme data.
		$the_theme = wp_get_theme();
    	wp_enqueue_style('admin-styles', get_template_directory_uri() . '/assets/css/admin.min.css', array(), $the_theme->get( 'Version' ) );
	}
endif;
add_action('admin_enqueue_scripts', 'wbase_enqueue_admin_styles');