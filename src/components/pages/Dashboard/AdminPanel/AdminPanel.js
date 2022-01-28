import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
// import AllBlogs from "../../AllBlogs/AllBlogs";
import PostBlog from "../../PostBlog/PostBlog";
import ManageBlogs from "../ManageBlogs/ManageBlogs";
import DashboardHome from "../DashboardHome.js/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";

import "./AdminPanel.css";

const AdminPanel = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="m-0">
      <div className="row dashbord-fild ">
        <div className="col-lg-2 col-sm-12 dashbord-list">
          <div>
            <Link className="link-style" to={`${url}`}>
              <li className="list-item">
                <i className="fas fa-home list-icon"></i>Home
              </li>
            </Link>
            <Link className="link-style" to={`${url}/manageBlogs`}>
              <li className="list-item">
                <i className="fas fa-tasks"></i> &nbsp;Manage All Blogs
              </li>
            </Link>
            <Link className="link-style" to={`${url}/postBlog`}>
              <li className="list-item">
                <i className="fas fa-pen-square"></i> &nbsp;Post a Blog
              </li>
            </Link>

            <Link className="link-style" to={`${url}/makeAdmin`}>
              <li className="list-item">
                <i className="fas fa-users-cog list-icon"></i>Make an Admin
              </li>
            </Link>
          </div>
        </div>

        <div className="col-lg-10 col-sm-12 p-3">
          <Switch>
            <Route exact path={`${path}`}>
              <DashboardHome />
            </Route>
            <Route exact path={`${path}/manageBlogs`}>
              <ManageBlogs />
            </Route>
            <Route exact path={`${path}/postBlog`}>
              <PostBlog />
            </Route>
            <Route exact path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
