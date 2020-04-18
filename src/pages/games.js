import React from 'react'
import styled from 'styled-components'
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
    <div>
      <NavWrapper />
      <GamesCardContainer>
        <Card text="This is a game I made or am making" />
      </GamesCardContainer>
    </div>
  )
}