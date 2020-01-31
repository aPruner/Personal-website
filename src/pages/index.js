import React from "react"
import styled from 'styled-components'
import "../styles/global.css"

import Nav from "../components/nav"

// TODO: figure out how to reuse styles better
// TODO: define global styles here
// TODO: create a light and dark theme using styled components' ThemeProvider

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AppHeader = styled.h1`
  font-family: Manaspace;
  font-size: 6em;
  color: #add8e6;
  margin: 40px 0 10px 0;
  @media (max-width: 900px) {
    font-size: 3em;
    margin: 20px 0 10px 0;
  }
`

const AppSubheader = styled.h3`
  font-family: Manaspace;
  font-size: 1.5em;
  color: #add8e6;
  margin: 5px 0 5px 0;
  @media (max-width: 900px) {
    font-size: 1em;
  }
`

export default function App() {
  return (
    <AppContainer>
      <AppHeader>
        Adam Pruner
      </AppHeader>
      <AppSubheader>
        Software engineer, game developer, analytics enthusiast
      </AppSubheader>
      <Nav />
    </AppContainer>
  )
}
