import React, { useState } from "react";
import firebase from "../Firebase";

const GetData = () => {
  const [profil, setProfil] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const getDataProfile = () => {
    const urlUser = firebase
      .database()
      .ref("users/" + userData.user.uid + "/information")
      .on("value", (snapshot) => {
        const infoData = [];
        snapshot.forEach((info) => {
          infoData.push(info.val());
        });
        setProfil({ infoData });
        console.log("get ", infoData);
      });
  };
  return {
    getDataProfile,
    profil,
  };
};

export default GetData;
