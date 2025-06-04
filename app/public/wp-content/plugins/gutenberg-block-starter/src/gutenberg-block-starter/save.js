import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { text, contentColor, textColor, BGColor } = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: "my-extra-class",
				style: { backgroundColor: BGColor },
			})}
		>
			<h1 style={{ color: textColor }}>{text}</h1>
			<RichText.Content
				tagName="ul"
				value={attributes.content}
				style={{ color: contentColor }}
			/>
		</div>
	);
}
