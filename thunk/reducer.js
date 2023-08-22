// @ts-check
import { reducer as network } from "react-native-offline";
import { combineReducers } from "redux";

const appReducers = combineReducers({ network });

/** @type {import('redux').Reducer} rootReducer */
const rootReducer = (state, action) => {
	let stateTemp = state;

	return appReducers(stateTemp, action);
};

export default rootReducer;
