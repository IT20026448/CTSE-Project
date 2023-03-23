import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Text,
} from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

const AddTaskScreen = (props) => {
  const initialState = {
    taskName: "",
    taskDescription: "",
    userName: "",
  };

  const [state, setState] = useState(initialState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewTask = async () => {
    if (
      state.taskName === "" ||
      state.taskDescription === "" ||
      state.userName === ""
    ) {
      alert("Empty field");
    } else {
      try {
        addDoc(collection(db, "Tasks"), {
          taskName: state.taskName,
          taskDescription: state.taskDescription,
          userName: state.userName,
        });

        props.navigation.navigate("TaskList");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Task Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Task Name"
          onChangeText={(value) => handleChangeText(value, "taskName")}
          value={state.taskName}
        />
      </View>

      {/* Description Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Task Description"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "taskDescription")}
          value={state.taskDescription}
        />
      </View>

      {/* User Name */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="User Name"
          multiline={true}
          numberOfLines={2}
          onChangeText={(value) => handleChangeText(value, "userName")}
          value={state.userName}
        />
      </View>

      <Pressable style={styles.button} onPress={() => saveNewTask()}>
        <Text style={styles.text}>{"Save Task"}</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default AddTaskScreen;
