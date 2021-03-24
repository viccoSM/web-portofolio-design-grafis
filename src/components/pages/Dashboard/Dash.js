import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavDash from "../../parts/Navbar/NavDash";
import UploadImg from "../../parts/Upload/UploadImg";
import Beranda from "../Beranda/Beranda";
import Home from "../Home/Home";
import UserWork from "../userWork/UserWork";

const Dash = () => {
  return (
    <>
      <NavDash />
      <Router>
        <Switch>
          <Route path="/dash/category/:id" component={UserWork} />
          <Route path="/dash/Home" exact component={Home} />
          <Route path="/dash/upload" exact component={UploadImg} />
          <Route path="/dash/beranda" exact component={Beranda} />
        </Switch>
      </Router>
    </>
  );
};

export default Dash;
