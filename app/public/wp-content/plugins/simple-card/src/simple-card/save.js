import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		heading,
		description,
		image,
		headingColor,
		descriptionColor,
		containerBg,
	} = attributes;

	return (
		<div
			{...useBlockProps.save()}
			style={{
				// backgroundColor: containerBg,
				padding: "20px",
			}}
		>
			{image && image?.url && (
				<img
					src={image.url}
					alt={image.alt}
					style={{ width: "100%", height: "auto" }}
				/>
			)}

			{heading && (
				<RichText.Content
					tagName="h2"
					value={heading}
					// style={{ color: headingColor }}
				/>
			)}
			{description && (
				<RichText.Content
					tagName="p"
					value={description}
					// style={{ color: descriptionColor }}
				/>
			)}
		</div>
	);
}
