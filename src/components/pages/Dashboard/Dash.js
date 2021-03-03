import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavDash from "../../parts/Navbar/NavDash";
import Home from "../Home/Home";

const Dash = () => {
  return (
    <>
      <NavDash />
      <Router>
        <Switch>
          <Route path="/Home" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default Dash;
