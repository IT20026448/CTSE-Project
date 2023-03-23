import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./components/Loginpage";
import Home from "./components/Home";
import AddTaskScreen from "./components/TaskManagement/AddTaskScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} options={{ title: "Create new task"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
