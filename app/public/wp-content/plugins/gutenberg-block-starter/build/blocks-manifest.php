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
			'html' => false,
			'align' => true
		),
		'attributes' => array(
			'text' => array(
				'type' => 'string',
				'default' => 'Hello World from Gutenberg Block Starter!'
			),
			'content' => array(
				'type' => 'string',
				'default' => 'Hello World RichText!'
			),
			'contentColor' => array(
				'type' => 'string'
			),
			'textColor' => array(
				'type' => 'string'
			),
			'BGColor' => array(
				'type' => 'string'
			),
			'padding' => array(
				'type' => 'object',
				'default' => array(
					'top' => 20,
					'right' => 20,
					'bottom' => 20,
					'left' => 20
				)
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => 'left'
			)
		),
		'textdomain' => 'gutenberg-block-starter',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
