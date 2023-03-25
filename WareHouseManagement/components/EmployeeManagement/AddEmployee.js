import { useNavigation } from '@react-navigation/native';
import {View, Text, TextInput, Button} from 'react-native';
import { useState } from 'react';
import { doc, addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase-config';

const AddEmployee = () => {
    const [empID, setEmpID] = useState('');
    const [empName, setEmpName] = useState('');
    const [designation, setDesignation] = useState('');
    const [age, setAge] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');

    //add doc in collection Employee
    function addEmployee(){
        addDoc(collection(db, "Employee"), {
            //submit data
            age: age,
            contact: contact,
            designation: designation,
            email: email,
            empID: empID,
            empName: empName,
        }).then(() => {
            console.log("Employee added successfully!!!");
        }).catch((error) => {
            console.log(error);
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

export default AddEmployee;