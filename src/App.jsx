import Container from "react-bootstrap/Container"

import Header from "./components/Header"


import { Route, Routes } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import SchedulePage from "./pages/SchedulePage"
import DriverInfoPage from "./pages/DriverInfoPage"
import FastestLapsPage from "./pages/FastestLapsPage"
import FastestPitstopsPage from "./pages/FastestPitstopsPage"
import TeamInfoPage from "./pages/TeamInfoPage"
import ConstructorStandingsPage from "./pages/ConstructorStandingsPage"
import DriverStandingsPage from "./pages/DriverStandingsPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import Logout from "./components/Logout"
import FeedPage from "./pages/FeedPage"


export default function App() {
  return (
    <Container fluid className='app'>

      <Header />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/schedule" element={<SchedulePage/>}/>
        <Route path="/driverinfo" element={<DriverInfoPage/>}/>
        <Route path="/fastestlaps" element={<FastestLapsPage/>}/>
        <Route path="/fastestpitstops" element={<FastestPitstopsPage/>}/>
        <Route path="/constructorinfo" element={<TeamInfoPage/>}/>
        <Route path="/constructorstandings" element={<ConstructorStandingsPage/>}/>
        <Route path="/driverstandings" element={<DriverStandingsPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/feed" element={<FeedPage/>}/>

      </Routes>
    </Container>
  )
}
