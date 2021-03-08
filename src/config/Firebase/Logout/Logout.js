import { useHistory } from "react-router-dom";
import firebase from "../Firebase";

const Logout = () => {
  const history = useHistory();
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        // Signed in
        // ...
        console.log("success", res);
        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorCode, errorMessage);
      });
  };

  return { handleLogout };
};

export default Logout;
