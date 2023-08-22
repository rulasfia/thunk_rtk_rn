import Axios from "axios";

/**
 * @typedef {{
 * 	url: string
 * 	method: 'POST' | 'GET' | 'PATH' | 'PUT' | 'DELETE'
 * 	data: object
 * 	params: any,
 * 	headers: object
 * }} BaseQueryParams
 */

let axios = Axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
});

export const baseQuery = {
	updateHeaders: (headers) => {
		axios.defaults.headers = headers;
	},
	/**
	 *
	 * @returns {import("@reduxjs/toolkit/dist/query").BaseQueryFn<BaseQueryParams>}
	 */
	getAxios: () => {
		return async ({ url, method, data, params, headers }) => {
			try {
				const result = await axios({
					url,
					method,
					data,
					params,
					headers,
				});
				return { data: result.data };
			} catch (axiosError) {
				const error = axiosError;
				return { error };
			}
		};
	},
};
