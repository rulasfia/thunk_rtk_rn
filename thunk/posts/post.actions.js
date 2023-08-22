import {
	FAILURE_TYPE,
	POST_TYPE,
	REQUEST_TYPE,
	SUCCESS_TYPE,
} from "./post.actionType";
import { PostApi } from "./post.api";

const api = PostApi.newInstance();

export function getAllPosts() {
	return async (dispatch) => {
		dispatch({
			type: `${POST_TYPE}${REQUEST_TYPE}`,
		});

		try {
			const res = await api.getAllPosts();

			/**
			 * transform api response & pick first 20 item
			 */
			const validResponse = res.data.slice(0, 20);

			dispatch({
				type: `${POST_TYPE}${SUCCESS_TYPE}`,
				payload: validResponse,
			});
		} catch (err) {
			dispatch({
				type: `${POST_TYPE}${FAILURE_TYPE}`,
				payload: err,
			});
		}
	};
}
