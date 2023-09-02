import React from 'react'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
const PokeNav = ({onClick}) => {

  let navItems = ["All", "1~50", "51~100", "101~151"]

  return (
    <Nav className="justify-content-center">
        {navItems.map((item, index) => (
    <Nav.Item key={index}>
      <Nav.Link onClick={onClick} eventKey="disabled">{item}</Nav.Link>
    </Nav.Item>
        ))}
  </Nav>
  )
}

export default PokeNav