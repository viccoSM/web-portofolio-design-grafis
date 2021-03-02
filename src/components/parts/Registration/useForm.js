import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../../config/Firebase/Firebase";

const useFormRegister = (validate) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    university: "",
    major: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [Login, setlogin] = useState(false);
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
    // isLogin();
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((res) => {
          localStorage.setItem("userData", JSON.stringify(res));
          // Signed in
          // ...
          setlogin(true);
          console.log("success", res);
          resolve(true);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
          console.log(errorCode, errorMessage);
          setlogin(false);
          reject(false);
        });
    });
  };
  // const createDataRegister = () => {
  //   console.log("user/information", userData.user.uid);
  // };

  const registerSubmit = async () => {
    const res = await handleRegisterSubmit().catch((err) => err);
    if (res) {
      const userData = JSON.parse(localStorage.getItem("userData"), res);
      console.log("uer", userData.user.uid);
      firebase
        .database()
        .ref("users/" + userData.user.uid)
        .push({
          firstName: values.firstName,
          lastName: values.lastName,
          major: values.major,
          university: values.university,
          email: values.email,
        });
      history.push("/login");
      // createDataRegister();
      console.log("success", res);
    } else {
      console.log("login failed");
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
    // createDataUser,
    values,
    errors,
  };
};

export default useFormRegister;
