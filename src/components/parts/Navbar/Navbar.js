import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/landingpage">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="">
                <a className="nav-link">About Us</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="">
                <a className="nav-link">Contact Us</a>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/login">
                  <a className="nav-link">Login </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/registration">
                  <button class="btn btn-primary">Regiistration</button>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
