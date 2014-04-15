<?php
/**
 * @package GavickPro TinyMCE own buttons
 * @version 1.0
 */
/*
Plugin Name: GavickPro TinyMCE own buttons
Plugin URI: 
Description: 
Author: GavickPro
Version: 1.0
Author URI: http://www.gavick.com
*/

add_action('admin_head', 'gavickpro_add_my_tc_button');
add_action('admin_enqueue_scripts', 'gavickpro_tc_css');

function gavickpro_add_my_tc_button() {
    global $typenow;
    // sprawdzamy czy user ma uprawnienia do edycji postów/podstron
    if ( !current_user_can('edit_posts') && !current_user_can('edit_pages') ) {
   	return;
    }
    // weryfikujemy typ wpisu
    if( ! in_array( $typenow, array( 'post', 'page' ) ) )
        return;
	// sprawdzamy czy user ma włączony edytor WYSIWYG
	if ( get_user_option('rich_editing') == 'true') {
		add_filter("mce_external_plugins", "gavickpro_add_tinymce_plugin");
		add_filter('mce_buttons', 'gavickpro_register_my_tc_button');
	}
}

function gavickpro_add_tinymce_plugin($plugin_array) {
   	$plugin_array['gavickpro_tc_button'] = plugins_url( '/complex-popup-button.js', __FILE__ ); // CHANGE THE BUTTON SCRIPT HERE
   	return $plugin_array;
}

function gavickpro_register_my_tc_button($buttons) {
   array_push($buttons, "gavickpro_tc_button");
   return $buttons;
}

function gavickpro_tc_css() {
	wp_enqueue_style('gavickpro-tc', plugins_url('/style.css', __FILE__));
}
