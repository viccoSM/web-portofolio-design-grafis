import React, { useState } from "react";
import axios from "axios";

const useForm = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [profil, setProfil] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProfilApi = () => {
    axios
      .get(
        "https://portofolio-desain-grafis-default-rtdb.firebaseio.com/users/" +
          userData.user.uid +
          "/information.json"
      )
      .then((res) => {
        // console.log("res", res);
        const infoData = [];
        Object.keys(res.data).map((key) => {
          infoData.push({
            id: key,
            data: res.data[key],
          });
        });
        setProfil(infoData);
      });
  };

  const getCategoryApi = () => {
    axios
      .get(
        "https://portofolio-desain-grafis-default-rtdb.firebaseio.com/users/" +
          userData.user.uid +
          "/category.json"
      )
      .then((res) => {
        const infoData = [];
        Object.keys(res.data).map((key) => {
          infoData.push({
            id: key,
            data: res.data[key],
          });
        });
        setCategories(infoData);
      });
  };

  return { getProfilApi, profil, getCategoryApi, categories };
};

export default useForm;
