/*global _ */
import template from 'dfv/src/fields/file/views/file-upload-item.html';

import { PodsFieldListView, PodsFieldView } from 'dfv/src/core/pods-field-views';

/**
 * Individual list items, representing a single file
 */
export const FileUploadItem = PodsFieldView.extend( {
	childViewEventPrefix: false, // Disable implicit event listeners in favor of explicit childViewTriggers and childViewEvents

	tagName: 'li',

	template: _.template( template ),

	className: 'pods-dfv-list-item',

	ui: {
		dragHandle: '.pods-dfv-list-handle',
		editLink: '.pods-dfv-list-edit-link',
		viewLink: '.pods-dfv-list-link',
		downloadLink: '.pods-dfv-list-download',
		removeButton: '.pods-dfv-list-remove',
		itemName: '.pods-dfv-list-name'
	},

	triggers: {
		'click @ui.removeButton': 'remove:file:click'
	},
} );

/**
 * The file list container
 */
export const FileUploadList = PodsFieldListView.extend( {
	childViewEventPrefix: false, // Disable implicit event listeners in favor of explicit childViewTriggers and childViewEvents

	tagName: 'ul',

	className: 'pods-dfv-list',

	childView: FileUploadItem,

	childViewTriggers: {
		'remove:file:click': 'childview:remove:file:click'
	},

	onAttach() {
		const fieldConfig = this.options.fieldModel.get( 'fieldConfig' );
		// eslint-disable-next-line camelcase
		let sortAxis = 'y';

		// @todo
		// http://stackoverflow.com/questions/1735372/jquery-sortable-list-scroll-bar-jumps-up-when-sorting/4187833#4187833

		if ( 1 !== parseInt( fieldConfig.file_limit, 10 ) ) {
			if ( 'tiles' === fieldConfig.file_field_template ) {
				sortAxis = '';
			}

			// init sortable
			this.$el.sortable( {
				containment: 'parent',
				axis: sortAxis,
				scrollSensitivity: 40,
				tolerance: 'pointer',
				opacity: 0.6,
			} );
		}
	},
} );

