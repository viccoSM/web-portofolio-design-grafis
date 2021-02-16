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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam esse cumque repellat vel amet voluptates expedita
                quaerat facilis voluptatibus harum aspernatur natus ipsum,
                voluptas ullam officiis veritatis, cum commodi assumenda.
              </p>
            </div>
            <div className="col-md">
              <h6>Contact Us</h6>
              <ul>
                <li>089684949063</li>
                <li>user@gmail.com</li>
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
