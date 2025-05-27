 import { useBlockProps, RichText } from "@wordpress/block-editor";


export default function save({ attributes }) {
	const action =
		"https://rudrastyh.us14.list-manage.com/subscribe/post?u=1828b9fa70c6e326a1aba64f2&amp;id=" +
		attributes.list_id +
		"&amp;f_id=003944e0f0";

	return (
		<div {...useBlockProps.save()}>
			<div className="misha-subscription-block-wrapper">
				<div
					className="misha-subscription-block-image"
					style={{ backgroundImage: "url( " + attributes.image.url + " )" }}
				></div>
				<div className="misha-subscription-block-content">
					<RichText.Content tagName="h3" value={attributes.titletext} />
					<RichText.Content tagName="p" value={attributes.justtext} />
					<form action={action} method="POST">
						<input type="email" name="EMAIL" placeholder="Your email" />
						<RichText.Content tagName="button" value={attributes.btntext} />
						<input
							type="hidden"
							name="opt_in"
							value={attributes.doubleoptin ? "yes" : "no"}
						/>
					</form>
				</div>
			</div>
		</div>
	);
}
