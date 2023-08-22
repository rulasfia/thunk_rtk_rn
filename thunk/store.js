// @ts-check
import { applyMiddleware, createStore } from "redux";
import { createNetworkMiddleware } from "react-native-offline";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

// initial middleware for redux
const createMiddlewares = () => {
	const networkMiddleware = createNetworkMiddleware({
		regexActionType: /123.*123/,
		actionTypes: [],
		queueReleaseThrottle: 1000,
	});

	return applyMiddleware(networkMiddleware, thunk);
};

/**
 * function to initial redux store configuration
 * @param {object} [state] - custom app state
 */
const storeConfig = (state) =>
	createStore(rootReducer, state, createMiddlewares());

export default storeConfig;
