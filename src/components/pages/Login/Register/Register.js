import { Button, Container, Grid, TextField, Typography } from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import "./Register.css";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import login from "../../../../images/login/login.svg";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, isLoading, user, signInUsingGoogle } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  // console.log(loginData);

  const history = useHistory();
  const location = useLocation();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your password did not match! Please try again...",
      });
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
  };

  const handleGoogleLogin = () => {
    signInUsingGoogle(location, history);
  };

  return (
    <div className="text-center">
      <Container sx={{ flexGrow: 1 }}>
        <Grid container className="register-container mb-5" spacing={2}>
          <Grid item xs={12} md={6}>
            <img style={{ width: "100%" }} src={login} alt="" />
          </Grid>
          <Grid item sx={{ mt: 8 }} xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Please Register
            </Typography>
            {!isLoading && (
              <form form onSubmit={handleRegisterSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Name"
                  variant="standard"
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                />
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
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Re-Type Password"
                  variant="standard"
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                />
                <Button
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Regiser
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">
                    Already Registered? Pleaser Login
                  </Button>
                </NavLink>
                <Typography variant="h6">OR</Typography>

                <button onClick={handleGoogleLogin} className="btn btn-warning">
                  <GoogleIcon /> Sign in with google
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

export default Register;
