// Core stuff
import React from 'react'
import styled from 'styled-components'

// Base styles/components
import baseStyles from '../styles/baseStyles'
import baseComponents from '../components/baseComponents'

// Components
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
  const {
    PageContainerDiv
  } = baseComponents

  return (
    <PageContainerDiv>
      <NavWrapper />
      <HomePageHeaderContainer>
        <HomePageHeader>
          Welcome to my website!
        </HomePageHeader>
        <HomePageHeader>
          There isn't much here just yet, but soon there will be! Hang tight!
        </HomePageHeader>
        {/* TODO: Add more content here, what should go here?*/}
      </HomePageHeaderContainer>
    </PageContainerDiv>
  )
}