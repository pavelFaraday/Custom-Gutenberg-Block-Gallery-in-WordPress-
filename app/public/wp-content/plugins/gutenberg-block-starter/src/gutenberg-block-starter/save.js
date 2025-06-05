import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		text,
		content,
		contentColor,
		textColor,
		BGColor,
		padding,
		radius,
		textAlign,
	} = attributes;

	const paddingStyle = padding
		? `${padding?.top || 0}px ${padding?.right || 0}px ${padding?.bottom || 0}px ${padding?.left || 0}px`
		: undefined;

	return (
		<div
			{...useBlockProps.save({
				className: "my-extra-class",
				style: {
					backgroundColor: BGColor,
					padding: paddingStyle,
					borderRadius: `${radius}px`,
				},
			})}
		>
			<h1 style={{ color: textColor }}>{text}</h1>
			<RichText.Content
				tagName="ul"
				value={content}
				style={{ color: contentColor, textAlign }}
			/>
		</div>
	);
}
