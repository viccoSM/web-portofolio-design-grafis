import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../../config/Firebase/Firebase";

const useForm = (validate) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    University: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const history = useHistory();

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
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((user) => {
        // Signed in
        // ...
        history.push("login");
        console.log("success", user);
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

    setErrors(validate(values));
  };

  return { handleChange, handleRegisterSubmit, handleSubmit, values, errors };
};

export default useForm;
