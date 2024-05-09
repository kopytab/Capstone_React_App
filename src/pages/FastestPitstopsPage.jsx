import React from 'react'
import Body from '../components/Body'
import { Container } from 'react-bootstrap'
import FastestPitstops from '../components/FastestPitstops'

export default function FastestPitstopsPage() {
  return (
    <Body>
        <Container>
            <FastestPitstops/>
        </Container>
    </Body>
  )
}
