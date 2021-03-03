import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../../config/Logout/Logout";
import SearchBar from "../SearchBar/SearchBar";

import "./Navbar.css";

const NavDash = () => {
  const { handleLogout } = Logout();
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
              <Link to="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus">
                <a className="nav-link">About Us</a>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <SearchBar />
              </li>
              <li className="nav-item">
                <Link to="">
                  <button class="btn btn-primary" onClick={handleLogout}>
                    Log Out
                  </button>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavDash;
