
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from './components/Loginpage';
import Home from './components/Home';
import AddEmployee from './components/EmployeeManagement/AddEmployee';
import ViewEmployees from './components/EmployeeManagement/ViewEmployee';
import EditEmployees from './components/EmployeeManagement/EditEmployee';
import LoginPage from "./components/IT20090944/LoginRegister/LoginRegisterpage";
import Home from "./components/Home";
import AllItems from "./components/IT20090944/ItemsManage/AllItems";
import AddUpdateProduct from "./components/IT20090944/ItemsManage/AddUpdateProduct";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Employee" component={AddEmployee} />
      <Stack.Screen name="ViewEmp" component={ViewEmployees} />
      <Stack.Screen name="EditEmp" component={EditEmployees} />
        <Stack.Screen name="AllItems" component={AllItems} />
        <Stack.Screen
          name="Add"
          component={AddUpdateProduct}
          options={{ title: "Add Product" }}
          initialParams={{ item: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


