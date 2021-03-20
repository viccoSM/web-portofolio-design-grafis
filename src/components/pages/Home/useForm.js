import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCategoryApi = async () => {
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
        // console.log("categories", categories);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const history = useHistory();
  // const dataStorage = localStorage.setItem(
  //   "categories",
  //   JSON.stringify(categories)
  // );
  return {
    getProfilApi,
    profil,
    getCategoryApi,
    categories,
    // dataStorage,
  };
};

export default useForm;
