import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer container">
          <div className="row">
            <div className="col-md-8">
              <h6>About us</h6>
              <p>
                Kami adalah mahasiswa Universitas Klabat yang membuat platform
                ini. Platform ini merupakan platform portofolio desain grafis
                yang dikhuskan bagi para mahasiswa yang memiliki minat di bidang
                desain grafis.
              </p>
            </div>
            <div className="col-md">
              <h6>Contact Us</h6>
              <ul>
                <li>089684949063</li>
                <li>manoposemuel@gamil.com</li>
                <li>pietersonrionaldo9@gmail.com</li>
              </ul>
            </div>
          </div>
          <hr></hr>
          <p className="text-center">© 2021 Copyright</p>
        </div>
      </footer>
    </>
  );
}
