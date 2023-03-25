import React from "react";
import { database } from "../../../firebase-config";
import { deleteDoc, doc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Item({ id, emoji, name, quantity }) {
  const navigation = useNavigation();

  const onEdit = () => {
    navigation.navigate("Add", { item: { id, emoji, name, quantity } });
  };

  const onDelete = () => {
    Alert.alert(
      "Delete Confirmation",
      "Are you sure you want to delete?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            const docRef = doc(database, "items", id);
            deleteDoc(docRef);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.itemContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.emoji}>{emoji}</Text>
        <AntDesign onPress={onDelete} name="delete" size={24} color="red" />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity
        onPress={() => onEdit({ id, emoji, name, quantity })}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
      {/* )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 8,
  },

  emoji: {
    fontSize: 100,
  },

  name: {
    fontSize: 32,
    fontWeight: "bold",
  },

  quantity: {
    fontSize: 24,
    fontWeight: "bold",
    color: "grey",
  },

  button: {
    backgroundColor: "#0FA5E9",
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
