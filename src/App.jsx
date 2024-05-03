import Container from "react-bootstrap/Container"

import Header from "./components/Header"


import { Route, Routes } from "react-router-dom"
import LandingPage from './pages/LandingPage'


export default function App() {
  return (
    <Container fluid className='app'>

      <Header />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        

      </Routes>
    </Container>
  )
}
