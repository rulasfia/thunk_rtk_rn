// @ts-check

import ax from "axios";

export class BaseAPI {
	/** @type {import("axios").AxiosInstance} */
	axios;

	getAxios() {
		if (!this.axios) {
			this.axios = ax.create({
				baseURL: "https://jsonplaceholder.typicode.com",
			});
		}

		return this.axios;
	}
}
