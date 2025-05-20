import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
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

export default function Edit( { attributes, setAttributes } ) {
	const { photos } = attributes;
	return (
		<section { ...useBlockProps() }>
			<div className="polaroids">{ renderPhotos( photos ) }</div>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Photos', 'polaroid-generator' ) }
						value={ photos }
						onChange={ ( newCount ) =>
							setAttributes( { photos: newCount } )
						}
						min={ 3 }
						max={ 12 }
					/>
					<p className="description">
						{ __(
							'Choose the number of photos to display.',
							'polaroid-generator'
						) }
					</p>
				</PanelBody>
			</InspectorControls>
		</section>
	);
}
