<?php

/**
 * Plugin Name:       Startup Block
 * Description:       Something to Say
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Zakaria Binsaifullah
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       startup-block
 *
 * @package           @wordpress/create-block 
 */

/**
 * @package Zero Configuration with @wordpress/create-block
 *  [sub] && [SUB] ===> Prefix
 */

// Stop Direct Access 
if (! defined('ABSPATH')) {
	exit;
}

/**
 * Blocks Final Class
 */

final class SUB_BLOCKS_CLASS
{
	public function __construct()
	{

		// define constants
		$this->sub_define_constants();

		// block initialization
		add_action('init', [$this, 'sub_blocks_init']);
	}

	/**
	 * Initialize the plugin
	 */

	public static function init()
	{
		static $instance = false;
		if (! $instance) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function sub_define_constants()
	{
		define('SUB_VERSION', '1.0.0');
	}

	/**
	 * Blocks Registration 
	 */

	public function sub_register_block($name, $options = array())
	{
		register_block_type(__DIR__ . '/build/blocks/' . $name, $options);
	}

	/**
	 * Blocks Initialization
	 */
	public function sub_blocks_init()
	{
		// register single block
		$this->sub_register_block('firstblock');
	}
}

/**
 * Kickoff
 */

SUB_BLOCKS_CLASS::init();
