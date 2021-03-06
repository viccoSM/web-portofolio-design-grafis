import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavDash from "../../parts/Navbar/NavDash";
import UploadImg from "../../parts/Upload/UploadImg";
import Beranda from "../Beranda/Beranda";
import Home from "../Home/Home";
import SavesFiles from "../SavedFiles/SavesFiles";
import Search from "../Search/Search";
import UserWork from "../userWork/UserWork";
import Scream from "../../parts/Scream/Scream";
import Share from "../../parts/Share/Share";

const Dash = () => {
  return (
    <>
      <NavDash />
      <Router>
        <Switch>
          <Route path="/dash/savedfiles" exact component={SavesFiles} />
          <Route path="/dash/category/:id" component={UserWork} />
          <Route path="/dash/Home" exact component={Home} />
          <Route path="/dash/upload" exact component={UploadImg} />
          <Route path="/dash/beranda" exact component={Beranda} />
          <Route path="/dash/search/:id" component={Search} />
          <Route path="/dash/scream/:id" component={Scream} />
          <Route path="/dash/share/:id" component={Share} />
        </Switch>
      </Router>
    </>
  );
};

export default Dash;
