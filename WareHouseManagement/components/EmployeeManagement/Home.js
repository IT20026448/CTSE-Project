import { View,Text, TouchableOpacity, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AddEmployee from './AddEmployee';
import React from 'react';

const Home = () => {
    const navigation = useNavigation();

    const addEmpNav = () => {
        navigation.navigate('Employee');
    }

    const viewEmpNav = () => {
        navigation.navigate("ViewEmp");
    }

    return(
        <View>
            <Text>This is home page</Text>
            <Button onPress={addEmpNav} title="Add Employee"/>
            <Button title="View Employee" onPress={viewEmpNav}/>
        </View>
    )
};

export default Home;