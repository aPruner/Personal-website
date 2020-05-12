// Core stuff
import React from 'react'
import styled, { css } from 'styled-components'

// Base styles/components
import baseComponents from '../components/baseComponents'
import baseStyles from '../styles/baseStyles'

// TODO: Add more key props to this
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