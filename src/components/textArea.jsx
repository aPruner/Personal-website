// Core stuff
import React from 'react'

// Base styles/components
import baseComponents from '../components/baseComponents'

// TODO: Add more important props to this
export default function TextArea(props) {
  const {
    InputContainer,
    InputLabel,
    TextArea
  } = baseComponents

  return (
    <InputContainer>
      <InputLabel>
        {props.labelText}
      </InputLabel>
      <TextArea onChange={props.onChange}/>
    </InputContainer>
  )
}