import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import SingleLap from "./SingleLap";


export default function FastestLaps() {

    const [fastestlaps, setFastestlaps] = useState([]);

    useEffect(() => {
        (async () => {
            await getFastestlaps();
        })()
    }, [])

    async function getFastestlaps() {
        const res = await fetch('https://pw141-f1-capstone-db.onrender.com/fastestlaps')
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            setFastestlaps(data);
        } else console.error("Failed to load Fastest Laps")
    }

    if (fastestlaps.length === 0 ) return <Spinner/>

  return (
    <Container>
        <h1 className="FLTitle">Fastest Laps of the Season</h1>

        {fastestlaps.map((fastestlap, i) => {
                return <SingleLap fastestlap={fastestlap} key={i} />
            })}


    </Container>
  )
}