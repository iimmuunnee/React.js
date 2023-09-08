import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({loginState, setLoginState}) => {

  const navigate = useNavigate()

  // console.log(loginState);

  const handleLogin = () => {
    setLoginState(true)
    navigate("/")

  }

  return (
    <div>
      <h1 style={{margin:"10px"}}>Login</h1>
      <button onClick={handleLogin} style={{margin:"10px"}}>login</button>
      <br/>
      <Link to={'/'}>Home 페이지로 이동하기!</Link>
    </div>
  )
}

export default Login