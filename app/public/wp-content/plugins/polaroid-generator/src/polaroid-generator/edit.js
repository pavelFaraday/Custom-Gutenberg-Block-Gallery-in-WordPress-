import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

const renderPhotos = ( count ) => {
	const photosArray = [];
	for ( let i = 0; i < count; i++ ) {
		photosArray.push(
			<div key={ i } className="polaroid">
				<img
					src={ `https://picsum.photos/200/150.webp?random=${ i }` }
					width="200"
					loading="lazy"
					alt=""
				/>
			</div>
		);
	}
	return photosArray;
};

export default function Edit( { attributes } ) {
	const { photos } = attributes;
	return (
		<section { ...useBlockProps() }>
			<div className="polaroids">{ renderPhotos( photos ) }</div>
			{ __( 'Polaroid Generator – Wow!', 'polaroid-generator' ) }
		</section>
	);
}
