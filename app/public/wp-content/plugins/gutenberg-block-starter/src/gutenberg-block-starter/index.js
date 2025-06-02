import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

/**
 * Block Registration
 */

registerBlockType(metadata.name, {
	icon: {
		src: "admin-generic",
		foreground: "blue",
		background: "gray",
	},
	edit: Edit,
	save,
});
