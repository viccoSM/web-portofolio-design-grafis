import { useState } from "react";

import firebase from "../Firebase/Firebase";

const Auth = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    University: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({
      ...values,
      [id]: value,
    });
  };

  const handleRegisterSubmit = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.confirmPassword)
      .then((user) => {
        // Signed in
        // ...
        console.log("success", user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message; // ..
        console.log(errorCode, errorMessage);
      });
  };

  const handleLoginSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((user) => {
        // Signed in
        // ...
        console.log("success", user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorCode, errorMessage);
      });
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return {
    handleChange,
    handleRegisterSubmit,
    handleLoginSubmit,
    handleSubmit,
    values,
    handleLogout,
  };
};

export default Auth;
