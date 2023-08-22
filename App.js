import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/Home";
import ThunkScreen from "./screen/Thunk";
import RTKScreen from "./screen/RTK";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Thunk" component={ThunkScreen} />
				<Stack.Screen name="RTK" component={RTKScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
