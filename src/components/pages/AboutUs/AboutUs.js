import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <div className="aboutus jumbotron">
        <div className="aboutus container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="aboutus display-4">About Us</h1>
              <p className="aboutus lead">
                Kami adalah mahasiswa Universitas Klabat yang membuat platform
                ini. Platform ini merupakan platform portofolio desain grafis
                yang dikhuskan bagi para mahasiswa yang memiliki minat di bidang
                desain grafis.
              </p>
            </div>
            <div className="col-md login"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
