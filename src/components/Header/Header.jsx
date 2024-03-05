import React from "react";
import styled from "styled-components";

const Header = ({ text }) => {
  return <Title> {text} </Title>
}

export default Header;

const Title = styled.h1`
  margin-bottom: 70px;
  text-align: center;
  font-size: 25px;
`