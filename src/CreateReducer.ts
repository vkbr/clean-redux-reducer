export interface ReduxAction {
	type: string,
	[key: string]: any,
}

interface CreateReducerProps {
	initialState: object,
}

class CreateReducer {
	protected initialState;
	protected actions = {};

	static fromInitialState = initialState => new CreateReducer({ initialState });

	constructor({ initialState }: CreateReducerProps) {
		console.log({ initialState });
		this.initialState = initialState;
	}

	addCase(actionType: string, action: ReduxAction): this {
		this.actions = {
			...this.actions,
			[actionType]: action,
		};
		return this;
	}

	finalizeReducer(): (state: object, action: ReduxAction) => any {
		const actions = this.actions;
		const initialState = this.initialState;

		return function(state = initialState, action) {
			const reducer = actions[action.type];
			if (typeof reducer === 'function') {
				return reducer(state, action);
			} else {
				return state;
			}
		};
	}
}

export default CreateReducer;
