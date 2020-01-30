import React from "react"
import styled from 'styled-components'
import "../styles/global.css"

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #070923;
`

const AppHeader = styled.h1`
  font-family: Manaspace;
  font-size: 6em;
  color: #add8e6;
`

export default function App() {
  return (
    <AppContainer>
      <AppHeader>
        Adam Pruner
      </AppHeader>
    </AppContainer>
  )
}
