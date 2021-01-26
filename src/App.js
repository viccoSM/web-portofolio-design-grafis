import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPages/LandingPage";
import Registration from "./components/parts/Registration/Registration";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/registration" exact component={Registration} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
