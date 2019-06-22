# Create Redux Reducer

Create reducer without messy looking switch statements.

## Installation

NPM:
```
npm install create-redux-reducer
```

Yarn:
```
yarn add create-redux-reducer
```

## Usage

```js
// reducer.js
import CreateReducer from 'create-redux-reducer';

const initialState = {
	// ...
	tick: 0,
};

function onIncrement(state, action) {
	return {
		...state,
		tick: state.tick + (action.incrementBy || 1),
	};
}

function onDecrement(state, action) {
	return {
		...state,
		tick: state.tick - (action.incrementBy || 1),
	};
}

const reducer = CreateReducer
	.fromInitialState(initialState)
	.addCase('INCREMENT', onIncrement)
	.addCase('DECREMENT', onDecrement)
	.finalizeReducer();

export default reducer;
```
