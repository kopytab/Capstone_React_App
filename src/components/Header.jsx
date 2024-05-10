import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container"
import { Link } from 'react-router-dom'
import { NavDropdown, NavLink } from 'react-bootstrap'

import { UserContext } from '../contexts/UserContext'
import { useContext } from 'react'

export default function Header() {

  const { user } = useContext (UserContext)

  return (
    <Navbar sticky="top" data-bs-theme='dark' className='main-heading'>
      <Container>
        <Navbar.Brand className='headtext'>F1 Frenzy</Navbar.Brand>
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
          {
          !user.accessToken ?
            <>
              <NavLink as={Link} to={'/register'}>Register</NavLink>
              <NavLink as={Link} to={'/login'}>Login</NavLink>
            </> :
            <>
            <NavLink as={Link} to={'/feed'}>Feed</NavLink>
            <NavLink as={Link} to={'/logout'}>Logout</NavLink>
            </>
        }
      </Container>
          
    </Navbar>
  )
}