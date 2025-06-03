import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, ColorPalette, TextControl } from "@wordpress/components";

// editor style
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { text, content } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Settings", "gutenberg-block-starter")}
					initialOpen={true}
				>
					<TextControl
						label={__("Block Content Level", "gutenberg-block-starter")}
						value={text}
						onChange={(value) => setAttributes({ text: value })}
					/>
				</PanelBody>
				<PanelBody
					title={__("Color Panel", "gutenberg-block-starter")}
					initialOpen={false}
				></PanelBody>
			</InspectorControls>

			<div {...useBlockProps({ className: "my-extra-class" })}>
				<h2>{text}</h2>
				<RichText
					tagName="h3"
					value={content}
					onChange={(value) => setAttributes({ content: value })}
					placeholder={__(
						"Write your content here...",
						"gutenberg-block-starter",
					)}
					allowedFormats={["core/bold", "core/italic", "core/link"]}
				/>
			</div>
		</>
	);
}
