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
	const { text } = attributes;

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
			<div {...useBlockProps()}>
				<h2>{text}</h2>
			</div>
		</>
	);
}
