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
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then((res) => {
          // Signed in
          // ...
          // const dataUser = localStorage.setItem(
          //   "userData",
          //   JSON.stringify(res)
          // );
          const dataUser = {
            email: res.user.email,
            uid: res.user.uid,
            emailVerified: res.user.emailVerified,
          };
          console.log("success", res);
          // history.push("/Home");
          resolve(dataUser);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
          console.log(errorCode, errorMessage);
          reject();
        });
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
