// Core stuff
import React from 'react'
import styled, { css } from 'styled-components'

// Base styles/components
import baseStyles from '../styles/baseStyles'

const CardContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
`

const baseCardTextStyles = css`
  ${baseStyles.baseTextStyles}
  padding: 16px;
`

const CardTitle = styled.h1`
  ${baseCardTextStyles}
  font-size: 32px;
  text-align: center;
`

const CardSubTitle = styled.h2`
  ${baseCardTextStyles}
  font-size: 16px;
  text-align: center;
`

export default function Card(props) {
  return (
    <CardContainer>
      <CardTitle>
        {props.title}
      </CardTitle>
      <CardSubTitle>
        {props.subtitle}
      </CardSubTitle>
    </CardContainer>
  )
}