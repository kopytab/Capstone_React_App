import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'





export default function Sidebar() {
    return (
        <Navbar sticky='top' className='flex-column sidebar' id='sidebar'>
           <Link to="/">Home</Link>
           
        </Navbar>
    )
} 