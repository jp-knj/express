import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./container/Home";
import HandleRedirectContainer from "./container/HandleRedirect";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>
        <Route exact path="/:shortId">
          <HandleRedirectContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
