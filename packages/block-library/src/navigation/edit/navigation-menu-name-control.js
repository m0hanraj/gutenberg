/**
 * WordPress dependencies
 */
import { TextControl } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { DEFAULT_ENTITY_KIND, DEFAULT_ENTITY_TYPE } from '../constants';

export default function NavigationMenuNameControl() {
	const [ title, updateTitle ] = useEntityProp(
		DEFAULT_ENTITY_KIND,
		DEFAULT_ENTITY_TYPE,
		'title'
	);

	return (
		<TextControl
			__nextHasNoMarginBottom
			label={ __( 'Menu name' ) }
			value={ title }
			onChange={ updateTitle }
		/>
	);
}
