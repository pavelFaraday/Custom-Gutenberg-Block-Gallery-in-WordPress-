import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, ColorPalette } from "@wordpress/components";
const { Fragment } = wp.element;

// editor style
import "./editor.scss";

export default function Edit() {
	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Settings", "gutenberg-block-starter")}
					initialOpen={true}
				></PanelBody>
				<PanelBody
					title={__("Color Panel", "gutenberg-block-starter")}
					initialOpen={false}
				></PanelBody>
			</InspectorControls>
			<div className="block-info">
				<h2>Editor Panel</h2>
			</div>
		</>
	);
}
