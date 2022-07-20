import styled from "styled-components/macro";

export const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #7ee8fa;
  background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);
  color: black;
`;

export const CenteredContainer = styled.div`
  margin: 80px 100px 80px 100px;
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  height: 100%;
  width: 50%;
  /* background-color: #fefbe7; */
`;

export const LoginImage = styled.img`
  height: 400px;
  width: 400px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
`;

export const RightTitle = styled.h1`
  font-size: 24px;
  padding-top: 10px;
  padding-left: 175px;
`;

export const FormContainer = styled.div``;

export const InputTitle = styled.h4`
  color: black;
  font-size: 18px;
  padding-top: 10px;
  padding-left: 110px;
`;

export const Input = styled.input`
  background: transparent;
  border: 1px solid black;
  /* border-top: none; */
  /* border-right: none; */
  /* border-left: none; */
  width: 250px;
  margin-right: 50px;
  margin-left: 110px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  background: transparent;
  width: 250px;
  height: 50px;
  border: 1px solid black;
  margin-left: 210px;
  border-radius: 4px;
  color: black;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 100px;
  width: 100px;
`;
