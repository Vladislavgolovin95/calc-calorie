import React from "react";
import styled from "styled-components";

const InputField = ({ type, name, value, onChange, checked, text }) => {
  return (
    <label>
      <Input 
        type={type} 
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        />
      <Text>{text}</Text>
    </label>
  )
}

export default InputField;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #3D3D3D;
  font-size: 15px;
  // background: #242424;
  background-color: inherit;
  outline: none;
`
const Text = styled.span`
  margin-left: 10px;
`