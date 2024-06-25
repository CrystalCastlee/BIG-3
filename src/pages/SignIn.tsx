import React from "react";
import styled from "styled-components";
import { CustomInput } from "../ui/CustomInput";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { post } from "../api/baseRequest";

import SignInImg from "../assets/images/SingInImg.png";

import { useDispatch } from "react-redux";
import { useAppDispatch } from "../common/hooks/redux-hooks";
import { signIn } from "../redux/Auth/asyncAction";

interface LoginForm {
  login: string;
  password: string;
}
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>({
    mode: "onBlur",
    defaultValues: {
      login: "",
      password: "",
    },
  });
}

export const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <SignInWrapper>
      <SingInContainer>
        <SingInTitle>Sign In</SingInTitle>
        <SignInForm>
          <CustomInput label={"Login"} />
          <CustomInput label={"Password"} isPassword  />
          <SignInBtn
            onClick={(e) => {
              e.preventDefault();
              dispatch(signIn({ login: "Butthead", password: "zxc123123" }));
            }}
          >
            Sign in
          </SignInBtn>
        </SignInForm>
        <SignInFootForm>
          Not a member yet?{" "}
          <SignInFootLink to="/registration">Sign up</SignInFootLink>
        </SignInFootForm>
      </SingInContainer>
      <StyledImg src={SignInImg} alt="photo"></StyledImg>
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
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
