import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";

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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
