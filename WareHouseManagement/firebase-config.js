// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDZyAKisnHBMHzGcak7X9nmyof4oIddI68",
  authDomain: "warehousemanagement-3136b.firebaseapp.com",
  projectId: "warehousemanagement-3136b",
  storageBucket: "warehousemanagement-3136b.appspot.com",
  messagingSenderId: "607915091182",
  appId: "1:607915091182:web:40a36cda35c2c804f67fff",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
