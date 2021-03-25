import React from "react";
import firebase from "../../../config/Firebase/Firebase";

const useFormSaved = () => {
  const deleteImg = () => {
    const idImg = JSON.parse(localStorage.getItem("idImg"));
    const userData = JSON.parse(localStorage.getItem("userData"));

    firebase
      .database()
      .ref("users/" + userData.user.uid + "/saved/" + idImg)
      .remove()
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return { deleteImg };
};

export default useFormSaved;
