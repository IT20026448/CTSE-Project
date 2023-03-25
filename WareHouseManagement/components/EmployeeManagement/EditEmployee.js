/*import { useNavigation } from '@react-navigation/native';
import {View, Text, TextInput, Button, FlatList, ListView} from 'react-native';
import React, { useState, useEffect } from 'react';
import { getDocs, getDoc, collection, doc, updateDoc, query, where } from "firebase/firestore";
import { ScrollView, SearchBar } from "react-native-gesture-handler";
import { firebase, db } from '../../firebase-config';
import { ListItem } from "react-native-elements";*/

const EditEmployees = () => {
    /*const [emps, setEmps] = useState([]);
    const [searchInput, setSearchInput] = useState(props);
    const [empID, setEmpID] = useState('');
    const [empName, setEmpName] = useState('');
    const [designation, setDesignation] = useState('');
    const [age, setAge] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');

    // Set the "capital" field of the city 'DC'
    const updateEmp = async () => {
        const empRef = doc(db, "Employee", props.id);

        await updateDoc(empRef, {
            age: age,
            contact: contact,
            designation: designation,
            email: email,
            empID: empID,
            empName: empName,
        });
    };

    useEffect(() => {
        updateEmp();
    }, [empID]);

    //display all employee details
        useEffect(() => {
           getDocs(collection(db, "Employee")).then((querySnapshot) => {
                const emps = [];

                querySnapshot.docs.forEach((doc) => {
                    const {empID, empName, designation, age, contact, email} = doc.data();

                    emps.push({
                        empID,
                        empName,
                        designation,
                        age,
                        contact,
                        email
                    });
                });
                setEmps(emps);
            });
        }, []);

    return(
        <ScrollView>
            <Text> Employees </Text>

            <TextInput
               style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}

               value={searchInput}
            />

            {emps.map((emp) => {
                return(
                    <View>
                        <TextInput placeholder={emp.empID} value={empID}></TextInput>
                        <TextInput placeholder={emp.empName} value={empName}></TextInput>
                        <TextInput placeholder={emp.designation} value={designation}></TextInput>
                        <TextInput placeholder={emp.age} value={age}></TextInput>
                         <TextInput placeholder={emp.contact} value={contact}></TextInput>
                         <TextInput placeholder={emp.email} value={email}></TextInput>
                    </View>
                );
            })}

            <Button title="Save"/>
        </ScrollView>
   );*/
};

export default EditEmployees;