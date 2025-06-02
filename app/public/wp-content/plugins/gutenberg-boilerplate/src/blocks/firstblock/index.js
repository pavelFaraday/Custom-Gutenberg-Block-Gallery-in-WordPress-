import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

/**
 * Block Registration
 */

registerBlockType(metadata, {
	icon: {
		src: 'admin-generic',
		foreground: 'blue',
		background: 'lightgray',
	},
	edit: Edit,
	save: Save,
});
