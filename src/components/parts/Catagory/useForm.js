import { useState } from "react";
import firebase from "../../../config/Firebase/Firebase";

export const useFormCategory = () => {
  const [category, setCategory] = useState();

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const createDataUser = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log("user", userData.user.uid);
    console.log("category", category);
    firebase
      .database()
      .ref("users/" + userData.user.uid + "/category")
      .push({
        tittle: category,
      });
  };
  return {
    handleChange,
    handleSubmit,
    createDataUser,
    category,
  };
};

export default useFormCategory;
