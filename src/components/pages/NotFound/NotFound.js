import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found !</h2>
      <NavLink to={"/home"}>
        <button className="btn btn-warning mt-3">Go back to Home</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
