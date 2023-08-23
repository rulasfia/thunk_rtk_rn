import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../api";

export const postApi = createApi({
	reducerPath: "postApi",
	baseQuery: baseQuery.getAxios(),
	endpoints: (builder) => ({
		getAllPost: builder.query({
			query: () => ({ method: "GET", url: `/posts` }),
			/**
			 * Transform api response & pick first 20 item
			 * @param {import("../../components/PostList").Post[]} response
			 */
			transformResponse: (response) => {
				const validResponse = response.slice(0, 20);
				return validResponse;
			},
		}),
		getPostDetail: builder.query({
			query: (postId) => ({ method: "GET", url: `/posts/${postId}` }),
		}),
	}),
});

export const { useGetAllPostQuery, useGetPostDetailQuery } = postApi;
