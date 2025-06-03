import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { text } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<h1>{text}</h1>
		</div>
	);
}
