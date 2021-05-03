import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../../config/Firebase/Firebase";

const useFormRegister = (validate) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    university: "",
    major: "",
    gender: "",
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
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((res) => {
          localStorage.setItem("userData", JSON.stringify(res));
          // Signed in
          // ...
          resolve(res);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert("register Failed");
          console.log(errorCode, errorMessage);
        });
    });
  };

  const registerSubmit = async () => {
    const res = await handleRegisterSubmit().catch((err) => err);
    if (res) {
      const userData = JSON.parse(localStorage.getItem("userData"), res);
      firebase
        .database()
        .ref("users/" + userData.user.uid + "/information")
        .push({
          firstName: values.firstName,
          lastName: values.lastName,
          userName: values.userName,
          major: values.major,
          university: values.university,
          email: values.email,
          gender: values.gender,
        });
      history.push("/login");
    } else {
      alert("register Failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
  };

  return {
    handleChange,
    handleRegisterSubmit,
    handleSubmit,
    registerSubmit,
    values,
    errors,
  };
};

export default useFormRegister;
