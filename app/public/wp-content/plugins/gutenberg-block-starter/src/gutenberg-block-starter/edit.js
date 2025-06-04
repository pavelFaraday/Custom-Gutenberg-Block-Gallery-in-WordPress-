import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	InspectorControls,
	RichText,
	PanelColorSettings,
} from "@wordpress/block-editor";
import {
	PanelBody,
	ColorPalette,
	TextControl,
	BGColor,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { text, content, contentColor, textColor, BGColor } = attributes;

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
				>
					<ColorPalette
						colors={[
							{ name: "Red", color: "#f00" },
							{ name: "Green", color: "#0f0" },
							{ name: "Blue", color: "#00f" },
							{ name: "Black", color: "#000" },
							{ name: "White", color: "#fff" },
							{ name: "Gray", color: "#808080" },
							{ name: "Yellow", color: "#ff0" },
							{ name: "Cyan", color: "#0ff" },
							{ name: "Magenta", color: "#f0f" },
							{ name: "Orange", color: "#ffa500" },
						]}
						value={contentColor}
						clearable={true}
						label={__("Content Color", "gutenberg-block-starter")}
						onChange={(color) => setAttributes({ contentColor: color })}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__("Content Color", "gutenberg-block-starter")}
					colorSettings={[
						{
							value: textColor,
							onChange: (color) => setAttributes({ textColor: color }),
							label: __("Content Color", "gutenberg-block-starter"),
						},
						{
							value: BGColor,
							onChange: (value) => setAttributes({ BGColor: value }),
							label: __("Background Color", "gutenberg-block-starter"),
						},
					]}
				/>
			</InspectorControls>

			<div
				{...useBlockProps({
					className: "my-extra-class",
					style: { backgroundColor: BGColor },
				})}
			>
				<h2 style={{ color: textColor }}>{text}</h2>
				<RichText
					tagName="h3"
					value={content}
					onChange={(value) => setAttributes({ content: value })}
					placeholder={__(
						"Write your content here...",
						"gutenberg-block-starter",
					)}
					allowedFormats={["core/bold", "core/italic", "core/link"]}
					style={{ color: contentColor }}
				/>
			</div>
		</>
	);
}
