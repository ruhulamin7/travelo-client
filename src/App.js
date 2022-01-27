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
import AdminRoute from "./components/pages/Login/AdminRoute/AdminRoute";
import AdminPanel from "./components/pages/Dashboard/AdminPanel/AdminPanel";
import Footer from "./components/shared_components/Footer/Footer";
import NotFound from "./components/pages/NotFound/NotFound";
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
          <PrivateRoute exact path="/postBlog">
            <PostBlog />
          </PrivateRoute>
          <PrivateRoute exact path="/blogDetails/:blogId">
            <BlogDetails />
          </PrivateRoute>
          <Route path="/dashboard">
            <AdminPanel />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*" component={NotFound} /> // anothe way to invoke a
          component
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
