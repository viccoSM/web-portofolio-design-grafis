import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import firebase from "../../../config/Firebase/Firebase";

const useForm = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [profil, setProfil] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProfilApi = () => {
    return new Promise((resolve, reject) => {
      const starCountRef = firebase
        .database()
        .ref("users/" + userData.user.uid + "/information");
      starCountRef.on("value", (snapshot) => {
        if (snapshot.val() === null) {
          console.log("errror");
        } else {
          const infoData = [];
          Object.keys(snapshot.val()).map((key) => {
            infoData.push({
              id: key,
              data: snapshot.val()[key],
            });
          });
          localStorage.setItem("profilApi", JSON.stringify(infoData));
          setProfil(infoData);
          resolve(infoData);
        }
      });
    });
  };
  const DeleteCategory = () => {
    const idCategory = JSON.parse(localStorage.getItem("idCategory"));

    const deleteCat = firebase
      .database()
      .ref("users/" + userData.user.uid + "/category/" + idCategory)
      .remove()
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const getCategoryApi = async () => {
    return new Promise((resolve, reject) => {
      const starCountRef = firebase
        .database()
        .ref("users/" + userData.user.uid + "/category");
      starCountRef.on("value", (snapshot) => {
        if (snapshot.val() === null) {
          console.log("errror");
        } else {
          const infoData = [];
          Object.keys(snapshot.val()).map((key) => {
            infoData.push({
              id: key,
              data: snapshot.val()[key],
            });
          });
          setCategories(infoData);
          localStorage.setItem("categoriesApi", JSON.stringify(infoData));
          resolve(infoData);
        }
      });
    });
  };
  const history = useHistory();

  return {
    DeleteCategory,
    getProfilApi,
    profil,
    getCategoryApi,
    categories,
  };
};

export default useForm;
