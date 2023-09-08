import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Home = ({loginState, setLoginState}) => {

  const navigate = useNavigate()

  const goToProduct = () => {
    loginState?navigate('/product'):navigate("/login")
  }
  
  const handleLogout = () => {
    loginState?setLoginState(false):navigate("/login")
  }

  return (
    <div style={{margin:"10px"}}>
      <button onClick={handleLogout}>{loginState?"로그아웃":"로그인"}</button>
      {loginState?<Link to={"/user"}>My page</Link> : ""}
      <h1>Home {loginState? "로그인 됨" :"로그인 안됨"}</h1>

      {/* <Link to={'/login'}>로그인 상태 설정</Link> */}
      <br/>
      <Link to={'/about'}>About 페이지로 이동하기!</Link>
      <br/>
      <button onClick={goToProduct}>상품페이지로 이동하기</button>
    </div>
  )
}

export default Home