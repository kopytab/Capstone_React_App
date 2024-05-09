import React from 'react'
import Body from '../components/Body'
import { Container } from 'react-bootstrap'
import DriverStandings from '../components/DriverStandings'



export default function DriverStandingsPage() {
  return (
    <Body>
        <Container>
            <DriverStandings/>
        </Container>
    </Body>
  )
}
