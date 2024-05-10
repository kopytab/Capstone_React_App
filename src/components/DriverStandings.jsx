import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import IndDriverStandings from "./IndDriverStandings";


export default function DriverStandings() {

    const [driverStand, setDriverStand] = useState([]);

    useEffect(() => {
        (async () => {
            await getDriverStand();
        })()
    }, [])

    async function getDriverStand() {
        const res = await fetch('https://pw141-f1-capstone-db.onrender.com/driverstandings')
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            setDriverStand(data);
        } else console.error("Failed to load driver standings")
    }
   
    if (driverStand.length === 0 ) return <Spinner/>

  return (
    <Container>
        <h1 className="schedTitle mb-5">Driver Standings</h1>

        

        {driverStand.map((driverstand, i) => {
                return <IndDriverStandings driverstand={driverstand} key={i} />
            })}


    </Container>
  )
}