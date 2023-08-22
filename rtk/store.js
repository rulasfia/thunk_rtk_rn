// @ts-check
import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./post.service";
// Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { pokemonApi } from "./services/pokemon";

export const store = configureStore({
	reducer: {
		// Add the generated reducer as a specific top-level slice
		[postApi.reducerPath]: postApi.reducer,
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postApi.middleware),
});

// setupListeners(store.dispatch)