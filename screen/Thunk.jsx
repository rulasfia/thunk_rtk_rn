// @ts-check
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Provider, connect } from "react-redux";
import storeConfig from "../thunk/store";
import { styles } from "./Thunk.styles";
import {
	createErrorMessageSelector,
	createLoadingSelector,
} from "../thunk/helpers";
import { POST_TYPE } from "../thunk/posts/post.actionType";
import { getAllPosts } from "../thunk/posts/post.actions";
import { Loading, PostList } from "../components/PostList";

const loadingSelector = createLoadingSelector([POST_TYPE]);
const errorSelector = createErrorMessageSelector([POST_TYPE]);

const mapStateToProps = (state) => ({
	...state,
	error: errorSelector(state),
	isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
	getAllPosts: () => getAllPosts()(dispatch),
});

export const ThunkDemo = connect(
	mapStateToProps,
	mapDispatchToProps
)(function ThunkScreen(props) {
	useEffect(() => {
		props.getAllPosts();
	}, []);

	const { posts: data, isLoading, isError } = props.post;

	console.log("Thunk:", { isLoading, isError, data });

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Thunk Implementation</Text>
			{isLoading ? <Loading /> : null}
			{data && data.length > 0 ? <PostList data={data} /> : null}
			<StatusBar style="auto" />
		</View>
	);
});

export default function ThunkScreen() {
	return (
		<Provider store={storeConfig()}>
			<ThunkDemo />
		</Provider>
	);
}
