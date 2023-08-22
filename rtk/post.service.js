import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./api";

export const postApi = createApi({
	reducerPath: "postApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com",
	}),
	endpoints: (builder) => ({
		getAllPost: builder.query({
			query: () => `/posts`,
			/**
			 * Transform api response & pick first 20 item
			 * @param {import("../components/PostList").Post[]} response
			 * @param {import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta | undefined} meta
			 * @param {*} arg
			 */
			transformResponse: (response, meta, arg) => {
				const validResponse = response.slice(0, 20);
				return validResponse;
			},
		}),
		getPost: builder.query({
			query: (postId) => `/posts/${postId}`,
		}),
	}),
});

export const { useGetAllPostQuery } = postApi;
