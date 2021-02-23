import React from "react";
import firebase from "../../../config/Firebase/Firebase";

const Home = () => {
  const handleLogout = () => {
    firebase.auth().signOut();
  };
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
        {/* <Link to="/Category"></Link> */}
      </nav>
    </section>
  );
};

export default Home;
