// Core stuff
import React from 'react'
import styled from 'styled-components'

// Components
import Helmet from '../components/helmet'
import baseComponents from '../components/baseComponents'
import NavWrapper from  '../components/navWrapper'
import Card from '../components/card'

const GamesCardContainer = styled(baseComponents.FlexContainerDiv)`
`

// TODO: Design and build Games page
export default function Games() {
  const {
    PageContainerDiv
  } = baseComponents

  return (
    <PageContainerDiv>
      <Helmet route="Games" />
      <NavWrapper />
      <GamesCardContainer>
        <Card title="ActionRPG - Name TBD" subtitle="A 2D top-down roguelike Action RPG" />
      </GamesCardContainer>
    </PageContainerDiv>
  )
}