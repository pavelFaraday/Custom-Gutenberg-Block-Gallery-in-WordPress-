import { __ } from "@wordpress/i18n";
import {
	BlockControls,
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import {
	ToolbarGroup,
	ToolbarButton,
	PanelBody,
	TextControl,
	ColorPalette,
	ToggleControl,
	Placeholder,
	Button,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { content, videoID, editingMode } = attributes;
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="edit"
						label={__("Edit", "first-block")}
						onClick={(v) => setAttributes({ editingMode: !editingMode })}
					/>
					<ToolbarButton
						icon="trash"
						label={__("Delete", "first-block")}
						onClick={() => {
							alert("Trash button clicked!");
						}}
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						icon="admin-plugins"
						label={__("Plugins", "first-block")}
						onClick={() => {
							alert("Plugins button clicked!");
						}}
					/>
					<ToolbarButton
						icon="admin-tools"
						label={__("Tools", "first-block")}
						onClick={() => {
							alert("Tools button clicked!");
						}}
					/>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody
					title={__("Block Settings", "first-block")}
					initialOpen={false}
					icon={"admin-generic"}
				>
					<TextControl
						label={__("Enter Video ID", "first-block")}
						value={videoID}
						onChange={(v) => {
							setAttributes({ videoID: v });
						}}
						help={__(
							"Enter the YouTube video ID to embed the video.",
							"first-block",
						)}
					/>
				</PanelBody>
			</InspectorControls>

			<InspectorControls group="styles">
				<PanelBody
					title={__("Color", "first-block")}
					initialOpen={false}
					icon={"admin-appearance"}
				>
					<ColorPalette
						onChange={(color) => {
							console.log("Color changed:", color);
						}}
					/>
				</PanelBody>
			</InspectorControls>

			<InspectorControls group="advanced">
				<ToggleControl
					label={__("Enable Feature", "first-block")}
					onChange={(e) => {
						console.log("Something Visible");
					}}
				/>
			</InspectorControls>

			<div
				{...useBlockProps({
					className: "youtube-video-block",
					style: {
						backgroundColor: "#f6f689",
						padding: "20px",
						color: "#000",
						borderRadius: "25px",
					},
				})}
			>
				<div>
					<RichText
						tagName="h2"
						value={content}
						onChange={(v) => {
							setAttributes({ content: v });
						}}
						placeholder={__("Enter your text here", "first-block")}
						allowedFormats={["core/bold", "core/italic"]}
					/>
				</div>

				<div>
					{editingMode ? (
						<Placeholder
							icon="video-alt3"
							label={__("Enter Video ID", "first-block")}
						>
							<TextControl
								value={videoID}
								onChange={(v) => {
									setAttributes({ videoID: v });
								}}
								help={__(
									"Enter the YouTube video ID to embed the video.",
									"first-block",
								)}
							/>
							<Button
								onClick={() => {
									setAttributes({ editingMode: false });
								}}
								variant="primary"
							>
								Embed Video
							</Button>
						</Placeholder>
					) : (
						<iframe
							width="560"
							height="315"
							src={`https://www.youtube.com/embed/${videoID}`}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					)}
				</div>
			</div>
		</>
	);
}
