import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import SinglePitstop from "./SinglePitstop.jsx";


export default function FastestPitstops() {

    const [pitstops, setPitstops] = useState([]);

    useEffect(() => {
        (async () => {
            await getPitstops();
        })()
    }, [])

    async function getPitstops() {
        const res = await fetch('https://pw141-f1-capstone-db.onrender.com/pitstops')
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            setPitstops(data);
        } else console.error("Failed to load Pitstops")
    }

    if (pitstops.length === 0 ) return <Spinner/>

  return (
    <Container>
        <h1 className="FLTitle">Fastest Pitstops of the Season</h1>

        {pitstops.map((pitstop, i) => {
                return <SinglePitstop pitstop={pitstop} key={i} />
            })}


    </Container>
  )
}