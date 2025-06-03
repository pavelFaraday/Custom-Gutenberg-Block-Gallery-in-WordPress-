<?php
// This file is generated. Do not modify it manually.
return array(
	'gutenberg-block-starter' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/gutenberg-block-starter',
		'version' => '0.1.0',
		'title' => 'Gutenberg Block Starter',
		'category' => 'common',
		'icon' => 'smiley',
		'description' => 'My first block in Gutenberg.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'text' => array(
				'type' => 'string',
				'default' => 'Hello World from Gutenberg Block Starter!'
			),
			'content' => array(
				'type' => 'string',
				'default' => 'Hello World!'
			),
			'color' => array(
				'type' => 'string',
				'default' => '#00ff00'
			)
		),
		'textdomain' => 'gutenberg-block-starter',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
