import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
// import AllBlogs from "../../AllBlogs/AllBlogs";
import PostBlog from "../../PostBlog/PostBlog";
import ManageBlogs from "../ManageBlogs/ManageBlogs";
import DashboardHome from "../DashboardHome.js/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
// import BloodRequests from "../BloodRequests/BloodRequests";
// import Donor from "../../Donor/Donor";
// import Home from "../AdminHome/AdminHome";
// import RequestHistory from "../RequestHistory/RequestHistory";
import "./AdminPanel.css";
// import MakeAdmin from "../MakeAdmin/MakeAdmin";
// import DonationRequests from "../DonationRequests/DonationRequests";

const AdminPanel = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="m-0">
      {/* Admin panel Heding start */}
      <div className=" head-line">
        <h4 className="blood-heading"> Admin Dashboard</h4>
      </div>
      {/* Admin panel Heding end */}
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
                <i className="fas fa-user-alt list-icon"></i>Manage All Blogs
              </li>
            </Link>
            <Link className="link-style" to={`${url}/postBlog`}>
              <li className="list-item">
                <i className="fas fa-user-alt list-icon"></i>Post a Blog
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
            <Route exact path={`${path}/bloodRequests`}>
              {/* <BloodRequests></BloodRequests> */}
            </Route>
            <Route exact path={`${path}/requestHistory`}>
              {/* <RequestHistory></RequestHistory> */}
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
