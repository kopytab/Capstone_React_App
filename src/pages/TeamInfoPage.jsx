import React from 'react'
import Body from '../components/Body'
import { Container } from 'react-bootstrap'

import TeamInfo from '../components/TeamInfo'

export default function TeamInfoPage() {
  return (
    <Body>
        <Container>
            <TeamInfo/>
        </Container>
    </Body>
  )
}
