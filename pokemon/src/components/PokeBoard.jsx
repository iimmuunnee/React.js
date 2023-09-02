import React, { useState } from 'react'
import pokemonData from "../data/pokemon.json"
import PokeNav from './PokeNav'
import PokeList from './PokeList'
const PokeBoard = () => {

  const [pokemons, setPokemons] = useState(pokemonData)

  const onClick = (e) => { 
    console.log(e.target.innerText);
    let click = e.target.innerText

    let filter = [];

    if(click === "All"){
      setPokemons(pokemonData)
    }
    else{
      if(click === "1~50"){
        filter = pokemonData.filter((item) => 1 <= item.id && item.id <= 50)
      }
      else if (click === "51~100"){
        filter = pokemonData.filter((item) => 51 <= item.id && item.id <= 100)
      }
      else{
        filter = pokemonData.filter((item) => 101 <= item.id && item.id <= 151)
      }
      setPokemons(filter)
    }

  }

  return (
    <div>
      {/* 메뉴 영역 */}
      <PokeNav onClick={onClick}/>
      {/* 포켓몬 정보를 보여주는 영역 */}
      <PokeList pokemons={pokemons}/>
    </div>
  )
}

export default PokeBoard