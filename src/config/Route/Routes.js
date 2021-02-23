import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "../../components/pages/LandingPages/LandingPage";
import Footer from "../../components/parts/Footer/Footer";
import Registration from "../../components/parts/Registration/Registration";
import Navbar from "../../components/parts/Navbar/Navbar";
import Login from "../../components/parts/Login/Login";
import Dashboard from "../../components/pages/Dashboard/Dashboard";
import Category from "../../components/parts/Category/Category";

function Routes() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Dashboard} />
          <Route path="/category" exact component={Category} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Routes;
