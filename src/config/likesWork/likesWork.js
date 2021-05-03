import React from "react";
import firebase from "../Firebase/Firebase";
const likesWork = () => {
  const likeWork = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
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
          .update({ likes: countLikes + 1 });
      }
    });
  };
  return { likeWork };
};

export default likesWork;
