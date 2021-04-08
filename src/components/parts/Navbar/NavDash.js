import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";
import firebase from "../../../config/Firebase/Firebase";

import "./Navbar.css";

const NavDash = () => {
  const history = useHistory();
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        // Signed in
        // ...
        console.log("success", res);
        // history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
      {" "}
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar">
            <Nav className="mr-auto">
              <Nav.Link href="/dash/Home">Home</Nav.Link>
              <Nav.Link href="/dash/beranda">Beranda</Nav.Link>
            </Nav>
            <Form inline>
              <SearchBar />
              <Button
                variant="outline-primary"
                onClick={() => {
                  handleLogout();
                  history.push("/");
                }}
              >
                Log Out
              </Button>
            </Form>
            {/* <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/aboutus">About Us</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          
        </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              <Link
                // to="/dash/Home"
                onClick={() => {
                  history.push("/dash/Home");
                  window.location.reload(false);
                }}
              >
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // to="/dash/beranda"
                onClick={() => {
                  history.push("/dash/beranda");
                  window.location.reload(false);
                }}
              >
                <a className="nav-link">Beranda</a>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <SearchBar />
              </li>
              <li className="nav-item">
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    handleLogout();
                    history.push("/");
                  }}
                >
                  Log Out
                </button>
              </li>
            </ul>
          </form>
        </div>
      </nav> */}
    </>
  );
};

export default NavDash;
