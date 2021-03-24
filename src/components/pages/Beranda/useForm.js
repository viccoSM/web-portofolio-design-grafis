import axios from "axios";
import React, { useState } from "react";
import firebase from "../../../config/Firebase/Firebase";

const useFormBeranda = () => {
  const [images, setImages] = useState([]);
  const getImageApi = () => {
    return new Promise((resolve, reject) => {
      const starCountRef = firebase.database().ref("files/");
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
          console.log("data", infoData);
          setImages(infoData);
          console.log("img", images);
          resolve(infoData);
        }
        // console.log("info", infoData);
        // setImages(infoData);
        // console.log("datainfo", snapshot.val());
      });
    });
  };

  return { getImageApi, images };
};

export default useFormBeranda;
