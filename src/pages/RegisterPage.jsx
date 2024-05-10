import { Stack } from 'react-bootstrap'
import Body from '../components/Body'
import RegisterForm from '../components/forms/RegisterForm'

export default function RegisterPage() {
  return (
    <Body>
        <Stack className='feed'>
            <RegisterForm />
        </Stack>
        
    </Body>
  )
}