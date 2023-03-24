import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./components/IT20090944/LoginRegister/LoginRegisterpage";
import Home from "./components/Home";
import AllItems from "./components/IT20090944/ItemsManage/AllItems";
import AddUpdateProduct from "./components/IT20090944/ItemsManage/AddUpdateProduct";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loginpage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Home" component={Home} />
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

//
