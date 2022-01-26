import { Button } from "react-bootstrap";
import Header from "./components/shared_components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AllBlogs from "./components/pages/AllBlogs/AllBlogs";
import Home from "./components/pages/Home/Home/Home";
import BlogDetails from "./components/pages/BlogDetails/BlogDetails";
import PostBlog from "./components/pages/PostBlog/PostBlog";
import Login from "./components/pages/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Register from "./components/pages/Login/Register/Register";
import PrivateRoute from "./components/pages/Login/PrivateRoute/PrivateRoute";
function App() {
  return (
    <AuthProvider>
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
          <PrivateRoute exact path="/blogDetails/:blogId">
            <BlogDetails></BlogDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
