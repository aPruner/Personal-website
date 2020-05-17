// Core stuff
import React from 'react'
import styled from 'styled-components'

// Components
import Helmet from '../components/helmet'
import baseComponents from '../components/baseComponents'
import NavWrapper from  '../components/navWrapper'
import Card from '../components/card'

// Utils
import { createRouteString } from '../utils/stringUtils'

const GamesCardContainer = styled(baseComponents.FlexContainerDiv)`
`

// TODO: Design and build Games page
export default function Games(props) {
  const {
    PageContainerDiv
  } = baseComponents

  const {
    location
  } = props

  return (
    <PageContainerDiv>
      <Helmet route={createRouteString(location.pathname)} />
      <NavWrapper />
      <GamesCardContainer>
        <Card title="ActionRPG - Name TBD" subtitle="A 2D top-down roguelike Action RPG" />
      </GamesCardContainer>
    </PageContainerDiv>
  )
}