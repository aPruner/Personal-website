import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import "../styles/global.css"

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px 0 0 0;
`

const baseLinkStyles = css`
  font-family: Manaspace;
  background: transparent;
  border-radius: 3px;
  border: none;
  color: #add8e6;
  text-decoration: none;
  margin: 20px;
  :hover {
    color: #2168db;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
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
  return (
    <NavContainer>
      <NavLinkItem text="Games" to="/games"/>
      <NavLinkItem text="Resume" to="/resume"/>
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