import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./Login.css";
import login from "../../../../images/login/login.svg";
import GoogleIcon from "@mui/icons-material/Google";

import { Spinner } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";
// import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { isLoading, user, error, loginUser, signInUsingGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log(field, value);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    loginData.email = "";
    e.preventDefault();
  };

  const handleGoogleLogin = (e) => {
    signInUsingGoogle(location, history);
    e.preventDefault();
  };
  return (
    <div>
      <Container sx={{ flexGrow: 1 }}>
        <Grid className="login-container mb-5" container spacing={2}>
          <Grid item xs={12} md={6}>
            <img style={{ width: "100%" }} src={login} alt="" />
          </Grid>
          <Grid className="form" item sx={{ mt: 8 }} xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Please Login
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Password"
                  variant="standard"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                />
                <Button
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  <Button variant="text">New User? Pleaser Register</Button>
                </NavLink>
                <Typography variant="h6">OR</Typography>

                <button onClick={handleGoogleLogin} className="btn btn-warning">
                  <GoogleIcon />
                  Sign in with google
                </button>
              </form>
            )}

            {isLoading && <Spinner animation="grow" variant="warning" />}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
