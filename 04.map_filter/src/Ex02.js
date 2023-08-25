import React from 'react'
import menuList from "./data/menu.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ex02 = () => {
    console.log(menuList);
  return (
    menuList.map((menu) => (    
    <Card className="text-center" key={menu.id}>
    <Card.Header>{menu.category}</Card.Header>
    <Card.Body>
      <Card.Title>{menu.name}</Card.Title>
      <Card.Text>
        {menu.price}
      </Card.Text>
      <Button variant="primary">Buy</Button>
    </Card.Body>
  </Card>))

  )
}

export default Ex02