<?php
/*
Plugin Name: Pixels Land Grid
Description: Dynamic pixel grid with images and admin dashboard.
Version: 1.0
Author: Your Name
*/

defined('ABSPATH') or die('No script kiddies please!');

// Register activation hook to create DB table
register_activation_hook(__FILE__, 'plg_create_table');
function plg_create_table()
{
    global $wpdb;
    $table_name = $wpdb->prefix . 'pixels_land_images';
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE $table_name (
      id mediumint(9) NOT NULL AUTO_INCREMENT,
      start_row int NOT NULL,
      start_col int NOT NULL,
      width_cells int NOT NULL,
      height_cells int NOT NULL,
      img_url text NOT NULL,
      link_url text NOT NULL,
      PRIMARY KEY  (id)
    ) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}

// Add admin menu
add_action('admin_menu', function () {
    add_menu_page(
        'Pixels Land Grid',
        'Pixels Land Grid',
        'manage_options',
        'pixels-land-grid',
        'plg_admin_page',
        'dashicons-grid-view',
        25
    );
});

// Include admin page code
function plg_admin_page()
{
    include plugin_dir_path(__FILE__) . 'admin/admin-page.php';
}

// Register shortcode for frontend grid display
add_shortcode('pixels_land_grid', function () {
    ob_start();
    include plugin_dir_path(__FILE__) . 'public/public-display.php';
    return ob_get_clean();
});

// Enqueue scripts and styles for frontend
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('pixels-land-style', plugin_dir_url(__FILE__) . 'public/css/style.css');
    wp_enqueue_script('pixels-land-js', plugin_dir_url(__FILE__) . 'public/js/grid.js', ['jquery'], null, true);


    // Pass image blocks data via wp_localize_script
    global $wpdb;
    $table_name = $wpdb->prefix . 'pixels_land_images';
    $images = $wpdb->get_results("SELECT * FROM $table_name", ARRAY_A);
    wp_localize_script('pixels-land-js', 'PixelsLandData', ['images' => $images]);
});

// Enqueue styles for admin dashboard
add_action('admin_enqueue_scripts', function ($hook) {
    // Ensure styles only load on your plugin's admin page
    if ($hook === 'toplevel_page_pixels-land-grid') {
        wp_enqueue_style('pixels-land-admin-style', plugin_dir_url(__FILE__) . 'admin/css/admin-style.css');
    }
});
