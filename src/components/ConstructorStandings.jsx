import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import IndConstructorStandings from "./IndConstructorStandings";


export default function ConstructorStandings() {

    const [constStand, setConstStand] = useState([]);

    useEffect(() => {
        (async () => {
            await getConstStand();
        })()
    }, [])

    async function getConstStand() {
        const res = await fetch('https://pw141-f1-capstone-db.onrender.com/constructorstandings')
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            setConstStand(data);
        } else console.error("Failed to load constructor standings")
    }
    // Bahrain = schedule,["MRData"]["RaceTable"]["Races"][1]
    // console.log(Bahrain)
    if (constStand.length === 0 ) return <Spinner/>

  return (
    <Container>
        <h1 className="schedTitle mb-5">Constructor Standings</h1>

        

        {constStand.map((conststand, i) => {
                return <IndConstructorStandings conststand={conststand} key={i} />
            })}


    </Container>
  )
}