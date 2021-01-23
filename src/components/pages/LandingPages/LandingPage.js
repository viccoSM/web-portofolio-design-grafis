import React from "react";
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
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Registration
              </a>
            </div>
            <div className="col-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
