import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from './components/Loginpage';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee';
import ViewEmployees from './components/ViewEmployee';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Employee" component={AddEmployee} />
      <Stack.Screen name="ViewEmp" component={ViewEmployees} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


