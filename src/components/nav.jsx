import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import baseStyles from '../styles/baseStyles'
import download from 'downloadjs'
import { Link } from 'gatsby'
import '../styles/global.css'

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

const FunctionA = styled.a`
  ${baseStyles.baseLinkStyles};
  color: ${props => props.isVisited ? "#4f317d" : "#add8e6"};
`

const NavLink = styled(Link)`
  ${baseStyles.baseLinkStyles}
  animation: ${textFade} 1s linear;
`

const NavA = styled.a`
  ${baseStyles.baseLinkStyles}
  animation: ${textFade} 1s linear;
`

export default function Nav() {
  const [resumeVisited, setResumeVisited] = useState(false)

  async function downloadResume() {
    setResumeVisited(true)
    try {
      const response = await fetch(".netlify/functions/resumeService/resumeService.js")
      const blob = await response.blob()
      download(blob, "Adam Pruner - Resume", response.headers["content-type"])
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <NavContainer>
      <NavLinkItem text="Games" to="/games"/>
      <FunctionLinkItem text="Resume" onClick={downloadResume} isVisited={resumeVisited}/>
      <NavLinkItem text="LinkedIn" href="https://linkedin.com/in/adam-pruner"/>
      <NavLinkItem text="Github" href="https://github.com/apruner"/>
      {/* TODO: Fix NavContainer styling for mobile, looks fine on desktop/tablet */}
      <NavLinkItem text="Contact" to="/contact"/>
    </NavContainer>
  )
}

// Only provide one of props.to or props.href
// based on whether link is external or internal
function NavLinkItem(props) {
  if (props.to) {
    return (
      <NavLink to={props.to}>
        {props.text}
      </NavLink>
    )
  } else {
    // props.href must be truthy
    return (
      <NavA href={props.href}>
        {props.text}
      </NavA>
    )
  }
}

function FunctionLinkItem(props) {
  return (
    <FunctionA onClick={props.onClick} isVisited={props.isVisited}>
      {props.text}
    </FunctionA>
  )
}