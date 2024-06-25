import { useState } from "react";
import styled from "styled-components";
import { SignInOpenEye } from "../assets/icons/SignInOpenEye";
import { SignInCloseEye } from "../assets/icons/SignInCloseEye";

interface IProps {
  isPassword?: boolean;
  label: string;
}

export const CustomInput = (props: IProps) => {
  const [pass, setPass] = useState('');

  const [isPassword, setIsPassword] = useState<boolean>(!!props.isPassword);
  const togglePasswordVisibility = () => {
    setIsPassword(!isPassword);
  };

  const handlePassChange = (e: any) => {
    setPass(e.target.value);
  };

  return (
    <>
      <CustomInputSpan>{props.label}</CustomInputSpan>
      <CustomInputBox>
        <InputPassword value={pass} onChange={(e) => setPass(e.target.value)}  type={isPassword ? "password" : "text"}></InputPassword>
        {props.isPassword && (
          <EyeContainer onClick={togglePasswordVisibility}>
            {isPassword ? <SignInOpenEye /> : <SignInCloseEye />}
          </EyeContainer>
        )}
      </CustomInputBox>
    </>
  );
};

const EyeContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;

const CustomInputBox = styled.div`
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  min-width: 366px;
`;

const InputPassword = styled.input`
  padding-left: 20px;
  background-color: #f6f6f6;
  width: 366px;
  height: 40px;
  border-radius: 4px;
  margin-bottom: 24px;
`;


const CustomInputSpan = styled.span`
    font-weight: 500;
    line-height: 24px;
    color: #707070;
`