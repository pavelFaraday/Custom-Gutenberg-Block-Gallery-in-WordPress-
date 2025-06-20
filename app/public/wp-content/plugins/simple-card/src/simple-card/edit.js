import { __ } from "@wordpress/i18n";
import {
	RichText,
	useBlockProps,
	MediaPlaceholder,
	BlockControls,
	MediaUpload,
	InspectorControls,
} from "@wordpress/block-editor";

import {
	PanelBody,
	ToolbarButton,
	ToolbarGroup,
	ColorPalette,
	__experimentalHeading as Heading,
} from "@wordpress/components";

import "./editor.scss";
import { useEffect } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const {
		heading,
		description,
		image,
		headingColor,
		descriptionColor,
		containerBg,
		BlockStyle,
	} = attributes;

	const customStyle = `
		.heading {
			color: ${headingColor};
		}
		.description {
			color: ${descriptionColor}
		}
		.wp-block-create-block-simple-card {
			background-color: ${containerBg};
	}
	`;

	useEffect(() => {
		setAttributes({
			BlockStyle: customStyle,
		});
	}, [headingColor, descriptionColor, containerBg]);

	const COLORS = [
		{
			name: __("Black", "gutenberg-block-starter"),
			color: "#000000",
		},
		{
			name: __("White", "gutenberg-block-starter"),
			color: "#ffffff",
		},
		{
			name: __("Red", "gutenberg-block-starter"),
			color: "#ff0000",
		},
		{
			name: __("Green", "gutenberg-block-starter"),
			color: "#00ff00",
		},
	];

	return (
		<>
			{image && image?.url && (
				<BlockControls>
					<ToolbarGroup>
						<MediaUpload
							onSelect={(image) => {
								setAttributes({
									image: {
										url: image.url,
										id: image.id,
										alt: image.alt || "",
									},
								});
							}}
							allowedTypes={["image"]}
							multiple={false}
							value={image.id}
							render={({ open }) => (
								<ToolbarButton icon={"edit"} title="Edit" onClick={open} />
							)}
						/>
						<ToolbarButton
							icon="trash"
							label={__("Delete", "first-block")}
							onClick={() => {
								setAttributes({
									image: {
										url: "",
										id: "",
										alt: "",
									},
								});
							}}
						/>
					</ToolbarGroup>
				</BlockControls>
			)}

			<InspectorControls>
				<PanelBody
					title={__("Card Styles", "gutenberg-block-starter")}
					initialOpen={true}
				>
					<Heading>{__("Heading Color", "gutenberg-block-starter")}</Heading>
					<ColorPalette
						colors={COLORS}
						value={headingColor}
						onChange={(v) => setAttributes({ headingColor: v })}
					/>
					<Heading>
						{__("Description Color", "gutenberg-block-starter")}
					</Heading>
					<ColorPalette
						colors={COLORS}
						value={descriptionColor}
						onChange={(v) => setAttributes({ descriptionColor: v })}
					/>
					<Heading>
						{__("Container Background Color", "gutenberg-block-starter")}
					</Heading>
					<ColorPalette
						colors={COLORS}
						value={containerBg}
						onChange={(v) => setAttributes({ containerBg: v })}
					/>
				</PanelBody>
			</InspectorControls>

			<style>{BlockStyle}</style>

			<div
				{...useBlockProps()}
				style={{
					// backgroundColor: containerBg,
					padding: "20px",
				}}
			>
				{image && image?.url ? (
					<img
						src={image.url}
						alt={image.alt}
						style={{ width: "100%", height: "auto" }}
					/>
				) : (
					<MediaPlaceholder
						onSelect={(v) => {
							setAttributes({
								image: {
									url: v.url,
									alt: v.alt || "",
									id: v.id,
								},
							});
						}}
						allowedTypes={["image"]}
						multiple={false}
						labels={{
							title: __("Upload Your Image", "gutenberg-block-starter"),
							instructions: __(
								"Just upload an image",
								"gutenberg-block-starter",
							),
						}}
						accept="image/*"
					/>
				)}
				<RichText
					tagName="h2"
					placeholder={__(" Type your Heading..", "simple-card")}
					value={heading}
					onChange={(v) => setAttributes({ heading: v })}
					className="heading"
					// style={{ color: headingColor }}
				/>
				<RichText
					tagName="p"
					placeholder={__(" Your Description..", "simple-card")}
					value={description}
					onChange={(v) => setAttributes({ description: v })}
					className="description"
					// style={{ color: descriptionColor }}
				/>
			</div>
		</>
	);
}
