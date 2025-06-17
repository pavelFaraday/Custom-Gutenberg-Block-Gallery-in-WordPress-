import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { content } = attributes;
	return (
		<>
			<div {...useBlockProps.save()}>
				<RichText.Content tagName="h2" value={content} />
			</div>
		</>
	);
}
