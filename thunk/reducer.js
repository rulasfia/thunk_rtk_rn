// @ts-check
import { reducer as network } from "react-native-offline";
import { combineReducers } from "redux";
import postReducer from "./posts/post.reducer";

const appReducers = combineReducers({ network, post: postReducer });

/** @type {import('redux').Reducer} rootReducer */
const rootReducer = (state, action) => {
	let stateTemp = state;

	return appReducers(stateTemp, action);
};

export default rootReducer;
