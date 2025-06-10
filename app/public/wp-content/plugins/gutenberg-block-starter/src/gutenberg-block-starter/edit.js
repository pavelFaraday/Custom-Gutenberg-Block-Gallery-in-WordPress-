import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	InspectorControls,
	RichText,
	PanelColorSettings,
	AlignmentToolbar,
	BlockControls,
	MediaUpload,
	MediaPlaceholder,
	MediaUploadCheck,
	InnerBlocks,
} from "@wordpress/block-editor";
import {
	PanelBody,
	ColorPalette,
	TextControl,
	BoxControl,
	RangeControl,
	ToolbarGroup,
	ToolbarButton,
	ColorPicker,
} from "@wordpress/components";

import "./editor.scss";
import Info from "../components/info/info.js";

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		text,
		content,
		contentColor,
		textColor,
		BGColor,
		padding,
		textAlign,
		radius,
		url,
		alt,
		id,
		titles,
		color,
		ClassID,
	} = attributes;

	setAttributes({ ClassID: "starter-block-" + clientId.slice(0, 8) });

	const resolvedPadding = {
		top: padding && typeof padding.top === "number" ? padding.top : 20,
		right: padding && typeof padding.right === "number" ? padding.right : 20,
		bottom: padding && typeof padding.bottom === "number" ? padding.bottom : 20,
		left: padding && typeof padding.left === "number" ? padding.left : 20,
	};

	return (
		<>
			<style>{`.title.${ClassID} {color: ${color}; }`}</style>
			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(value) => setAttributes({ textAlign: value })}
				/>

				{url && (
					<ToolbarGroup>
						<ToolbarButton
							onClick={() => {
								setAttributes({
									url: "",
									id: "",
									alt: "",
								});
							}}
							icon={"trash"}
						/>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => {
									setAttributes({
										url: media.url,
										id: media.id,
										alt: media.alt || "Our Banner",
									});
								}}
								allowedTypes={["image"]}
								multiple={false}
								value={id}
								render={({ open }) => (
									<ToolbarButton icon={"edit"} onClick={open} />
								)}
							/>
						</MediaUploadCheck>
					</ToolbarGroup>
				)}
			</BlockControls>

			<InspectorControls>
				<PanelBody
					title={__("Settings", "gutenberg-block-starter")}
					initialOpen={true}
				>
					<TextControl
						label={__("Block Content Level", "gutenberg-block-starter")}
						value={text}
						onChange={(value) => setAttributes({ text: value })}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
				</PanelBody>

				<PanelBody
					title={__("Color Settings", "gutenberg-block-starter")}
					initialOpen={false}
				>
					<ColorPicker
						color={color}
						onChangeComplete={(value) => setAttributes({ color: value.hex })}
						disableAlpha
					/>
				</PanelBody>

				<PanelBody>
					<BoxControl
						label={__("Padding", "gutenberg-block-starter")}
						values={padding}
						onChange={(value) => setAttributes({ padding: value })}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
						units="px"
						allowReset={true}
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

				<PanelBody
					title={__("Border Radius", "gutenberg-block-starter")}
					initialOpen={false}
				>
					<RangeControl
						label={__("Border Radius", "gutenberg-block-starter")}
						value={radius}
						onChange={(value) => setAttributes({ radius: value })}
						min={0}
						max={50}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
						allowReset={true}
					/>
				</PanelBody>

				<PanelBody title={__("Content", "gutenberg-block-starter")}>
					<Info title="Our Repeatable Title" icon="wordpress" />
					<button
						onClick={() => {
							setAttributes({
								titles: [
									...titles,
									{ id: titles.length + 1, title: "default Title" },
								],
							});
						}}
					>
						Add New
					</button>
					{titles &&
						titles.map((item, index) => {
							return (
								<div key={index}>
									<TextControl
										label={"Add Title"}
										value={item.title}
										onChange={(value) => {
											const newTitles = [...titles];
											newTitles[index].title = value;
											setAttributes({ titles: newTitles });
										}}
									/>
								</div>
							);
						})}
				</PanelBody>

				<PanelBody
					title={__("Custom Component Settings", "gutenberg-block-starter")}
					initialOpen={false}
				>
					<Info title="This is a Component" icon="admin-generic" />
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
					style: {
						backgroundColor: BGColor,
						padding: `${resolvedPadding.top}px ${resolvedPadding.right}px ${resolvedPadding.bottom}px ${resolvedPadding.left}px`,
						borderRadius: `${radius}px`,
					},
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
					style={{ color: contentColor, textAlign }}
				/>

				<h1 className={`title ${ClassID}`}>Blocks 222 with ClassId</h1>

				{url ? (
					<img src={url} alt={alt} style={{ width: "100%", height: "auto" }} />
				) : (
					<MediaPlaceholder
						onSelect={(media) => {
							setAttributes({
								url: media.url,
								id: media.id,
								alt: media.alt || "Our Banner",
							});
						}}
						allowedTypes={["image"]}
						multiple={false}
						icon="format-image"
						labels={{
							title: __("Add Your Banner", "gutenberg-block-starter"),
							instructions: __(
								"Drag and drop an image, or select one from your library.",
								"gutenberg-block-starter",
							),
						}}
						accept="image/*"
					/>
				)}
				<InnerBlocks
					template={[
						[
							"core/heading",
							{
								placeholder: __(
									"My InnerBlock Heading",
									"gutenberg-block-starter",
								),
							},
						],
						["core/image"],
					]}
					allowedBlocks={["core/heading", "core/image"]}
					templateLock={true}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
				/>

				{titles &&
					titles.map((item, index) => {
						return <li key={index}>{item.title}</li>;
					})}
			</div>
		</>
	);
}
