import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import IndTeamInfo from "./IndTeamInfo";


export default function TeamInfo() {

    const [teamInfo, setTeamInfo] = useState([]);

    useEffect(() => {
        (async () => {
            await getTeamInfo();
        })()
    }, [])

    async function getTeamInfo() {
        const res = await fetch('https://pw141-f1-capstone-db.onrender.com/constructorinfo')
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            setTeamInfo(data);
        } else console.error("Failed to load team info")
    }
    
    if (teamInfo.length === 0 ) return <Spinner/>

  return (
    <Container>
        <h1 className="schedTitle">Constructor Information</h1>

        

        {teamInfo.map((teamInfo, i) => {
                return <IndTeamInfo teamInfo={teamInfo} key={i} />
            })}


    </Container>
  )
}