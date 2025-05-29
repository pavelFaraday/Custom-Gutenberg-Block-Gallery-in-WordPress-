<?php
// This file is generated. Do not modify it manually.
return array(
	'giorgi-subscription-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'subscribtion-block/giorgi-subscription-block',
		'version' => '0.1.0',
		'title' => 'my subscribtion block',
		'category' => 'text',
		'icon' => 'email',
		'description' => 'Example block scaffolded with Create Block tool.',
		'textdomain' => 'giorgi-subscription-block',
		'example' => array(
			
		),
		'supports' => array(
			'html' => true,
			'align' => array(
				'wide'
			),
			'color' => array(
				'text' => false,
				'background' => true
			),
			'anchor' => true
		),
		'attributes' => array(
			'titletext' => array(
				'type' => 'string',
				'selector' => 'h3',
				'default' => 'Take 10% off your first order',
				'source' => 'text'
			),
			'btntext' => array(
				'type' => 'string',
				'selector' => 'button',
				'default' => 'Subscribe',
				'source' => 'text'
			),
			'justtext' => array(
				'type' => 'string',
				'selector' => 'p',
				'default' => 'Become a subscriber to get instantly 10% off your first purchase.',
				'source' => 'html'
			),
			'list_id' => array(
				'type' => 'string'
			),
			'doubleoptin' => array(
				'type' => 'boolean'
			),
			'image' => array(
				'type' => 'object',
				'default' => array(
					'id' => 0
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
