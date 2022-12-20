import React from "react";
import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";

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

// const Error = styled(Typography)`
//   font-size: 10px;
//   color: #ff6161;
//   line-height: 0;
//   margin-top: 10px;
//   font-weight: 600;
// `;

const signUpInitialData = {
  name: "",
  username: "",
  password: "",
};

const Login = () => {
  const [account, toggleAccount] = useState("login");
  const [signUpData, setSignUpData] = useState(signUpInitialData);

  const toggleSignUp = () => {
    account === "login" ? toggleAccount("signup") : toggleAccount("login");
  };

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="blog" />
        {account === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter username" />
            <TextField variant="standard" label="Enter password" />
            <LoginButton variant="contained">Login</LoginButton>
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
            <SignupButton>Signup</SignupButton>
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
