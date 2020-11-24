import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCV38CXwvd6jmwApLH3wwgv_lAlzNIezv0",
  authDomain: "slack-react-1a46a.firebaseapp.com",
  databaseURL: "https://slack-react-1a46a.firebaseio.com",
  projectId: "slack-react-1a46a",
  storageBucket: "slack-react-1a46a.appspot.com",
  messagingSenderId: "265747666876",
  appId: "1:265747666876:web:39d95f0932eda10927fdb9",
  measurementId: "G-8TP97KTM8N",
};

const initializeApp = firebase.initializeApp(firebaseConfig);
export const database = initializeApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
 