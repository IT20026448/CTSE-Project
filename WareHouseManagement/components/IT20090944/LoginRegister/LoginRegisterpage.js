import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from "react-native";
import { firebaseConfig } from "../../../firebase-config";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Account created");
        const user = userCredential.user;
        console.log(user);
        Alert.alert("Success", "Account created successfully !!");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("error", error.message);
      });
  };

  const handleLoginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("signed in");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("error", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Welcome to WareMaster
      </Text>
      <Text style={{ fontSize: 20, color: "#054aeb" }}>
        Manage your warehouse
      </Text>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#a9a9a9"
        onChangeText={(input) => setUsername(input)}
        value={email}
        keyboardType="email-address"
        maxLength={50}
        autoFocus={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#a9a9a9"
        onChangeText={(input) => setPassword(input)}
        value={password}
        maxLength={50}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLoginUser}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#faf8d4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#a9a9a9",
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 18,
    color: "#000",
    backgroundColor: "#f9f9f9",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#0583eb",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "strech", // or 'stretch'
  },
});

export default LoginPage;
