import { Button } from "react-bootstrap";
import Header from "./components/shared_components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AllBlogs from "./components/pages/Home/AllBlogs/AllBlogs";
import Home from "./components/pages/Home/Home/Home";
function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/allBlogs">
          <AllBlogs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
