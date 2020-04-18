import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
`

const CardTitle = styled.h1`
  font-size: 16px;
  font-family: Manaspace;
  color: white;
`

export default function Card(props) {
  return (
    <CardContainer>
      <CardTitle>
        {props.text}
      </CardTitle>
    </CardContainer>
  )
}