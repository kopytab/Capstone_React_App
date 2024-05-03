import { Container } from "react-bootstrap";
import Landing from "../components/Landing";
import Body from "../components/Body";


export default function LandingPage() {
  return (
<Body sidebar>

    <Container>
        <Landing/>
    </Container>
</Body>
  )
}
