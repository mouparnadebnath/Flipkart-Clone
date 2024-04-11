import React, { useState, useEffect } from "react";
import { Dialog, useMediaQuery, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import loginImage from "../../assets/loginimage.png";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormHelperText from "@mui/material/FormHelperText";
import { Button } from "react-bootstrap";
import googleIcon from "../../assets/googleicon.png";
import { authenticateUser } from "../../container/api";
import authenticateLogin from "../../container/api";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "../../App.css";
export default function Login() {
  const [open, setOpen] = React.useState(false);
  const [activePage, setActivePage] = useState("login");

  const userInputSignUp = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    number: "",
  };
  const userInputLogin = {
    email: "",
    password: "",
  };
  const [name, setname] = useState("");
  const [usersignUp, setUsersignUp] = useState(userInputSignUp);
  const [login, setLogin] = useState(userInputLogin);

  const handleOpenSignupPage = (event) => {
    event.preventDefault();
    setActivePage("signup");
  };
  const handleopenLoginPage = (event) => {
    event.preventDefault();
    setActivePage("login");
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActivePage("login");
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleInputChange = (e) => {
    setUsersignUp({ ...usersignUp, [e.target.name]: e.target.value });
    console.log(usersignUp);
  };
  const authenticateSignup = async () => {
    const response = await authenticateUser(usersignUp);
    console.log(response);
    handleClose();
    setUsersignUp("");
    setname(
      usersignUp.firstName
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };
  useEffect(() => {
    console.log(usersignUp);
  }, [usersignUp]);

  const handleclick = (event) => {
    setOpen(event.currentTarget);
  };

  const logout = () => {
    setname("");
  };

  const loginInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(login);
  };

  const authenticateLoginUser = async () => {
    const response = await authenticateLogin(login);
    console.log(response);
    handleClose();
    setLogin("");
  };
  useEffect(() => {
    console.log(login);
  }, [login]);

  return (
    <div>
      {name ? (
        <>
          <span
            style={{
              fontSize: "1.5rem",
              color: "#1b5e20",
              marginLeft: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={handleclick}
          >
            {name}
          </span>
          <Menu
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            style={{ padding: "0" }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                logout();
              }}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  style={{ fontWeight: "400" }}
                  fill="currentColor"
                  class="bi bi-power"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.5 1v7h1V1z" />
                  <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                </svg>
              </span>
              <Typography style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <div className="loginContainer" style={{marginLeft:"1.5rem"}}>
          <AccountCircleOutlinedIcon  style={{ marginBottom: "7px", marginLeft: "10px" ,color:"black"}} width="10"
            height="10"/>
          <span
            style={{
              fontSize: "1.2rem",
              color: "black",
              marginLeft: "5px",
              fontWeight: "400",
              cursor: "pointer",
            }}
            onClick={handleClickOpen}
            title="login"
          >
            Login
          </span>

          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              height={"80vh"}
              width={"85vh"}
            >
              {activePage === "login" ? (
                <Box
                  className="login-image d-flex flex-column mb-3 bg-gradient"
                  style={{
                    backgroundColor: "#287FF0",
                    height: "100%",
                    width: "35vh",
                  }}
                >
                  <h2 className="text-center fw-bold text-white p-2 my-3">
                    Login
                  </h2>
                  <p className="text-center fw-bold lh-sm text-white p-2 fs-100 ">
                    We know you've got something awesome in your cart. Login or
                    create an account to make it yours.
                  </p>

                  <img
                    src={loginImage}
                    width={"250"}
                    height={"250"}
                    className="p-2 "
                    style={{ marginTop: "6rem" }}
                  />
                </Box>
              ) : (
                <Box
                  className="login-image d-flex flex-column mb-3 bg-gradient"
                  style={{
                    backgroundColor: "#287FF0",
                    height: "100%",
                    width: "35vh",
                  }}
                >
                  <h2 className="text-center fw-bold text-white p-2 my-3">
                    Sign Up
                  </h2>
                  <p className="text-center fw-bold lh-sm text-white p-2 fs-100 ">
                    Don't miss out on flash sales & early access! Sign up and be
                    the first to grab the hottest deals.
                  </p>
                  <img
                    src={loginImage}
                    width={"250"}
                    height={"250"}
                    className="p-2 "
                    style={{ marginTop: "6rem" }}
                  />
                </Box>
              )}

              {activePage === "login" ? (
                <div
                  className="login-form d-flex flex-column md-3 my-5"
                  style={{ marginLeft: "9%" }}
                >
                  <FormControl className="p-2">
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input
                      aria-describedby="my-helper-text"
                      onChange={(e) => {
                        loginInputChange(e);
                      }}
                      name="email"
                      value={login.email}
                    />
                    <FormHelperText id="my-helper-text">
                      We'll never share your email.
                    </FormHelperText>
                  </FormControl>
                  <FormControl
                    sx={{ m: 1, width: "25ch" }}
                    variant="standard"
                    className="p-2"
                  >
                    <InputLabel htmlFor="standard-adornment-password">
                      Password
                    </InputLabel>
                    <Input
                      value={login.password}
                      name="password"
                      onChange={(e) => {
                        loginInputChange(e);
                      }}
                      id="standard-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <a
                      href="/"
                      className="text-black text-end "
                      style={{ textDecoration: "none", fontSize: "13px" }}
                    >
                      Forgot password?
                    </a>
                  </FormControl>
                  <Button
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      border: "2px solid #00B388",
                      margin: "0.5rem",
                    }}
                    onClick={authenticateLoginUser}
                  >
                    Login
                  </Button>
                  <p className="text-center">Or</p>
                  <Button
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      border: "2px solid #00B388",
                      margin: "0.5rem",
                    }}
                  >
                    Sign up with
                    <img src={googleIcon} height={"25px"} width={"25px"} />
                  </Button>
                  <p style={{ margin: "0.5rem" }}>
                    Don't have an account?{" "}
                    <a href="" onClick={handleOpenSignupPage}>
                      Sign up
                    </a>
                  </p>
                </div>
              ) : (
                <div
                  className="login-form d-flex flex-column md-3 my-4"
                  style={{ marginLeft: "9%" }}
                >
                  <FormControl className="p-2">
                    <InputLabel>First Name</InputLabel>
                    <Input
                      id="my-Firstname"
                      aria-describedby="my-helper-text"
                      name="firstName"
                      value={usersignUp.firstName}
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  </FormControl>
                  <FormControl className="p-2">
                    <InputLabel>Last Name</InputLabel>
                    <Input
                      id="my-Lastname"
                      aria-describedby="my-helper-text"
                      name="lastName"
                      value={usersignUp.lastName}
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  </FormControl>
                  <FormControl className="p-2">
                    <InputLabel>Email address</InputLabel>
                    <Input
                      id="my-email"
                      aria-describedby="my-helper-text"
                      name="email"
                      value={usersignUp.email}
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  </FormControl>
                  <FormControl className="p-2">
                    <InputLabel>Password</InputLabel>
                    <Input
                      id="my-password"
                      aria-describedby="my-helper-text"
                      name="password"
                      value={usersignUp.password}
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  </FormControl>
                  <FormControl className="p-2">
                    <InputLabel>Mobile Number</InputLabel>
                    <Input
                      id="my-number"
                      aria-describedby="my-helper-text"
                      name="number"
                      value={usersignUp.number}
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  </FormControl>

                  <Button
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      border: "2px solid #00B388",
                      margin: "0.2rem",
                    }}
                    onClick={authenticateSignup}
                  >
                    Continue
                  </Button>
                  <p className="text-center">Or</p>
                  <Button
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      border: "2px solid #00B388",
                      margin: "0.2rem",
                    }}
                  >
                    Sign up with
                    <img src={googleIcon} height={"25px"} width={"25px"} />
                  </Button>
                  <a
                    href=""
                    style={{ textAlign: "center", textDecoration: "none" }}
                    onClick={handleopenLoginPage}
                  >
                    Already a member ? log in.
                  </a>
                </div>
              )}
            </Box>
          </Dialog>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="white"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
            style={{
              stroke: "black",
              strokeWidth: " 3px",
              marginLeft: "5px",
            }}
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
