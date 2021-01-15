import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
  const { match } = props
  const { params } = match
  const { indexNum } = params
  
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${indexNum}/`)
      .then (res => {
        const { data } = res
        console.log(data)
        setPokemon(data)
      })
      .catch(err => {
        setPokemon(false)
      })
  }, [indexNum])

  return (
    <div>
      {`Test page for Pokémon #${indexNum}`}
    </div>
  )
}

export default Pokemon
