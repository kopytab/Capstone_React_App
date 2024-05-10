import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import ScheduledRace from "./ScheduledRace";

export default function Schedule() {

    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        (async () => {
            await getSchedule();
        })()
    }, [])

    async function getSchedule() {
        const res = await fetch('https://pw141-f1-capstone-db.onrender.com/schedule')
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            setSchedule(data);
        } else console.error("Failed to load Schedule")
    }
    // Bahrain = schedule,["MRData"]["RaceTable"]["Races"][1]
    // console.log(Bahrain)
    if (schedule.length === 0 ) return <Spinner/>

  return (
    <Container>
        <h1 className="schedTitle">2024 Formula 1 Season Schedule</h1>

        

        {schedule.map((schedule, i) => {
                return <ScheduledRace schedule={schedule} key={i} />
            })}


    </Container>
  )
}