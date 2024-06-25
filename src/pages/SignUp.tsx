import React, { useState } from "react";
import styled from "styled-components";
import { CustomInput } from "../ui/CustomInput";
import SignUpImg from "../assets/images/SignUpImg.png";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../common/hooks/redux-hooks";
import { signUp } from "../redux/Auth/asyncAction";
export const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  // const { error } = useAppSelector((state) => state.user);

  // const [formData, setFormData] = useState({
  //   userName: '',
  //   login: '',
  //   password: '',
  //   confirmPassword: ''
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const { userName, login, password, confirmPassword } = formData;
  //   if (password !== confirmPassword) {
  //     alert("Passwords do not match");
  //     return;
  //   }
  //   dispatch(signUp({ userName, login, password }));
  // };


  return (

    <SignInWrapper>
      <SingInContainer>
        <SingInTitle>Sign Up</SingInTitle>
        <SignInForm>
          <CustomInput label={"Name"} />
          <CustomInput label={"Login"} />
          <CustomInput label={"Password"} isPassword />
          <CustomInput label={"Enter your password again"} isPassword />
          <SignInBtn
            onClick={(e) => {
              e.preventDefault();
              dispatch(signUp({userName: 'Viktor', login: "Butthead", password: "zxc123123" }));
            }}
          >
            Sign in
          </SignInBtn>
          <SignInCheckBoxLabel htmlFor="SignInCheckBox">
            <SignInCheckBox
              id="SignInCheckBox"
              name="SignInCheckBox"
              type="checkbox"
            />
            &nbsp;&nbsp; I accept the agreement
          </SignInCheckBoxLabel>
        </SignInForm>
        <SignInFootForm>
          Already a member? <SignInFootLink to="/">Sign in</SignInFootLink>
        </SignInFootForm>
      </SingInContainer>
      <StyledImg src={SignUpImg} alt="photo"></StyledImg>
    </SignInWrapper>
  );
};

const StyledImg = styled.img``;

const SignInWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SignInForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const SingInContainer = styled.div`
  margin: 0 115px 0 120px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const SingInTitle = styled.h1`
  font-size: 36px;
  line-height: 49px;
`;

const SignInBtn = styled.button`
  position: relative;
  background-color: #e4163a;
  border-radius: 4px;
  padding: 8px 0px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

const SignInFootForm = styled.p`
  padding-top: 24px;
  margin: 0 auto;
  font-weight: 500;
  line-height: 24px;
  color: #707070;
`;
const SignInFootLink = styled(Link)`
  color: #e4163a;
  text-decoration: underline;
`;

const SignInCheckBoxLabel = styled.label`
  margin-top: 25px;
  color: #707070;
  line-height: 24px;
  font-weight: 500;
  margin-left: 5px;
`;
const SignInCheckBox = styled.input`
  cursor: pointer;
`;
