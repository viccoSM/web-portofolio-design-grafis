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

import "./Navbar.css";

const NavBar = () => {
  const history = useHistory();
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
            </Nav>
            <Form inline>
              <Button
                variant="outline-primary"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  history.push("/registration");
                }}
              >
                Registration
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
          // data-toggle="collapse"
          // data-target="#navbarSupportedContent"
          // aria-controls="navbarSupportedContent"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
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
                <Link to="/login">
                  <a className="nav-link">Login </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/registration">
                  <button class="btn btn-primary">Registration</button>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </nav> */}
    </>
  );
};

export default NavBar;
