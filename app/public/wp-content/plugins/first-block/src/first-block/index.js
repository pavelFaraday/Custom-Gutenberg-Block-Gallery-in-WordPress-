import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	icon: {
		src: "video-alt3",
		foreground: "#f00",
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
