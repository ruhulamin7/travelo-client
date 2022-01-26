import React from "react";
import dashboard from "../../../../images/dashboard/dashboard.svg";
import useAuth from "../../../../hooks/useAuth";
import { Col, Row } from "react-bootstrap";
import "./dashboardHome.css";

const DashboardHome = () => {
  const { user, admin, logOut } = useAuth();
  return (
    <div className="dashboard-container">
      <div className="dashboard-inner">
        <h1 className="text-center mb-5">Welcome to Dashboard !</h1>
        <Row md={2} sm={1} xs={1} className="dahboard">
          <Col className="dashboard-left">
            <img src={dashboard} alt="" />
          </Col>
          <Col className="dashboard-right">
            <h5>Name: {user.displayName}</h5>
            <h6>Email: {user.email}</h6>
            <h6> Role: {admin ? "Admin" : "Normal User"} </h6>
            <button className="btn btn-warning" onClick={logOut}>
              {" "}
              Log Out{" "}
            </button>
          </Col>
        </Row>
      </div>
      {/* <h1>Welcome to Dashboard !</h1>
      <div className="dashboard">
        <h1 className="text-center">User Profile</h1>
        <div className="row mx-0 px-0">
          <div className="col-md-6 ">
            <img src={dashboard} alt="" />
          </div>
          <div className="col-md-6 pt-5">
            <h5>Name: {user.displayName}</h5>
            <h6>Email: {user.email}</h6>
            <h6> Role: {admin ? "Admin" : "Normal User"} </h6>
            <button onClick={logOut}> Log Out </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DashboardHome;
