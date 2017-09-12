<?php 
/*
* This is a convenient wrapper that allows you to retrieve the list of posts
* mentioned in a Menu. The posts are returned in the order they are in the menu.

* Args: An array containing these keys:

  * theme_location: (required) the name of the theme location you have defined
  * for the menu with register_nav_menu()

  * wp_query_args: (optional) The 'wp_query_args' array is passed straight to
  * the WP_Query constructor so you can customise the query to your liking.
  * Check out https://gist.github.com/2023628 for the full list of possible
  * arguments.

 * Returns: A WordPress Query object.

 * Example Usage:

     $allib_query = allib_get_posts_from_menu(array(
                'theme_location' => 'primary'
            ));

    if ($allib_query->have_posts()):
      while ($allib_query->have_posts() ): $allib_query->the_post();
            // All your usual post functions work here e.g.
        the_title();
        the_content();
      endwhile;
    endif;

    wp_reset_postdata();

 */

function allib_get_posts_from_menu($args) {

  // Required parameters
  $menu_name = $args['theme_location'];

  // Optional Parameters (get default values if missing)
  $wp_query_args = ($args['wp_query_args'] ? $args['wp_query_args'] : array());

  $locations = get_nav_menu_locations();

  if ( ! ($locations && isset($locations[$menu_name])) ) {
    return false;
  }

  $menu = wp_get_nav_menu_object($locations[$menu_name]);
  $menu_items = wp_get_nav_menu_items($menu->term_id);

  $post_ids = array();

  foreach ( (array) $menu_items as $key => $menu_item ) {
    $post_ids[] = $menu_item->object_id;
  }

  // In case the user sent an empty array in 'post_types' we make sure that it
  // has at least the 'any' entry. The query will not work without this
  // parameter being set to something.
  if ( ! $wp_query_args['post_types']) {
    $wp_query_args['post_type'] = 'any';
  }

  $my_args = array('
    post__in' => $post_ids,

    // We need to fetch all the posts referenced in the menu before we can sort
    // them so we must disable paging.
    'nopaging' => true
    );

  // The keys in $my_args will override $wp_query_args if they conflict. See
  // http://php.net/manual/en/function.array-merge.php
  $wp_query_args = array_merge($wp_query_args, $my_args);

  $query = new WP_Query($wp_query_args);

  $allib_sorted_posts = array();

  foreach ($post_ids as $id) {
    $allib_sorted_posts[] = allib_find_post($query->posts, $id);
  }

  // Replace the posts array in our WP_Query object with our sorted version:
  $query->posts = $allib_sorted_posts;

  return $query;

} // allib_get_posts_from_menu()

function allib_find_post($posts, $id) {
  foreach ($posts as $post) {
    if ($post->ID == $id) {
      return $post;
    }
  }
} // allib_find_post()
