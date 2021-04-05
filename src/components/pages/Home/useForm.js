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
          // console.log(snapshot.val());
          const infoData = [];
          Object.keys(snapshot.val()).map((key) => {
            infoData.push({
              id: key,
              data: snapshot.val()[key],
            });
            // console.log(infoData.data);
          });
          console.log("data", infoData);
          // console.log("img", images);
          localStorage.setItem("profilApi", JSON.stringify(infoData));
          setProfil(infoData);
          resolve(infoData);
        }
      });
      // .catch((err) => {
      //   const profilApi = JSON.parse(localStorage.getItem(profilApi));
      //   setProfil(profilApi);
      // });
    });
    // axios
    //   .get(
    //     "https://portofolio-desain-grafis-default-rtdb.firebaseio.com/users/" +
    //       userData.user.uid +
    //       "/information.json"
    //   )
    //   .then((res) => {
    //     // console.log("res", res);
    //     const infoData = [];
    //     Object.keys(res.data).map((key) => {
    //       infoData.push({
    //         id: key,
    //         data: res.data[key],
    //       });
    //     });
    //     setProfil(infoData);
    //     localStorage.setItem("profilApi", JSON.stringify(infoData));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     const profilApi = JSON.parse(localStorage.getItem(profilApi));
    //     setProfil(profilApi);
    //     console.log("profil", profil);
    //   });
  };
  const DeleteCategory = () => {
    const idCategory = JSON.parse(localStorage.getItem("idCategory"));
    // const deleteImgCat = await firebase
    //   .database()
    //   .ref("files/")
    //   .orderByChild("idCategory")
    //   .equalTo(idCategory)
    //   .remove()
    //   .then((res) => {
    //     console.log("success", res);
    //   })
    //   .catch((err) => {
    //     console.log("error", err);
    //   });

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
          // console.log(snapshot.val());
          const infoData = [];
          Object.keys(snapshot.val()).map((key) => {
            infoData.push({
              id: key,
              data: snapshot.val()[key],
            });
            // console.log(infoData.data);
          });
          console.log("data", infoData);
          setCategories(infoData);
          // console.log("img", images);
          localStorage.setItem("categoriesApi", JSON.stringify(infoData));
          resolve(infoData);
        }
      });
      // .catch((err) => {
      //   const categoriesApi = JSON.parse(localStorage.getItem(categoriesApi));
      //   setCategories(categoriesApi);
      // });
    });

    // axios
    //   .get(
    //     "https://portofolio-desain-grafis-default-rtdb.firebaseio.com/users/" +
    //       userData.user.uid +
    //       "/category.json"
    //   )
    //   .then((res) => {
    //     const infoData = [];
    //     Object.keys(res.data).map((key) => {
    //       infoData.push({
    //         id: key,
    //         data: res.data[key],
    //       });
    //     });
    //     setCategories(infoData);
    //     // console.log("categories", categories);
    //     localStorage.setItem("categoriesApi", JSON.stringify(infoData));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     const categoriesApi = JSON.parse(localStorage.getItem(categoriesApi));
    //     setCategories(categoriesApi);
    //   });
  };
  const history = useHistory();
  // const dataStorage = localStorage.setItem(
  //   "categories",
  //   JSON.stringify(categories)
  // );
  return {
    DeleteCategory,
    getProfilApi,
    profil,
    getCategoryApi,
    categories,
    // dataStorage,
  };
};

export default useForm;
