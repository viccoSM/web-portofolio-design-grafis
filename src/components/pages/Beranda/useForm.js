import axios from "axios";
import React, { useState } from "react";
import firebase from "../../../config/Firebase/Firebase";

const useFormBeranda = () => {
  const [images, setImages] = useState([]);
  const getImageApi = () => {
    return new Promise((resolve, reject) => {
      const starCountRef = firebase.database().ref("files/");
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
          setImages(infoData);
          localStorage.setItem("imagesApi", JSON.stringify(infoData));
          resolve(infoData);
        }
      });
      // .catch((err) => {
      //   const categoriesApi = JSON.parse(localStorage.getItem(categoriesApi));
      //   setImages(categoriesApi);
      // });
    });
  };

  const saveImages = (desc, fileUrl, user) => {
    const userName = JSON.parse(localStorage.getItem("userName"));
    const userData = JSON.parse(localStorage.getItem("userData"));
    // console.log("username", userName);
    firebase
      .database()
      .ref("users/" + userData.user.uid + "/saved")
      .push({
        user: user,
        description: desc,
        file: fileUrl,
      })
      .then((res) => {
        alert("success");
      })
      .catch((err) => {
        alert("upload failed");
      });
  };

  return { getImageApi, images, saveImages };
};

export default useFormBeranda;
