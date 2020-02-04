import React from "react"
import styled, { css, keyframes } from 'styled-components'
import "../styles/global.css"

import Nav from "../components/nav"

// TODO: define global styles here
// TODO: create a light and dark theme using styled components' ThemeProvider

const textFade = keyframes`
  from {
    opacity: 0%;
  }
  
  to {
    opacity: 100%;
  }
`

const AppContainer = styled.section``

const baseHeaderStyles = css`
  font-family: Manaspace;
  color: #add8e6;
  text-align: center;
  animation: ${textFade} 1s linear;
`

const AppHeader = styled.h1`
  ${baseHeaderStyles};
  font-size: 6em;
  margin: 40px 0 10px 0;
  @media (max-width: 900px) {
    font-size: 3em;
    margin: 20px 0 10px 0;
  }
`

const AppSubheader = styled.h3`
  ${baseHeaderStyles};
  font-size: 1.5em;
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
