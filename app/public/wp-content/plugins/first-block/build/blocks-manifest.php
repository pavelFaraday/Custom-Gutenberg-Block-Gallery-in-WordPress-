<?php
// This file is generated. Do not modify it manually.
return array(
	'first-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/youtube-video',
		'version' => '0.1.0',
		'title' => 'Youtube Video',
		'category' => 'media',
		'icon' => 'admin-plugins',
		'description' => 'Youtube embed Video',
		'example' => array(
			
		),
		'attributes' => array(
			'videoID' => array(
				'type' => 'string'
			),
			'editingMode' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => true,
			'color' => array(
				'background' => true,
				'text' => true,
				'link' => true,
				'gradients' => true
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true,
				'blockGap' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'fontFamily' => true,
				'textTransform' => true,
				'textDecoration' => true,
				'fontWeight' => true
			)
		),
		'textdomain' => 'first-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
