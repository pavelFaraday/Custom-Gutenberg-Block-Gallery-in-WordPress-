/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */




export default function Edit({attributes, setAttributes}) {
	const { images } = attributes;
	const ALLOWED_MEDIA_TYPES = [ 'image' ];
	const removeImage = (index) => {
		const newImages = images.filter((img, i) => i !== index);
		setAttributes({ images: newImages });
	}
	
	return (
		<div { ...useBlockProps() }>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={ ( media ) =>
						setAttributes({images: media})
					}
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					multiple
					addToGallery
					gallery
					value={ images.map((img) => img.id) }
					render={ ( { open } ) => (
						<Button 
							variant='primary'
							onClick={ open }>Open Media Library
						</Button>
					)}
				/>
			</MediaUploadCheck>

			{images.map((img, index) => (
				<div className='slide'>
					<img src={img.url} alt={img.alt} />
					<Button className='remove-fade-slider-img' isDestructive onClick={() => removeImage(index)}>
						Remove
					</Button>
				</div>
			))}
		</div>
	);
}
