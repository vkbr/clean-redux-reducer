# Clean Redux Reducer

Create reducer without messy looking switch statements.

## Installation

NPM:
```
npm install clean-redux-reducer
```

Yarn:
```
yarn add clean-redux-reducer
```

## Usage

```js
// reducer.js
import CreateReducer from 'clean-redux-reducer';

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
