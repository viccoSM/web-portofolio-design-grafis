import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import firebase from "../../../config/Firebase/Firebase";

const useFormComments = () => {
  const [comments, setComments] = useState();
  const [viewComments, setViewComments] = useState([]);
  //   const [time, setTime] = useState();

  const userName = JSON.parse(localStorage.getItem("userName"));
  const idImg = JSON.parse(localStorage.getItem("idImg"));
  //   const getTime = () => {
  //     const timeNow = moment().format("LLL");
  //     setTime(timeNow);
  //   };

  const handleChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getComments = () => {
    return new Promise((resolve, reject) => {
      const starCountRef = firebase.database().ref("comments/" + idImg);
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
          setViewComments(infoData);
          resolve(viewComments);
        }
      });
    });
  };

  const uploadComments = () => {
    // console.log(time);

    firebase
      .database()
      .ref("comments/" + idImg)
      .push({
        user: userName,
        comments: comments,
      })
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.log("error", err);
        alert("upload failed");
      });
  };

  return {
    handleChange,
    handleSubmit,
    comments,
    uploadComments,
    viewComments,
    getComments,
  };
};

export default useFormComments;
