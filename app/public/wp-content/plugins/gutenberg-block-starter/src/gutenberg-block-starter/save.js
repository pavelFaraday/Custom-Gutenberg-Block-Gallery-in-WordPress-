import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	return (
		<p {...useBlockProps.save()}>
			<div>SAVE FUNCTION</div>
		</p>
	);
}
