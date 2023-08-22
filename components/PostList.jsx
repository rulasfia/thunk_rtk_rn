import { FlatList, StyleSheet, Text, View } from "react-native";

/**
 * @typedef {{
 *  id: number,
 *  title: string
 *  body: string,
 *  userId: number
 * }} Post
 */

/**
 * Component for rendering list of post
 * @param {{data: Post[]}} props
 */
export function PostList({ data }) {
	return (
		<FlatList
			data={data}
			renderItem={({ item }) => <Item post={item} />}
			keyExtractor={(item) => item.id}
		/>
	);
}

/**
 * Component for rendering post item
 * @param {{post: Post}} props
 */
function Item({ post }) {
	return (
		<View style={styles.item}>
			<Text style={styles.title}>{post.title}</Text>
			<Text>{post.body}</Text>
		</View>
	);
}

export function Loading() {
	return <Text style={styles.title}>Loading...</Text>;
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: "#C7D2B9",
		borderRadius: 16,
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
		marginBottom: 4,
	},
});
