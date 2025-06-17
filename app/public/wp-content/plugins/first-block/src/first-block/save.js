import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { content, videoID } = attributes;
	return (
		<>
			<div {...useBlockProps.save()}>
				<RichText.Content tagName="h2" value={content} />
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
			</div>
			Save
		</>
	);
}
