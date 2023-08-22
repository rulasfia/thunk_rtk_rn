import {
	FAILURE_TYPE,
	POST_TYPE,
	REQUEST_TYPE,
	SUCCESS_TYPE,
} from "./post.actionType";

const initialState = {
	posts: [],
	isLoading: false,
	isError: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case `${POST_TYPE}${REQUEST_TYPE}`:
			return {
				...state,
				isLoading: !state.posts ? true : false,
			};

		case `${POST_TYPE}${SUCCESS_TYPE}`:
			return {
				...state,
				isLoading: false,
				posts: action.payload === state.posts ? state.posts : action.payload,
			};

		case `${POST_TYPE}${FAILURE_TYPE}`:
			return {
				...state,
				isLoading: false,
				isError: true,
				error: action.payload,
			};
		default:
			return state;
	}
};
