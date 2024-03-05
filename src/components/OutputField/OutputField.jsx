import React from "react";
import styled from "styled-components";

const OutputField = ({ text, countValue, units }) => {
  return (
    <div>
      <Text>{`${text} : ${countValue} ${units}`}</Text>
    </div>
  )
}

export default OutputField;

const Text = styled.p`
  margin: 30px 0 50px 0;
  text-align: center;
  font-size: 18px;
  color: #5cffd9;
`