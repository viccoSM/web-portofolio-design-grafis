import React, { useEffect } from "react";
// import firebase from "../../../config/Firebase/Firebase";
import FormCategory from "../../parts/Catagory/FormCategory";
import Cards from "../../parts/Cards/Cards";
import Logout from "../../../config/Logout/Logout";

const Home = () => {
  const { handleLogout } = Logout();

  return (
    <>
      <div className="home jumbotron" style={{ background: `url()` }}>
        <div className="home container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-4">Create Your Portfolio Design Grafis</h1>
              <p className="lead">
                Platform yang menyediakan tempat untuk portofolio desain grafis
                dari mahasiswa
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="profile"></div>
        <div className="category">
          <div className="d-flex flex-row-reverse">
            <FormCategory />
          </div>
          <div class="d-flex flex-wrap">
            <Cards title="Category" imageUrl="" body="Category" />
            <Cards title="Category" imageUrl="" body="Category" />
            <Cards title="Category" imageUrl="" body="Category" />
            <Cards title="Category" imageUrl="" body="Category" />
            <Cards title="Category" imageUrl="" body="Category" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
