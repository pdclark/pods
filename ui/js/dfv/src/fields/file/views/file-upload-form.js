import template from 'dfv/src/fields/file/views/file-upload-form.html';

import { PodsFieldView } from 'dfv/src/core/pods-field-views';

export const FileUploadForm = PodsFieldView.extend( {
	childViewEventPrefix: false, // Disable implicit event listeners in favor of explicit childViewTriggers and childViewEvents

	tagName: 'div',

	template: _.template( template ),

	ui: {
		addButton: '.pods-dfv-list-add',
	},

	triggers: {
		'click @ui.addButton': 'childview:add:file:click',
	},
} );
