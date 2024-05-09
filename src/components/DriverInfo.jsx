import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import IndDriverInfo from "./IndDriverInfo";


export default function DriverInfo() {

    const [driverInfo, setDriverInfo] = useState([]);

    useEffect(() => {
        (async () => {
            await getDriverInfo();
        })()
    }, [])

    async function getDriverInfo() {
        const res = await fetch('http://127.0.0.1:5000/driverinfo')
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            setDriverInfo(data);
        } else console.error("Failed to load Driver info")
    }
    
    if (driverInfo.length === 0 ) return <Spinner/>

  return (
    <Container>
        <h1 className="schedTitle">Driver Information</h1>

        

        {driverInfo.map((driverInfo, i) => {
                return <IndDriverInfo driverInfo={driverInfo} key={i} />
            })}


    </Container>
  )
}