import React from "react";
import { Link } from "react-router-dom";
import Login from "../../parts/Login/Login";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="landingpage jumbotron">
        <div className="landingpage container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-4">Create Your Portfolio Design Grafis</h1>
              <p className="lead">
                Platform yang menyediakan tempat untuk portofolio desain grafis
                dari mahasiswa
              </p>
              <Link to="/registration">
                <button className="btn btn-primary btn-lg">Registration</button>
              </Link>
            </div>
            <div className="col-md login">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
