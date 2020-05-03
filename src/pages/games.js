import React from 'react'
import styled from 'styled-components'
import baseComponents from '../components/baseComponents'
import NavWrapper from  '../components/navWrapper'
import Card from '../components/card'

const GamesCardContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

// TODO: Design and build Games page
export default function Games() {
  return (
    <baseComponents.PageContainerDiv>
      <NavWrapper />
      <GamesCardContainer>
        <Card title="ActionRPG - Name TBD" subtitle="A 2D top-down roguelike Action RPG" />
      </GamesCardContainer>
    </baseComponents.PageContainerDiv>
  )
}