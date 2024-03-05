import React from "react";
import styled from "styled-components";

const Button = ({ text, onClick }) => {
  return <Btn onClick={onClick}> {text} </Btn>
}

export default Button;

const Btn = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 40px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background: #d100bc;
  border: none;
  font: inherit;
  cursor: pointer;
`