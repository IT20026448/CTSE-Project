import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import EmojiPicker from "rn-emoji-keyboard";
import { database } from "../../../firebase-config";
import {
  collection,
  addDoc,
  setDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function AddUpdateProduct() {
  const [isOpen, setIsOpen] = useState(false);
  const route = useRoute();
  const [item, setItem] = useState(
    route.params?.item ?? {
      emoji: "📦",
      quantity: 0,
      createdAt: new Date(),
    }
  );

  const navigation = useNavigation();

  const handlePick = (emojiObject) => {
    setItem({
      ...item,
      emoji: emojiObject.emoji,
    });
  };

  const onSend = async () => {
    try {
      if (item.id) {
        const docRef = doc(database, "items", item.id);
        const docSnapshot = await getDoc(docRef);
        const previousItem = docSnapshot.data();
        const updatedFields = {};
        let hasChanged = false;

        // Check if any fields have changed
        if (item.emoji !== previousItem.emoji) {
          updatedFields.emoji = item.emoji;
          hasChanged = true;
        }

        if (item.name !== previousItem.name) {
          updatedFields.name = item.name;
          hasChanged = true;
        }

        if (item.quantity !== previousItem.quantity) {
          updatedFields.quantity = item.quantity;
          hasChanged = true;
        }

        if (hasChanged) {
          await updateDoc(docRef, updatedFields);
          Alert.alert("Success", "Item Updated Successfully");
          navigation.goBack();
        } else {
          Alert.alert(
            "No Changes Made",
            "No changes have been made to the item."
          );
          navigation.goBack();
        }
      } else if (
        item.name == null ||
        item.quantity == null ||
        item.quantity == 0
      ) {
        Alert.alert("Please fill all the fields");
      } else {
        const docRef = await addDoc(collection(database, "items"), item);
        setItem({ ...item, id: docRef.id });
        Alert.alert("Success", "Item added successfully");
        navigation.goBack();
      }
    } catch (error) {
      Alert.alert("Error", "Item Adding failed");
      console.log(error);
    }
  };

  useEffect(() => {
    if (route.params?.id) {
      const docRef = doc(database, "items", route.params.id);
      onSnapshot(docRef, (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          setItem({
            id: doc.id,
            emoji: data.emoji,
            name: data.name,
            quantity: data.quantity,
          });
        }
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {item.id ? "Update Item" : "Add New Item"}
      </Text>
      <Text style={styles.emoji} onPress={() => setIsOpen(true)}>
        {item.emoji}
      </Text>
      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <TextInput
        value={item.name}
        onChangeText={(text) => setItem({ ...item, name: text })}
        placeholder="Enter Item name"
        style={styles.inputContainer}
      />

      <TextInput
        value={item.quantity.toString()}
        onChangeText={(text) => setItem({ ...item, quantity: text })}
        placeholder="Enter the quantity"
        style={styles.inputContainer}
        keyboardType="number-pad"
      />

      <Button title={item.id ? "Update" : "Add"} onPress={onSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0beed",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
  },

  emoji: {
    fontSize: 100,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 10,
    marginVertical: 6,
  },

  inputContainer: {
    width: "90%",
    padding: 13,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 6,
  },
});
