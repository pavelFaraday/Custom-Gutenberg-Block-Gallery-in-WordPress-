<?php
// This file is generated. Do not modify it manually.
return array(
	'simple-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/simple-card',
		'version' => '0.1.0',
		'title' => 'Simple Card',
		'category' => 'text',
		'icon' => 'admin-page',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string'
			),
			'description' => array(
				'type' => 'string'
			),
			'image' => array(
				'type' => 'object',
				'default' => array(
					'url' => '',
					'alt' => '',
					'id' => ''
				)
			),
			'headingColor' => array(
				'type' => 'string'
			),
			'descriptionColor' => array(
				'type' => 'string'
			),
			'containerBg' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'simple-card',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
