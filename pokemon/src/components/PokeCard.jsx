import React from 'react'
import Card from "react-bootstrap/Card"

const PokeCard = ({pokemon}) => {
  console.log(pokemon);
  let pokemonWeaknesses = pokemon.weaknesses.join("/")
  return (
    <div>
      <Card style={{width:'18rem'}}>
        <Card.Img variant='top' src={pokemon.img}/>
        <Card.Body>
          <Card.Title>{pokemon.id}. {pokemon.name}</Card.Title>
          <Card.Text>몸무게 : {pokemon.weight}</Card.Text>
          <Card.Text>키: {pokemon.height}</Card.Text>
          <Card.Text>타입 : {pokemon.type}</Card.Text>
          <Card.Text>약타입 : {pokemonWeaknesses}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PokeCard