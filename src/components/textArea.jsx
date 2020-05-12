// Core stuff
import React from 'react'
import styled, { css } from 'styled-components'

// Base styles/components
import baseComponents from '../components/baseComponents'
import baseStyles from '../styles/baseStyles'

// TODO: Add more key props to this
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
      <TextArea />
    </InputContainer>
  )
}