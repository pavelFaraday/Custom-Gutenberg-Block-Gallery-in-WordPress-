import { __ } from "@wordpress/i18n";
import {
	RichText,
	useBlockProps,
	MediaPlaceholder,
	BlockControls,
	MediaUpload,
} from "@wordpress/block-editor";

import { ToolbarButton, ToolbarGroup } from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { heading, description, image } = attributes;

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

			<div {...useBlockProps()}>
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
				/>
				<RichText
					tagName="p"
					placeholder={__(" Your Description..", "simple-card")}
					value={description}
					onChange={(v) => setAttributes({ description: v })}
					className="description"
				/>
			</div>
		</>
	);
}
