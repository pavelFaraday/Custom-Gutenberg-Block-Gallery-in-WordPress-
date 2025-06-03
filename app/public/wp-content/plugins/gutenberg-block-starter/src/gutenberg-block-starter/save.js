import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { text } = attributes;
	return (
		<div {...useBlockProps.save({ className: "my-extra-class" })}>
			<h1>{text}</h1>
			<RichText.Content tagName="ul" value={attributes.content} />
		</div>
	);
}
