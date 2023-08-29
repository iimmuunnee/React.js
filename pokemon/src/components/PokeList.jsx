import React from 'react'
import PokeCard from './PokeCard'

const PokeList = ({pokemons}) => {

  const styleDiv = {
    display : 'flex',
    flexWrap : "wrap",
    gap:"10px",
    width: "50%",
    margin : "0 auto"
  }
  
  console.log(pokemons);
  return (
    <div style={styleDiv}>
      {pokemons.map((item) => (
        <PokeCard pokemon={item}/>
      ))}
    </div>
  )
}

export default PokeList