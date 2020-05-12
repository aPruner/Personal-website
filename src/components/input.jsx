// Core stuff
import React from 'react'

// Base styles/components
import baseComponents from '../components/baseComponents'

// TODO: Add more important props to this
export default function Input(props) {
  const {
    InputContainer,
    InputLabel,
    Input
  } = baseComponents

  return (
    <InputContainer>
      <InputLabel>
        {props.labelText}
      </InputLabel>
      <Input type="text" placeholder={props.placeholder} onChange={props.onChange}>
      </Input>
    </InputContainer>
  )
}