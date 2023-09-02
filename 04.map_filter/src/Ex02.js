import React, { useState } from 'react'
import menuList from "./data/menu.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Ex02.css"
import Nav from "./components/MenuNav"
import Card2 from "./components/Card2"

const Ex02 = () => {

  const [menus, setMenus] = useState(menuList)
  // 스테이트가 1개면 원본 데이터가 훼손되어서 필터링이 2번째부터 안됨
  // 기존 데이터가 사라지기 때문에 필터링용 state를 1개 더 만든다
  const [filter, setFilter] = useState(menus)

  // '커피' 메뉴만 필터링한 후 저장하는 배열 생성
  const coffeeList = menus.filter((item) => item.category === "커피")
  console.log(coffeeList);
  const adeList = menus.filter((item) => item.category === "에이드")
  const dessertList = menus.filter((item) => item.category === "디저트")
  const bakeryList = menus.filter((item) => item.category === "베이커리")

  // 특정 메뉴를 클릭했을 때 해당 메뉴 데이터만 필터링하는 기능
  // 하위 컴포넌트에서 상위 컴포넌트로 데이터를 보내고 사용해야할 때 직접 보내는 건 아니지만 함수를 사용해서 값을 가져온다.
  const filterMenus = (e) => {
    let category = e.target.innerText
    console.log("Menuboard : ", category);

    if(category === "커피"){
      setFilter(coffeeList)
    }
    else if (category === "에이드"){
      setFilter(adeList)
    }
    else if (category === "디저트"){
      setFilter(dessertList)
    }
    else if (category === "베이커리"){
      setFilter(bakeryList)
    }
    else{
      setFilter(menus)
    }
  }



  return (
    <div>
      <Nav onClick={filterMenus}/>
      <Card2 filter = {filter}/>
    </div>

  )
}

export default Ex02