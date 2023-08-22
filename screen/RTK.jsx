import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "../rtk/rtk.store";
import {
	useGetAllPostQuery,
	useGetPostDetailQuery,
} from "../rtk/posts/post.service";
import { Loading, PostList } from "../components/PostList";
import { styles } from "./RTK.styles";

function RTKDemo() {
	const { data, isLoading, isError } = useGetAllPostQuery();

	console.log("RTK:", { isLoading, isError, data });

	return (
		<View style={styles.container}>
			<Text style={styles.header}>RTK Implementation</Text>
			{isLoading ? <Loading /> : null}
			{data && data.length > 0 ? <PostList data={data} /> : null}
			<StatusBar style="auto" />
		</View>
	);
}

export default function RTKScreen() {
	return (
		<Provider store={store}>
			<RTKDemo />
		</Provider>
	);
}
