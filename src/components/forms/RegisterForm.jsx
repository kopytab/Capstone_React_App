import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Container from "react-bootstrap/Container";
import { UserContext } from "../../contexts/UserContext";


export default function RegisterForm() {

  const [user, setUser] = useState({});
  const { user: userContextData} = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(()=>{
    if (userContextData.accessToken) navigate('/');
  }, [])

  async function registerUser(){
    const res = await fetch('http://127.0.0.1:5000/user',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user) 
    })
    if (res.ok){
      const data = await res.json();
      console.log(data);
      toast(`User: ${user.username} Registered`)
      navigate('/login')
    } else console.error("Login Failed")
  }

  function handleRegisterFormSubmit(e) {
    e.preventDefault();

    if (user.password !== user.confirmPassword ) {
      window.alert("Passwords Must Match")
      return;
    }
    delete user.confirmPassword;
    console.log(user, 'submitted');
    console.log("submitting form");
    registerUser();
  }

  return (
    <Container>
      <h3 className="logintitle">Register</h3>
      <form action="" onSubmit={handleRegisterFormSubmit}>
        <label className="titlelabel" htmlFor="username">Username</label><br />
        <input className="posttitlefield" type="text" name='username' value={user.username} onChange={(e) => { setUser({ ...user, username: e.target.value }) }} required/><br />
        <label className="bodylabel" htmlFor="email">Email</label><br />
        <input className="posttitlefield" type="text" name='email' value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} required/><br />
        <label className="bodylabel" htmlFor="password">Password</label><br />
        <input className="posttitlefield" type="password" name='password' value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} required/><br />
        <label className="bodylabel" htmlFor="confirm-password">Confirm Password</label><br />
        <input className="posttitlefield" type="password" name='confirm-password' onChange={(e) => { setUser({ ...user, confirmPassword: e.target.value }) }} value={user.confirmPassword} required/><br />
        <label className="bodylabel" htmlFor="first-name">First Name</label><br />
        <input className="posttitlefield" type="text" name='first-name' value={user.first_name} onChange={(e) => { setUser({ ...user, first_name: e.target.value }) }} /><br />
        <label className="bodylabel" htmlFor="last-name">Last Name</label><br />
        <input className="posttitlefield" type="text" name='last-name' value={user.last_name} onChange={(e) => { setUser({ ...user, last_name: e.target.value }) }} /><br />

        <input className="postbtn" type="submit" name='Register' value='Register' />
      </form>
    </Container>
  )

}