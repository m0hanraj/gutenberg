/**
 * External dependencies
 */
import {
	addBlock,
	initializeEditor,
	setupCoreBlocks,
	getEditorHtml,
	fireEvent,
	within,
	waitFor,
	changeAndSelectTextOfRichText,
} from 'test/helpers';

/**
 * WordPress dependencies
 */
import { ENTER } from '@wordpress/keycodes';

setupCoreBlocks();

describe( 'Pullquote', () => {
	it( 'should produce expected markup for multiline text', async () => {
		// Arrange
		const screen = await initializeEditor();
		await addBlock( screen, 'Pullquote' );

		const [ pullquoteBlock ] = screen.getAllByLabelText(
			/Pullquote Block\. Row 1/
		);
		// Await inner blocks to be rendered
		const citationBlock = await waitFor( () =>
			screen.getByPlaceholderText( 'Add citation' )
		);

		// Act
		fireEvent.press( pullquoteBlock );
		const pullquoteTextInput =
			within( pullquoteBlock ).getByPlaceholderText( 'Add quote' );
		const string = 'A great statement.';
		changeAndSelectTextOfRichText( pullquoteTextInput, string, {
			selectionStart: string.length,
			selectionEnd: string.length,
		} );
		fireEvent( pullquoteTextInput, 'onKeyDown', {
			nativeEvent: {},
			preventDefault() {},
			keyCode: ENTER,
		} );

		// TODO: Determine a way to type after pressing ENTER within the Pullquote block.

		const citationTextInput =
			within( citationBlock ).getByPlaceholderText( 'Add citation' );
		changeAndSelectTextOfRichText( citationTextInput, 'A person', {
			selectionStart: 2,
			selectionEnd: 2,
		} );
		fireEvent( citationTextInput, 'onKeyDown', {
			nativeEvent: {},
			preventDefault() {},
			keyCode: ENTER,
		} );

		// Assert
		expect( getEditorHtml() ).toMatchInlineSnapshot( `
		"<!-- wp:pullquote -->
		<figure class="wp-block-pullquote"><blockquote><p>A great statement.<br></p><cite>A <br>person</cite></blockquote></figure>
		<!-- /wp:pullquote -->"
	` );
	} );
} );
