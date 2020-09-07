import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA7Fvwrcg8FqCgmx2gkoDZ_OmXvVsmEoRY",
  authDomain: "vue-chat-45591.firebaseapp.com",
  databaseURL: "https://vue-chat-45591.firebaseio.com",
  projectId: "vue-chat-45591",
  storageBucket: "vue-chat-45591.appspot.com",
  messagingSenderId: "780070974640",
  appId: "1:780070974640:web:11b58e84085924d48c7775",
  measurementId: "G-ETM0L4S32S"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore()
