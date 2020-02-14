import React from 'react'
import styled, {css, keyframes} from 'styled-components'
import { Link } from 'gatsby'
import "../styles/global.css"

const textFade = keyframes`
  from {
    opacity: 0%;
  }
  
  to {
    opacity: 100%;
  }
`

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 25px 0 0 0;
  @media (max-width: 900px) {
    margin: 10px 0 0 0;
  }
`

const baseLinkStyles = css`
  font-family: Manaspace;
  background: transparent;
  border-radius: 3px;
  border: none;
  color: #add8e6;
  text-decoration: none;
  margin: 20px;
  font-size: 16px;
  animation: ${textFade} 1s linear;
  
  @media (max-width: 900px) {
    font-size: 12px;
  }
  
  :hover {
    color: #2168db;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
    cursor: pointer;
  }
  
  :visited {
    color: #4f317d;
  }
`

const NavLink = styled(Link)`
  ${baseLinkStyles}
`

const NavA = styled.a`
  ${baseLinkStyles}
`

export default function Nav() {

  function downloadResume() {
    console.log("Downloading the resume!");
  }

  return (
    <NavContainer>
      <NavLinkItem text="Games" to="/games"/>
      <ResumeAItem text="Resume" onClick={downloadResume}/>
      <NavAItem text="LinkedIn" href="https://linkedin.com/in/adam-pruner"/>
      <NavAItem text="Github" href="https://github.com/apruner"/>
    </NavContainer>
  )
}

function NavLinkItem(props) {
  return (
    <NavLink to={props.to}>
      {props.text}
    </NavLink>
  )
}

function NavAItem(props) {
  return (
    <NavA href={props.href}>
      {props.text}
    </NavA>
  )
}

function ResumeAItem(props) {
  return (
    <NavA href={props.href} onClick={props.onClick}>
      {props.text}
    </NavA>
  )
}