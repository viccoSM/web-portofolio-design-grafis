import React, { useState } from "react";
import firebase from "../../../config/Firebase/Firebase";

const useFormRating = () => {
  const [rating, setRating] = useState();
  const [ratings, setRatings] = useState([]);
  const idImg = JSON.parse(localStorage.getItem("idImg"));
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userName = JSON.parse(localStorage.getItem("userName"));

  const addValueRating = (ratingValue) => {
    const starCountRef = firebase
      .database()
      .ref("rating/" + idImg)
      .orderByChild("userId")
      .equalTo(userData.user.uid);
    starCountRef.once("value", (snapshot) => {
      setRating(ratingValue);
      console.log(rating);
      if (snapshot.val() === null) {
        firebase
          .database()
          .ref("rating/" + idImg)
          .push({
            userName: userName,
            userId: userData.user.uid,
            rating: ratingValue,
          });
      } else if (snapshot.val() !== null) {
        snapshot.forEach((childSnapshot) => {
          console.log(rating);
          const key = childSnapshot.key;
          const value = childSnapshot.val();
          console.log("key", key);
          firebase
            .database()
            .ref("rating/" + idImg + "/" + key)
            .update({ rating: ratingValue });
          console.log("Title is : " + value.rating);
        });
      }
    });
  };

  const getRatingApi = () => {
    const starCountRef = firebase.database().ref("rating/" + idImg);
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
        console.log("data", infoData);
        setRatings(infoData);
        console.log(ratings);
      }
    });
  };
  return { rating, addValueRating, getRatingApi, ratings };
};

export default useFormRating;
