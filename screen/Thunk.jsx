// @ts-check
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import storeConfig from "../thunk/store";

function ThunkDemo() {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Thunk Implementation</Text>
			<StatusBar style="auto" />
		</View>
	);
}

export default function ThunkScreen() {
	return (
		<Provider store={storeConfig()}>
			<ThunkDemo />
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
