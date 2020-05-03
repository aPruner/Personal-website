import React from 'react'
import styled from 'styled-components'
import baseStyles from '../styles/baseStyles'
import baseComponents from '../components/baseComponents'
import NavWrapper from  '../components/navWrapper'

const HomePageHeaderContainer = styled.div`
  text-align: center;
`

const HomePageHeader = styled.h1`
  ${baseStyles.baseTextStyles}
  font-size: 22px;
  padding: 16px;
`

// TODO: Design and build Home (index) page
export default function Home() {
  return (
    <baseComponents.PageContainerDiv>
      <NavWrapper />
      <HomePageHeaderContainer>
        <HomePageHeader>
          Welcome to my website!
        </HomePageHeader>
        {/* TODO: Add more content here, what should go here? */}
      </HomePageHeaderContainer>
    </baseComponents.PageContainerDiv>
  )
}