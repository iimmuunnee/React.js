import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import User from './components/User'
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import ProductDetail2 from './components/ProductDetail2';
import { useEffect, useState } from 'react';
import Posts from './components/Posts';

function App() {

  const [loginState, setLoginState] = useState(false)

  useEffect(() => {
      console.log(loginState);
  }, [loginState])

  // 로그인 상태에서 접근할 수 있는 페이지는 PrivateRoute를 만들어서 관리
  // <Navigate to={이동할 경로}/>
  const PrivateRoute = () => {
    return loginState? <User/> : <Navigate to={"/login"}/>
  }

  return (
    <Routes>
      <Route path='/' element={<Home setLoginState={setLoginState} loginState={loginState} />} />
      <Route path='/about' element={<About/>} />
      <Route path='/login' element={<Login setLoginState={setLoginState} loginState={loginState} />} />
      <Route path="/user" element={<PrivateRoute/>} />

      {/* 컴포넌트 */}
      <Route path='/product' element={<Product/>} />

      {/* URL 파라미터 형식으로 Route 구성하기 */}
      {/* :pro_no 써진 그대로 사용하는 것이 아니라 URL에 적힌 값이 객체형태로 받아와짐 */}
      <Route path='/product/:pro_no' element={<ProductDetail/>} />

      <Route path="/productDetail2" element={<ProductDetail2/>} />

      {/* axios를 이용하여 json-server 데이터 요청하는 실습 */}
      <Route path={"/post"} element={<Posts/>} />
    </Routes>
  );
}

export default App;
