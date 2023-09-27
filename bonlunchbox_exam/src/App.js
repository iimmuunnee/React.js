import "./App.css";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./page/Main"
import Login from "./page/Login"
import GoodsList from "./page/GoodsList"
import GoodsDetail from './page/GoodsDetail'
// import PrivateRoute from "./routes/PrivateRoute";

import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function App() {
  // 로그인상태, 상품리스트를 관리하는 state를 정의하시오.
  // 로그인상태 : authenticate
  // 상품리스트 : goods
  const [authenticate, setauthenticate] = useState(false)
  const [goods, setGoods] = useState()




  useEffect(() => {
    console.log(authenticate);
}, [authenticate])

  return (
    <div className="container">
      {/* Header컴포넌트가 출력되도록 구현하시오. */}
      <Header authenticate={authenticate} setauthenticate={setauthenticate}/>
      {/* 
          메인페이지, 로그인페이지, 메뉴리스트, 메뉴상세페이지로 이동되도록
          Route를 구성하시오.
        */}
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/goodslist" element={<GoodsList goods={goods} setGoods={setGoods} />}/>
          <Route path="/goodsdetail/:id" element={<PrivateRoute authenticate={authenticate}/>} />
          <Route path="/login" element={<Login setauthenticate={setauthenticate} />} />
        </Routes>

      {/* Footer컴포넌트가 출력되도록 구현하시오. */}
      <Footer/>
    </div>
  );
}

export default App;
