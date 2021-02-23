import { useState } from "react";
import { useHistory } from "react-router-dom";

import firebase from "../../../config/Firebase/Firebase";

const useForm = () => {
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

  const history = useHistory();
  const handleLoginSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((user) => {
        // Signed in
        // ...
        console.log("success", user);
        history.push("/Home");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorCode, errorMessage);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return {
    handleChange,
    handleLoginSubmit,
    handleSubmit,
    values,
  };
};

export default useForm;
