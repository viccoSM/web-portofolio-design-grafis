import axios from "axios";
import React, { useState } from "react";
import firebase from "../../../config/Firebase/Firebase";

const useFormUserWork = () => {
  const [images, setImages] = useState([]);

  const getImageApi = async () => {
    return new Promise((resolve, reject) => {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const idCategory = JSON.parse(localStorage.getItem("idCategory"));
      const starCountRef = firebase
        .database()
        .ref("files/")
        .orderByChild("idCategory")
        .equalTo(idCategory);
      starCountRef.on("value", (snapshot) => {
        // const data = snapshot.val();
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
        // console.log("info", infoData);
        // setImages(infoData);
        // console.log("datainfo", snapshot.val());
      });
      // .catch((err) => {
      //   console.log("error", err);
      // });
      //   // console.log("info", images);
      //   // updateStarCount(postElement, data);
      // });
      // .catch((err) => {
      //   console.log("err", err);
      // });
      //   axios
      //     .get(
      //       `https://portofolio-desain-grafis-default-rtdb.firebaseio.com/files/${idCategory}.json`
      //     )
      //     .then((res) => {
      //       const infoData = [];
      //       Object.keys(res.data).map((key) => {
      //         infoData.push({
      //           id: key,
      //           data: res.data[key],
      //         });
      //       });
      //       // setImages(infoData);
      //       setImages(infoData);
      //       console.log("img", images);
      //       // console.log("info", infoData);
      //     })
      //     .catch((error) => {
      //       console.log(error);
    });
  };
  const deleteImg = () => {
    const idImg = JSON.parse(localStorage.getItem("idImg"));

    firebase
      .database()
      .ref("files/" + idImg)
      .remove()
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return { images, getImageApi, deleteImg };
};

export default useFormUserWork;
