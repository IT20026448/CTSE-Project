import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./components/Loginpage";
import Home from "./components/Home";
import AddTaskScreen from "./components/TaskManagement/AddTaskScreen";
import TaskList from "./components/TaskManagement/TaskList";
import TaskDetailsScreen from "./components/TaskManagement/TaskDetailsScreen";
import Tasks from "./screens/Task";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="AddTaskScreen"
          component={AddTaskScreen}
          options={{ title: "Create new task" }}
        />
        <Stack.Screen
          name="TaskList"
          component={TaskList}
          options={{ title: "Task List" }}
        />
         <Stack.Screen
          name="TaskDetailsScreen"
          component={TaskDetailsScreen}
          options={{ title: "Task Details" }}
        />
        <Stack.Screen
          name="Tasks"
          component={Tasks}
          options={{ title: "Quick Tasks" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
