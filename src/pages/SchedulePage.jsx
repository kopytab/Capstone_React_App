import React from 'react'
import Body from '../components/Body'
import { Container } from 'react-bootstrap'
import Schedule from '../components/Schedule'


export default function SchedulePage() {
  return (
    <Body>
        <Container>
            <Schedule/>
        </Container>
    </Body>
  )
}
