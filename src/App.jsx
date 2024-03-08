import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './components/Header/Header';
import InputField from './components/InputField/InputField';
import SelectField from './components/SelectField/SelectField';
import OutputField from './components/OutputField/OutputField';
import Button from './components/Button/Button';

const App = () => {
  const MALE = 5;
  const FEMALE = 161;

  const [data, setData] = useState({
    age: '',
    height: '',
    weight: '',
    sex: FEMALE,
    activity: 1.2
  });

  const [countValue, setCountValue] = useState(0);

  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: Number(value)
    })
  };

  const handleBtnClick = () => {

    countingValue(data)

    setData({
      ...data,
      age: '',
      height: '',
      weight: '',
      sex: FEMALE,
    })
  };

  const countingValue = () => {
    let weight = data.weight * 10;
    let height = data.height * 6.25;
    let age = data.age * 5;
    let sex = data.sex;
    let activity = data.activity;

    let value = 0

    if (sex === MALE) {
      value = (weight + height - age + MALE) * activity;
      setCountValue(Math.round(value))
      return;
    }

    value = (weight + height - age - FEMALE) * activity;
    setCountValue(Math.round(value))
  };


  return (
    <AppWrapper>

      {isError ? 'Ошибка в форме' : ''}

      <Header text="Калькулятор суточной нормы калорий" />

      <InputsWrapper>
        <InputField
          type= "number"
          name= "age"
          text= "Возраст (лет)"
          value={ data.age }
          onChange={ handleInputChange } />

        <InputField
          type= "number"
          name= "height"
          text= "Рост (см.)"
          value={ data.height }
          onChange={ handleInputChange } />

        <InputField
          type= "number"
          name= "weight"
          text= "Вес (кг.)"
          value={ data.weight }
          onChange={ handleInputChange } />
      </InputsWrapper>

      <GenderRowWrapper>
        <InputField
          type= "radio"
          name= "sex"
          text= "Мужчина"
          value={ MALE }
          checked={ data.sex === MALE }
          onChange={ handleInputChange } />
        <InputField
          type= "radio"
          name= "sex"
          text= "Женщина"
          value={ FEMALE }
          checked={ data.sex === FEMALE }
          onChange={ handleInputChange } />
      </GenderRowWrapper>

      <SelectField 
        title="Степень физической активности"
        name="activity"
        onChange={handleInputChange}
        />

      <OutputField
        text="Суточная норма калорий"
        countValue={ countValue }
        units="ккал." />

      <Button 
        text="Рассчитать"
        onClick={ handleBtnClick }  />

    </AppWrapper>
  )
}

export default App;

const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  height: 100vh;
  padding: 50px 20px;
`
const InputsWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const GenderRowWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
`