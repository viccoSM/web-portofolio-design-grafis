import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5mujroA9L153BsBj6uRPruIi2w-AA2nA",
  authDomain: "portofolio-desain-grafis.firebaseapp.com",
  projectId: "portofolio-desain-grafis",
  storageBucket: "portofolio-desain-grafis.appspot.com",
  messagingSenderId: "348718095190",
  appId: "1:348718095190:web:d7681abb07dd50098494f7",
  measurementId: "G-7RCDNP01VZ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const storage = firebase.storage();
// firebase.analytics();

export default firebase;
