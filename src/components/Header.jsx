import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container"
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar sticky="top" data-bs-theme='dark' className='main-heading'>
      <Container>
        <Navbar.Brand className='headtext'>F1 Fan Zone</Navbar.Brand>
          <Link className='a:link' to="/">Home</Link>
          <Link className='a:link' to="/schedule">Schedule</Link>
          <Link className='a:link' to="/driverinfo">Driver Info</Link>
          <Link className='a:link' to="/constructorinfo">Constructor Info</Link>
          <Link className='a:link' to="/fastestlaps">Fastest Laps</Link>
          <Link className='a:link' to="/fastestpitstops">Fastest Pitstops</Link>
          <NavDropdown title="Standings" className="a:visited p-2 justify-content" id='basic-nav-dropdown'>
            <Link className='a:link m-3' to='/constructorstandings'>Constructor Standings</Link>
            <br/>
            <Link className='a:link m-3' to='/driverstandings'>Driver Standings</Link>
          </NavDropdown>
      </Container>
          
    </Navbar>
  )
}