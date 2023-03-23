/*import { useNavigation } from '@react-navigation/native';
import {View, Text, TextInput, Button} from 'react-native';
import { useState } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebase-config';

const ViewEmployees = () => {
    //view all employees
    function viewEmployees(){
        getDocs(collection(db, "Employee")).then(docSnap => {
            let employees = [];
            docSnap.forEach((doc) => {
                employees.push({...doc.data(), id:doc.id})
            });
            console.log("Document data:", employees);
        });
   }
    return(
        <View>
            <Text> Add Employee </Text>
            <Text> Enter employee ID: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(empID) => {setEmpID(empID)}}
                value={empID}
            />
            <Text> Enter Employee Name: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(empName) => {setEmpName(empName)}}
                value={empName}
            />
            <Text> Enter Employee Designation: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(designation) => {setDesignation(designation)}}
                value={designation}
            />
            <Text> Enter Employee Age: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(age) => {setAge(age)}}
                value={age}
            />
            <Text> Enter Employee Contact: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(contact) => {setContact(contact)}}
                value={contact}
            />
            <Text> Enter Employee Email: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(email) => {setEmail(email)}}
                value={email}
            />
            <Button onPress={addEmployee} title="Submit"/>
        </View>
    )
};

export default ViewEmployees;*/