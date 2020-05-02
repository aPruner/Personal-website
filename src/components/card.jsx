import React from 'react'
import styled, {css} from 'styled-components'

const CardContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
`

const baseTextStyles = css`
  font-size: 16px;
  padding: 16px;
  font-family: Manaspace;
  color: #add8e6;
`

const CardTitle = styled.h1`
  ${baseTextStyles}
  font-size: 32px;
  text-align: center;
`

const CardSubTitle = styled.h2`
  ${baseTextStyles}
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