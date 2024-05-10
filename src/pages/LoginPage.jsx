import { Stack } from 'react-bootstrap'
import Body from '../components/Body'
import LoginForm from '../components/forms/LoginForm'

export default function LoginPage() {
  return (
    <Body>
        <Stack className='feed'>
            <LoginForm />
        </Stack>
      
    </Body>
  )
}