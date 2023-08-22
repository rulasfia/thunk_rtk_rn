import Axios from "axios";

export function axiosBaseQuery() {
	return async ({ url, method, data, params }) => {
		try {
			Axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
			const result = await Axios({
				url,
				method,
				data,
				params,
			});
			return { data: result.data };
		} catch (axiosError) {
			const error = axiosError;
			return { error };
		}
	};
}
