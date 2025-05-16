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



// 📌 setAttributes: This is how you update that data.
// 📌 attributes: This holds the data for your block (like the list of images).

/* 📌 `const removeImage = (index) => { ... }`
This function lets you remove an image by its position in the list.
It filters out the image that matches the clicked index.
Then it updates the images with the new list.
*/



/* 📌 `useBlockProps()`
This adds default block wrapper props, like styling and block ID, from WordPress. It’s like saying, “Hey WordPress, this is a block!”

In simple terms:
👉 useBlockProps() is a WordPress helper function that gives your block the necessary HTML properties (like className, style, data-*) so it looks and behaves correctly inside the block editor.

🧩 Why do you need it? Think of WordPress blocks like Lego pieces. Each block needs:

- A specific shape (CSS class)
- An identity (HTML attributes)
- Editor styling hooks

Without those, your block:
- May not display styles properly
- Might not be selectable or draggable
- Won’t work well with other blocks

So useBlockProps() gives your block the standard "Lego connectors" to fit nicely with the others in the editor.

*/


/* 
📌 MediaUploadCheck: Makes sure the user has permission to upload.
📌 MediaUpload: The actual media library interface. 
*/


export default function Edit({attributes, setAttributes}) {  
	const { images } = attributes;               // 📌 This pulls the images data (an array of image objects) out of your block’s saved data.
	const ALLOWED_MEDIA_TYPES = [ 'image' ];     // 📌  Only allows images (not videos, PDFs, etc.) in the media uploader.
	const removeImage = (index) => {
		const newImages = images.filter((img, i) => i !== index);
		setAttributes({ images: newImages });
	}
	
	return (
		<div { ...useBlockProps() }>
			 <MediaUploadCheck>                          
				 <MediaUpload                            
					onSelect={ ( media ) =>               // 📌 onSelect: Runs when the user selects images. It updates the block’s image list.
						setAttributes({images: media})
					}
					allowedTypes={ ALLOWED_MEDIA_TYPES } 
					multiple                              // 📌 multiple: Allows selecting multiple images at once.
					addToGallery				          // 📌 addToGallery: Adds selected images to the existing gallery.
					gallery 					          // 📌 gallery: Indicates that the selected images are part of a gallery
					value={ images.map((img) => img.id) }   // 📌 value: Tells WordPress which images are selected (based on img.id).
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
