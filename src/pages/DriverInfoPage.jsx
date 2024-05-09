import React from 'react'
import Body from '../components/Body'
import { Container } from 'react-bootstrap'
import DriverInfo from '../components/DriverInfo'

export default function DriverInfoPage() {
  return (
    <Body>
        <Container>
            <DriverInfo/>
        </Container>
    </Body>
  )
}
