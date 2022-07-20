import React from "react";
import {
  StyledContainer,
  CenteredContainer,
  LeftContainer,
  LoginImage,
  RightContainer,
  RightTitle,
  Input,
  InputTitle,
  FormContainer,
  SubmitButton,
} from "./login";

import { Link } from "react-router-dom";
import LoginSVG from "../../images/login.svg";

const Login = () => {
  return (
    <StyledContainer>
      <CenteredContainer>
        <LeftContainer>
          <LoginImage src={LoginSVG} alt="" />
        </LeftContainer>
        <RightContainer>
          <RightTitle>Sobus Admin Login</RightTitle>
          <FormContainer>
            <InputTitle>Username</InputTitle>
            <Input type="text" />
            <InputTitle>Password</InputTitle>
            <Input type="password" />
            <Link to="/admin">
              <SubmitButton>Sign In</SubmitButton>
            </Link>
          </FormContainer>
        </RightContainer>
      </CenteredContainer>
    </StyledContainer>
  );
};

export default Login;
