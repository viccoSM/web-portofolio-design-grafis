import axios from "axios";
import React, { useState } from "react";
import firebase from "../../../config/Firebase/Firebase";

const useFormUserWork = () => {
  const [images, setImages] = useState([]);
  const [like, setLike] = useState(false);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const idCategory = JSON.parse(localStorage.getItem("idCategory"));

  const getImageApi = async () => {
    return new Promise((resolve, reject) => {
      const starCountRef = firebase
        .database()
        .ref("files/")
        .orderByChild("idCategory")
        .equalTo(idCategory);
      starCountRef.on("value", (snapshot) => {
        // const data = snapshot.val();
        if (snapshot.val() === null) {
          console.warn("Null");
        } else {
          const infoData = [];
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

  const likeWork = () => {
    const idImg = JSON.parse(localStorage.getItem("idImg"));
    const countLikes = JSON.parse(localStorage.getItem("countLikes"));
    const starCountRef = firebase
      .database()
      .ref("likes/" + idImg)
      .orderByChild("userId")
      .equalTo(userData.user.uid);

    starCountRef.once("value", (snapshot) => {
      console.log(snapshot.val);
      if (snapshot.val() !== null) {
        snapshot.forEach((childSnapshot) => {
          const key = childSnapshot.key;
          const value = childSnapshot.val();
          // console.log("Title is : " + value.like);
          // console.log("key", key);
          if (value.like == true) {
            firebase
              .database()
              .ref("likes/" + idImg + "/" + key)
              .update({ like: false });

            firebase
              .database()
              .ref("files/" + idImg)
              .update({ likes: countLikes - 1 });
          } else if (value.like == false) {
            firebase
              .database()
              .ref("likes/" + idImg + "/" + key)
              .update({ like: true });

            firebase
              .database()
              .ref("files/" + idImg)
              .update({ likes: countLikes + 1 });
          }
        });
      } else {
        firebase
          .database()
          .ref("likes/" + idImg)
          .push({
            userId: userData.user.uid,
            like: true,
          });

        firebase
          .database()
          .ref("files/" + idImg)
          .update({ likes: +1 });
      }
    });
  };

  return { images, getImageApi, deleteImg, likeWork };
};

export default useFormUserWork;
