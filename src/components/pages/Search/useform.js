import React, { useState } from "react";
import firebase from "../../../config/Firebase/Firebase";

const useFormSearch = () => {
  const [images, setImages] = useState([]);
  const getImageApi = async () => {
    return new Promise((resolve, reject) => {
      const searchWork = JSON.parse(localStorage.getItem("searchWork"));
      const starCountRef = firebase
        .database()
        .ref("files/")
        .orderByChild("description")
        .startAfter(searchWork);
      starCountRef.on("value", (snapshot) => {
        if (snapshot.val() === null) {
          console.log("errror");
        } else {
          const infoData = [];
          // console.log("data", snapshot.val());
          Object.keys(snapshot.val()).map((key) => {
            infoData.push({
              id: key,
              data: snapshot.val()[key],
            });
          });
          resolve(setImages(infoData));
        }
      });
    });
  };
  const saveImages = (desc, fileUrl, user) => {
    const userName = JSON.parse(localStorage.getItem("userName"));
    const userData = JSON.parse(localStorage.getItem("userData"));
    // console.log("username", userName);
    console.log("user", userData.user.uid);
    console.log("category", desc);
    firebase
      .database()
      .ref("users/" + userData.user.uid + "/saved")
      .push({
        user: user,
        description: desc,
        file: fileUrl,
      })
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.log("error", err);
        alert("upload failed");
      });
  };

  return { getImageApi, images, saveImages };
};

export default useFormSearch;
