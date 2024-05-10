import { useContext, useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { UserContext } from '../../contexts/UserContext';

export default function LoginForm() {

    const [ userLogin, setUserLogin ] = useState({ username: '', password: ''});
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate();
    
    console.table(userLogin);

    useEffect(()=>{
        if (user.accessToken) navigate('/')

        if( userLogin.username ){
            loginUser();
            // setUserLogin({username:'',password:''})
        }
    }, [userLogin])

    async function loginUser(){
        console.log("in login user");
        const res = await fetch('http://127.0.0.1:5000/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userLogin)
        })
        if (res.ok) {
            const { access_token } = await res.json();
            console.log(access_token);
            setUser({...userLogin, accessToken: access_token})
            navigate('/')
            toast(`User: ${userLogin.username} logged in`)
        } else console.error("Failed to Login")
    }

    function handleLoginFormSubmit(e){
        e.preventDefault();
        console.log("form submitted");
        const loginElement = e.currentTarget;
        const loginForm = new FormData(loginElement);

        setUserLogin(Object.fromEntries(loginForm));

        loginUser(userLogin);
    }
    
    return (
        <Container>
            <h3 className='logintitle'>Login</h3>
            <form action="" onSubmit={handleLoginFormSubmit}>
                <label className='titlelabel' htmlFor="username">Username</label><br />
                <input className='posttitlefield' type="text" name='username' required /><br />

                <label className='bodylabel' htmlFor="password">Password</label><br />
                <input className='posttitlefield' type="password" name='password' required /><br />

                <input className='postbtn' type="submit" name='Login' value='Login' />
            </form>
        </Container>
    )
}