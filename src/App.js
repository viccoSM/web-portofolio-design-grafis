import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPages/LandingPage";
import Footer from "./components/parts/Footer/Footer";
import Registration from "./components/parts/Registration/Registration";
import Navbar from "./components/parts/Navbar/Navbar";
import Login from "./components/parts/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/Login" exact component={Login} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
