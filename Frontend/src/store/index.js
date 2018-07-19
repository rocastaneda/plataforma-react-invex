import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import RootReducer from 'Modules'

const configureStore = () => {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(
		RootReducer,
		composeEnhancers(applyMiddleware(thunk))
	);
}

export default configureStore
