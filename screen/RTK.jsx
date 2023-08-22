import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "../rtk/rtk.store";
import { useGetAllPostQuery, useGetPostDetailQuery } from "../rtk/post.service";
import { Loading, PostList } from "../components/PostList";

function RTKDemo() {
	const { data, isLoading, isError } = useGetAllPostQuery();
	const { data: detail } = useGetPostDetailQuery("2");

	console.log("RTK:", { isLoading, isError, detail });

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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		width: "100%",
		textAlign: "center",
		fontSize: 24,
		fontWeight: "500",
		paddingVertical: 8,
		borderBottomWidth: 2,
		borderBottomColor: "#607856",
	},
});
