import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Hello World!</Text>
			<View style={styles.buttonsContainer}>
				<Button title="Thunk" onPress={() => navigation.navigate("Thunk")} />
				<Button title="RTK" onPress={() => navigation.navigate("RTK")} />
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonsContainer: {
		marginTop: 12,
		flexDirection: "row",
		gap: 12,
	},
});
