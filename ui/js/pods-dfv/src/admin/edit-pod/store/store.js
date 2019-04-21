import { STORE_KEY_EDIT_POD } from './constants';
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
const { registerStore } = wp.data;

export const initStore = ( props ) => {
	props.podMeta = props.podMeta || {};

	const initialState = {
		ui: props.ui,
		fields: props.fields,
		labels: props.labels,
		podMeta: {
			podName: props.podMeta.name
		}
	};

	return registerStore( STORE_KEY_EDIT_POD, {
		reducer: reducer,
		selectors: selectors,
		actions: actions,
		initialState: initialState,
	} );
};
