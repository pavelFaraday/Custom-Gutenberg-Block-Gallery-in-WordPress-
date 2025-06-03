import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { text } = attributes;
	return (
		<div {...useBlockProps.save({ className: "my-extra-class" })}>
			<h1>{text}</h1>
			<RichText.Content tagName="h3" value={attributes.content} />
		</div>
	);
}
