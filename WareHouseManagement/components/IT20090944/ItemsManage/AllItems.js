import React, { useEffect, useLayoutEffect, useState } from "react";
import { database } from "../../../firebase-config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import Item from "./Item";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

export default function AllItems() {
  const [items, setItems] = useState([]);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Add" onPress={() => navigation.navigate("Add")} />
      ),
    });
  }, []);

  useEffect(() => {
    const collectionRef = collection(database, "items");
    const ownquery = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(ownquery, (querySnapshot) => {
      setItems(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          emoji: doc.data().emoji,
          name: doc.data().name,
          quantity: doc.data().quantity,
          createdAt: doc.data().createdAt,
        }))
      );
    });

    return unsubscribe;
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}> Items stored</Text>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ac81e3",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 16,
  },
});
