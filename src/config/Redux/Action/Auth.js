import firebase from "../../Firebase/Firebase";

export const handleLoginSubmit = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        // Signed in
        // ...
        // localStorage.setItem("userData", JSON.stringify(res));
        // const dataUser = {
        //   email: res.user.email,
        //   uid: res.user.uid,
        //   emailVerified: res.user.emailVerified,
        // };
        console.log("success", res);
        dispatch({ type: "CHANGE_LOGIN", value: true });
        dispatch({ type: "CHANGE_USER", value: res.user });
        resolve(true);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorCode, errorMessage);
        dispatch({ type: "CHANGE_LOADING", value: false });
        reject(false);
      });
  });
};
