/**
 * WordPress dependencies
 */
import {
	PanelBody,
	Button,
	Spinner,
	__unstableMotion as motion,
	__unstableAnimatePresence as AnimatePresence,
} from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { upload } from '@wordpress/icons';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { isBlobURL } from '@wordpress/blob';

/**
 * Internal dependencies
 */
import { store as editorStore } from '../../store';

function flattenBlocks( blocks ) {
	const result = [];

	blocks.forEach( ( block ) => {
		result.push( block );
		result.push( ...flattenBlocks( block.innerBlocks ) );
	} );

	return result;
}

function Image( block ) {
	const { selectBlock } = useDispatch( blockEditorStore );
	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
		<motion.img
			onClick={ () => {
				selectBlock( block.clientId );
			} }
			key={ block.clientId }
			alt={ block.attributes.alt }
			src={ block.attributes.url }
			animate={ { opacity: 1 } }
			exit={ { opacity: 0, scale: 0 } }
			style={ {
				width: '36px',
				height: '36px',
				objectFit: 'cover',
				borderRadius: '2px',
				cursor: 'pointer',
			} }
			whileHover={ { scale: 1.08 } }
		/>
	);
}

export default function PostFormatPanel() {
	const [ isUploading, setIsUploading ] = useState( false );
	const externalImages = useSelect( ( select ) => {
		const { getEditorBlocks } = select( editorStore );
		return flattenBlocks( getEditorBlocks() ).filter( ( block ) => {
			return (
				block.name === 'core/image' &&
				block.attributes.url &&
				! block.attributes.id
			);
		} );
	}, [] );
	const { updateBlockAttributes } = useDispatch( blockEditorStore );
	const mediaUpload = useSelect( ( select ) => {
		const { getSettings } = select( blockEditorStore );

		return getSettings().mediaUpload;
	}, [] );

	if ( ! externalImages.length ) {
		return null;
	}

	const panelBodyTitle = [
		__( 'Suggestion:' ),
		<span className="editor-post-publish-panel__link" key="label">
			{ __( 'External media' ) }
		</span>,
	];

	function uploadImages() {
		setIsUploading( true );
		Promise.all(
			externalImages.map( ( image ) =>
				window
					.fetch(
						`${
							window.ajaxurl
						}?action=gutenberg_fetch_media&url=${ encodeURIComponent(
							image.attributes.url
						) }`
					)
					.then( ( response ) => response.blob() )
					.then(
						( blob ) =>
							new Promise( ( resolve, reject ) => {
								mediaUpload( {
									filesList: [ blob ],
									onFileChange: ( [ media ] ) => {
										if ( isBlobURL( media.url ) ) {
											return;
										}

										updateBlockAttributes( image.clientId, {
											id: media.id,
											url: media.url,
										} );
										resolve();
									},
									onError() {
										reject();
									},
								} );
							} )
					)
			)
		).then( () => {
			setIsUploading( false );
		} );
	}

	return (
		<PanelBody initialOpen={ true } title={ panelBodyTitle }>
			<p>
				{ __(
					'There are some external images in the post. You can upload them to the media library.'
				) }
			</p>
			<div
				style={ {
					display: 'inline-flex',
					'flex-wrap': 'wrap',
					gap: '8px',
				} }
			>
				<AnimatePresence>
					{ externalImages.map( ( image ) => {
						return <Image key={ image.clientId } { ...image } />;
					} ) }
				</AnimatePresence>
				<Button
					icon={ upload }
					variant="primary"
					onClick={ uploadImages }
				>
					{ __( 'Upload all' ) }
				</Button>
			</div>
			{ isUploading && <Spinner /> }
		</PanelBody>
	);
}
