import { ReduxAction } from './CreateReducer';

type Reducer = (state: any, action: ReduxAction) => any;

let bufferActions: {[key: string]: Reducer} = {};

export const action = (actionType: string) => (target: Reducer) => {
	bufferActions[actionType] = target;
};

export const getDecoratedReducerWithInitialState = (initialState): Reducer => {
	const actions = bufferActions;
	bufferActions = {};

	return (state = initialState, action) => {
		const reducer = actions[action.type];
		if (typeof reducer === 'function') {
			return reducer(state, action);
		} else {
			return state;
		}
	};
};
