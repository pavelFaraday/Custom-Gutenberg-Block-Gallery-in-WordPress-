import { __ } from "@wordpress/i18n";
import { BlockControls, useBlockProps } from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import "./editor.scss";

export default function Edit() {
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="edit"
						label={__("Edit", "first-block")}
						onClick={() => {
							alert("Edit button clicked!");
						}}
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

			<div
				{...useBlockProps({
					className: "dummy-custom-block",
					style: {
						backgroundColor: "#f6f689",
						padding: "20px",
						color: "#000",
						borderRadius: "25px",
					},
				})}
			>
				<p>{__("Hello World!")}</p>
			</div>
		</>
	);
}
