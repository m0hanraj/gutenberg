/**
 * WordPress dependencies
 */
import { Button, Flex, FlexItem, Modal } from '@wordpress/components';
import {
	store as coreStore,
	useEntityId,
	useEntityProp,
} from '@wordpress/core-data';
import { useDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { DEFAULT_ENTITY_KIND, DEFAULT_ENTITY_TYPE } from '../constants';

export default function NavigationMenuDeleteControl( { onDelete } ) {
	const [ isConfirmModalVisible, setIsConfirmModalVisible ] =
		useState( false );
	const id = useEntityId( DEFAULT_ENTITY_KIND, DEFAULT_ENTITY_TYPE );
	const [ title ] = useEntityProp(
		DEFAULT_ENTITY_KIND,
		DEFAULT_ENTITY_TYPE,
		'title'
	);
	const { deleteEntityRecord } = useDispatch( coreStore );

	return (
		<>
			<Button
				className="wp-block-navigation-delete-menu-button"
				variant="secondary"
				isDestructive
				onClick={ () => {
					setIsConfirmModalVisible( true );
				} }
			>
				{ __( 'Delete menu' ) }
			</Button>
			{ isConfirmModalVisible && (
				<Modal
					title={ sprintf(
						/* translators: %s: the name of a menu to delete */
						__( 'Delete %s' ),
						title
					) }
					onRequestClose={ () => setIsConfirmModalVisible( false ) }
				>
					<p>
						{ __(
							'Are you sure you want to delete this navigation menu?'
						) }
					</p>
					<Flex justify="flex-end">
						<FlexItem>
							<Button
								variant="secondary"
								onClick={ () => {
									setIsConfirmModalVisible( false );
								} }
							>
								{ __( 'Cancel' ) }
							</Button>
						</FlexItem>
						<FlexItem>
							<Button
								variant="primary"
								onClick={ () => {
									deleteEntityRecord(
										DEFAULT_ENTITY_KIND,
										DEFAULT_ENTITY_TYPE,
										id,
										{
											force: true,
										}
									);
									onDelete( title );
								} }
							>
								{ __( 'Confirm' ) }
							</Button>
						</FlexItem>
					</Flex>
				</Modal>
			) }
		</>
	);
}
