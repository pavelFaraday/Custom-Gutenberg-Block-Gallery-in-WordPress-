import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	TextControl,
	CheckboxControl,
	ToggleControl,
	Button,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	return (
		<>
			<InspectorControls>
				<PanelBody title="Mailchimp" initialOpen={false}>
					<PanelRow>
						<TextControl
							label="List ID (Audience ID)"
							value={attributes.list_id}
							onChange={(list_id) => setAttributes({ list_id })}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Double opt in"
							checked={attributes.doubleoptin}
							onChange={() =>
								setAttributes({ doubleoptin: !attributes.doubleoptin })
							}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Image" initialOpen={true}>
					<MediaUpload
						title="Select your form image"
						allowedTypes={["image/jpeg", "image/png"]}
						value={attributes.image.id}
						onSelect={(image) =>
							setAttributes({ image: { id: image.id, url: image.url } })
						}
						render={({ open }) => {
							if (0 === attributes.image.id) {
								return (
									<Button isSecondary onClick={open}>
										Select image
									</Button>
								);
							} else {
								return (
									<>
										<img src={attributes.image.url} onClick={open} />
										<Button
											inLink
											isDestructive
											onClick={(image) =>
												setAttributes({ image: { id: 0, url: "" } })
											}
										>
											Delete image
										</Button>
									</>
								);
							}
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="misha-subscription-block-wrapper">
					<div
						className="misha-subscription-block-image"
						style={{ backgroundImage: "url( " + attributes.image.url + " )" }}
					></div>
					<div className="misha-subscription-block-content">
						<RichText
							tagName="h3"
							value={attributes.titletext}
							placeholder="Enter title..."
							allowedFormats={[]}
							onChange={(titletext) => setAttributes({ titletext })}
						/>
						<RichText
							tagName="p"
							value={attributes.justtext}
							placeholder="Type some text here..."
							allowedFormats={["core/bold", "core/italic", "core/link"]}
							onChange={(justtext) => setAttributes({ justtext })}
						/>
						<div>
							<span>Your email</span>
							<RichText
								tagName="span"
								value={attributes.btntext}
								allowedFormats={[]}
								onChange={(btntext) => setAttributes({ btntext })}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
