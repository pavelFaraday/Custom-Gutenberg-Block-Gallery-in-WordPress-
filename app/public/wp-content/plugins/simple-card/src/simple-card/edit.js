import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { heading, description, image } = attributes;

	return (
		<div {...useBlockProps()}>
			<RichText
				tagName="h2"
				placeholder={__(" Type your Heading..", "simple-card")}
				value={heading}
				onChange={(v) => setAttributes({ heading: v })}
				className="heading"
			/>
		</div>
	);
}
