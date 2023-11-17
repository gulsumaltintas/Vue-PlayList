// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD3gQLAqPIN_NvwvAVz9tQ05TzhLM9_3-Y",
  authDomain: "playlist-142f4.firebaseapp.com",
  projectId: "playlist-142f4",
  storageBucket: "playlist-142f4.appspot.com",
  messagingSenderId: "116675231096",
  appId: "1:116675231096:web:5ed9f7a56d69324bc69c8d",
  measurementId: "G-7C60F6J92T",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
