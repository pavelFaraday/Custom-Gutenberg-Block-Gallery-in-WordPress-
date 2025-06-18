/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { heading, description, image } = attributes;

	return (
		<div {...useBlockProps.save()}>
			{image && image?.url && (
				<img
					src={image.url}
					alt={image.alt}
					style={{ width: "100%", height: "auto" }}
				/>
			)}

			{heading && <RichText.Content tagName="h2" value={heading} />}
			{description && <RichText.Content tagName="p" value={description} />}
		</div>
	);
}
