import React, { useEffect } from "react";
import firebase from "../../../config/Firebase/Firebase";
import { useHistory } from "react-router-dom";
import FormCategory from "../../parts/Catagory/FormCategory";

const Home = () => {
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

  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
        <FormCategory />
        {/* <Link to="/formategory">category</Link> */}
      </nav>
    </section>
  );
};

export default Home;
