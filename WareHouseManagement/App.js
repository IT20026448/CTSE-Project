import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./components/Loginpage";
import Home from "./components/Home";
import Tasks from "./screens/Task.js";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tasks" component={Tasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
