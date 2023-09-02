import React from 'react'
import Nav from 'react-bootstrap/Nav'
const MenuNav = ({onClick}) => {
    let navItems = ["All", "커피", "에이드", "디저트"]

    // const handleClick = (e) => {
    //   // Event 객체 : 이벤트가 발생했을 때 이벤트 정보를 가지고 있느 객체
    //   let click = e.target.innerText
    //   console.log(click);
    // }

    // 상위 컴포넌트에서 함수를 props로 보내서 하위 컴포넌트에서 사용
    // 함수 실행은 상위 컴포넌트에서 실행됨
  return (
    <Nav className="justify-content-center" activeKey="/home">
        {navItems.map((item, index) => (
    <Nav.Item key={index}>
      <Nav.Link onClick={onClick} eventKey="disabled">{item}</Nav.Link>
    </Nav.Item>
        ))}
  </Nav>
  )
}

export default MenuNav