import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Button,
  View,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import {
  collection,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import firebase from "../../firebase-config";

const TaskDetailsScreen = (props) => {
  const initialState = {
    id: "",
    taskName: "",
    taskDescription: "",
    userName: "",
  };

  const [task, setTask] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const handleTextChange = (value, prop) => {
    setTask({ ...task, [prop]: value });
  };

  const getTaskById = async (id) => {
    getDoc(doc(db, "Tasks", id))
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const taskData = docSnapshot.data();
          setTask(taskData);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    // const docRef = doc(db, "Tasks", id);
    // const doc = await getDoc(docRef);
    // const dbRef = getDoc(doc(db, "Tasks")).doc(id);
    // const documentSnap = await dbRef.get();
    // const task = documentSnap.data();

    // setTask({ ...task, id: documentSnap.id });
  };

  const deleteTask = async () => {
    setLoading(true);
    const dbRef = deleteDoc(doc(db, "Tasks", props.route.params.taskId));
    await dbRef.delete();

    setLoading(false);
    props.navigation.navigate("TaskList");
  };

  const openConfirmationAlert = () => {
    Alert.alert(
      "Removing the Task",
      "Are you sure?",
      [
        { text: "Yes", onPress: () => deleteTask() },
        { text: "No", onPress: () => console.log("canceled") },
      ],
      {
        cancelable: true,
      }
    );
  };

  const updateTask = async () => {
    const taskRef = updateDoc(doc(db, "Tasks")).doc(task.id);

    await taskRef.set({
      taskName: task.taskName,
      taskDescription: task.taskDescription,
      userName: task.userName,
    });
    setTask(initialState);
    props.navigation.navigate("TaskList");
  };

  useEffect(() => {
    getTaskById(props.route.params.taskId);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          placeholder="Task Name"
          autoCompleteType="username"
          style={styles.inputGroup}
          value={task.taskName}
          onChangeText={(value) => handleTextChange(value, "taskName")}
        />
      </View>
      <View>
        <TextInput
          autoCompleteType="username"
          placeholder="Task Description"
          style={styles.inputGroup}
          value={task.taskDescription}
          onChangeText={(value) => handleTextChange(value, "taskDescription")}
        />
      </View>
      <View>
        <TextInput
          placeholder="User Name"
          autoCompleteType="username"
          style={styles.inputGroup}
          value={task.userName}
          onChangeText={(value) => handleTextChange(value, "userName")}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Delete"
          onPress={() => openConfirmationAlert()}
          color="#E37399"
        />
      </View>
      <View>
        <Button title="Update" onPress={() => updateTask()} color="#19AC52" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  btn: {
    marginBottom: 7,
  },
});

export default TaskDetailsScreen;
