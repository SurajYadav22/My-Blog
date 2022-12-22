import React, { useContext } from "react";
import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled("img")({
  width: 100,
  display: "flex",
  margin: "auto",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
  & > div,
  > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 14px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const signUpInitialData = {
  name: "",
  username: "",
  password: "",
};

const loginInitialData = {
  username: "",
  password: "",
};

const Login = ({ isUserAuthenticated }) => {
  const [account, toggleAccount] = useState("login");
  const [error, setError] = useState("");
  const [signUpData, setSignUpData] = useState(signUpInitialData);
  const [login, setLogin] = useState(loginInitialData);
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  const toggleSignUp = () => {
    account === "login" ? toggleAccount("signup") : toggleAccount("login");
  };

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    // console.log(e.target.name, e.target.value);
  };

  const handleLoginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(e.target.username, e.target.password);
  };

  const signupUser = async () => {
    let response = await API.userSignup(signUpData);
    if (response.isSuccess) {
      setError("");
      setSignUpData(signUpInitialData);
      toggleAccount("login");
    } else {
      setError("Something went wrong, please try again later");
    }
  };

  const loginUser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
      setError("");

      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );
      sessionStorage.setItem(
        "refreshToken",
        `Bearer ${response.data.accessToken}`
      );

      setAccount({
        username: response.data.username,
        password: response.data.password,
      });
      isUserAuthenticated(true);
      navigate("/");

      setLogin(loginInitialData);
    } else {
      setError("Something went wrong, please try again later");
    }
  };

  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="blog" />
        {account === "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              label="Enter username"
              value={login.username}
              onChange={(e) => handleLoginChange(e)}
              name="username"
            />
            <TextField
              variant="standard"
              label="Enter password"
              value={login.password}
              onChange={(e) => handleLoginChange(e)}
              name="password"
            />
            {error && <Error>{error}</Error>}
            <LoginButton variant="contained" onClick={() => loginUser()}>
              Login
            </LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton onClick={() => toggleSignUp()}>
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              label="Enter name"
              onChange={(e) => handleChange(e)}
              name="name"
            />
            <TextField
              variant="standard"
              label="Enter username"
              onChange={(e) => handleChange(e)}
              name="username"
            />
            <TextField
              variant="standard"
              label="Enter password"
              onChange={(e) => handleChange(e)}
              name="password"
            />
            {error && <Error>{error}</Error>}
            <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignUp()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
