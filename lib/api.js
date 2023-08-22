// @ts-check

import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

export const axiosConfig = {};

export class BaseAPI {
	/** @type {import("axios").AxiosStatic} */
	axios;

	getAxios() {
		if (!this.axios) {
			this.axios = axios;
			/** insert config ... */
		}

		return this.axios;
	}
}

export class PostApi extends BaseAPI {
	async getAllPosts() {
		return await this.getAxios().get(POST_URL);
	}
}
