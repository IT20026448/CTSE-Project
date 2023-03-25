import { useNavigation } from '@react-navigation/native';
import {View, Text, TextInput, Button, FlatList, ListView} from 'react-native';
import React, { useState, useEffect } from 'react';
import { getDocs, getDoc, deleteField, deleteDoc, updateDoc, collection, doc, query, where } from "firebase/firestore";
import { ScrollView, SearchBar } from "react-native-gesture-handler";
import { firebase, db } from '../../firebase-config';
import { ListItem } from "react-native-elements";

const ViewEmployees = (props, {empID, empName, designation, age, contact, email}) => {
    const [emps, setEmps] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const navigation = useNavigation();

    const editEmpNav = (props.id) => {
        navigation.navigate("EditEmp", props.id);
    }

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }
    /*const firstSearch = () => {
        this.searchDirectory(this.empRef);
    }

    const searchDirectory = (empRef) => {
        var searchText = this.state.searchText.toString();

        if(searchText == ""){
            this.listenForEmp(empRef);
        } else{
          empRef.orderByChild("searchable").startAt(searchText).endAt(searchText).on('value', (snap) => {
          let employees = [];

          snap.forEach((child) => {
             employees.push({
                 empID: child.val().empID,
                 empName: child.val().empName,
                 designation: child.val().designation,
                 age: child.val().age,
                 contact: child.val().contact,
                 email: child.val().email
             });
          });
          this.setState({
             dataSource: this.state.dataSource.cloneWithRows(employees)
          });
        });
       }
    }*/

    //read data with an id
    const getEmpById = async(id) => {
       const empCol = query(collection(db, "Employee"), where("empID", "==", id));
       const empSnapshot = await getDocs(empCol);
       setSearchInput(empSnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

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

    //delete field
    const deleteEmp = async () => {
        const empRef = doc(db, 'Employee', props.id);

        // Remove the 'capital' field from the document
        await updateDoc(empRef, {
            capital: deleteField()
        });
    }

    return(
        <ScrollView>
            <Text> Employees </Text>

            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(searchInput) => {(searchInput) => setSearchInput(searchInput)}}
                    value={searchInput}
                />
                <Button title="Find" onPress={getEmpById(searchInput)}/>
            </View>

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