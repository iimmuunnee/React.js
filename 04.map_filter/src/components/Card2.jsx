import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import menuList from "../data/menu.json"
const Card2 = ({filter}) => {

  return (
    <div className='menu_list'>
     
            {filter.map((menu) => (    
    <Card className="text-center" key={menu.id}>
    <Card.Header>{menu.category}</Card.Header>
    <Card.Body>
      <Card.Title>{menu.name}</Card.Title>
      <Card.Text>
        {menu.price}
      </Card.Text>
      <Button variant="primary">Buy</Button>
    </Card.Body>
  </Card>))}
    </div>
  )
}

export default Card2