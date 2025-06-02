import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import { PanelBody, ColorPalette } from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

export default function Edit() {
	return (
			<h2>
				EDITOR
			</h2>
	);
}
