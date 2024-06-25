import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <LogoLink to="/main"><LogoImg src={LogoImg}></LogoImg></LogoLink>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div``;

const LogoLink = styled(Link)``;

const LogoImg = styled.img`
    
`