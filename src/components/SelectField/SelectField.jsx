import React from "react";
import styled from 'styled-components';

import { options } from "../../data/dataItems";

const SelectField = ({ title, name, onChange }) => {
  return (
    <LabelSelect>
      <TitleSelect>{ title }</TitleSelect>
      <Select name={ name } onChange={ onChange }>
        {options.map(option => (
          <option key={option.key} value={option.value}>{option.text}</option>
        ))}
      </Select>
    </LabelSelect>
  )
}

export default SelectField;

const TitleSelect = styled.p`
  margin-bottom: 5px;
  font-size: 20px;
`

const LabelSelect = styled.label`
  display: block;
  text-align: center;
`

const Select = styled.select`
  background-color: inherit;
`