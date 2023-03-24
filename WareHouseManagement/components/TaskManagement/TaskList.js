import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import profile from "../../assets/tiffany.jpeg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

const TaskList = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "Tasks")).then((querySnapshot) => {
      const tasks = [];
      querySnapshot.docs.forEach((doc) => {
        const { taskName, taskDescription, userName } = doc.data();

        tasks.push({
          taskName,
          taskDescription,
          userName,
        });
      });
      setTasks(tasks);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("AddTaskScreen")}
        title="Create Task"
      />
      {tasks.map((task) => {
        return (
          <ListItem
            key={task.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("TaskDetailsScreen", {
                taskId: task.id,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar source={profile} rounded />

            <ListItem.Content>
              <ListItem.Title>{task.taskName}</ListItem.Title>
              <ListItem.Subtitle>{task.userName}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default TaskList;
