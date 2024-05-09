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
        const res = await fetch('http://127.0.0.1:5000/constructorinfo')
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            setTeamInfo(data);
        } else console.error("Failed to load team info")
    }
    
    if (teamInfo.length === 0 ) return <Spinner/>

  return (
    <Container>
        <h1 className="schedTitle">Driver Information</h1>

        

        {teamInfo.map((teamInfo, i) => {
                return <IndTeamInfo teamInfo={teamInfo} key={i} />
            })}


    </Container>
  )
}