import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../../components/pages/LandingPages/LandingPage";
import Footer from "../../components/parts/Footer/Footer";
import Registration from "../../components/parts/Registration/Registration";
import NavBar from "../../components/parts/Navbar/NavBar";
import Login from "../../components/parts/Login/Login";
import AboutUs from "../../components/pages/AboutUs/AboutUs";
import Dash from "../../components/pages/Dashboard/Dash";
// import Dashboard from "../../components/pages/Dashboard/Dashboard";
// import FormCategory from "../../components/parts/Catagory/FormCategory";
// import RoutesDash from "./RoutesDash";
// import RoutesHome from "./RoutesHome";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/registration" exact>
            <NavBar />
            <Registration />
          </Route>
          <Route path="/login" exact>
            <NavBar />
            <Login />
          </Route>
          <Route path="/aboutus" exact>
            <NavBar />
            <AboutUs />
          </Route>
          <Route path="/Dash" component={Dash} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Routes;
