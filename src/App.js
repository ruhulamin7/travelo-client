import { Button } from "react-bootstrap";
import Header from "./components/shared_components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AllBlogs from "./components/pages/AllBlogs/AllBlogs";
import Home from "./components/pages/Home/Home/Home";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import PostBlog from "./components/pages/PostBlog/PostBlog";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/allBlogs">
          <AllBlogs />
        </Route>
        <Route exact path="/postBlog">
          <PostBlog />
        </Route>
        <Route exact path="/blogDetails/:blogId">
          <BlogDetails></BlogDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
