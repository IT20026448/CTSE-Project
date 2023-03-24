import { useNavigation } from '@react-navigation/native';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import React, { useState, useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { ScrollView } from "react-native-gesture-handler";
import { firebase, db } from '../firebase-config';
import ItemComponent from './ItemComponent';
import { ListItem } from "react-native-elements";

const ViewEmployees = (props) => {
    const [emps, setEmps] = useState([]);

    //read data with an id
   /* getDoc(doc(db, "Employee", "ID HERE")).then((docData) => {
        // data saved successfully
        if(docData.exists()){
            console.log(docData());
            setEmpID(docData.data().empID);
            setEmpName(docData.data().empName);
            setDesignation(docData.data().designation);
            setAge(docData.data().age);
            setContact(docData.data().contact);
            setEmail(docData.data().email);

        } else{

        }
    }))*/

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

            {emps.map((emp) => {
                return(
                    <ListItem
                        key={emp.id}
                    >
                        <ListItem.Content>
                            <ListItem.Title>Employee ID: {emp.empID}</ListItem.Title>
                            <ListItem.Subtitle>Employee Name: {emp.empName}</ListItem.Subtitle>
                            <ListItem.Subtitle>Employee Designation: {emp.designation}</ListItem.Subtitle>
                            <ListItem.Subtitle>Employee Age: {emp.age}</ListItem.Subtitle>
                            <ListItem.Subtitle>Employee Contact: {emp.contact}</ListItem.Subtitle>
                            <ListItem.Subtitle>Employee Email: {emp.email}</ListItem.Subtitle>
                            <Button title="Edit"/>
                            <Button title="Delete"/>
                        </ListItem.Content>
                    </ListItem>
                );
            })}
        </ScrollView>
   );
};

export default ViewEmployees;