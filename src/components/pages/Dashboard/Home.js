import React from "react";
import Auth from "../../../config/Auth/Auth";

const Home = () => {
  const { handleLogout } = Auth();
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
};

export default Home;
