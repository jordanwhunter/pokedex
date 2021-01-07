import React, { useState } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  return (
    <div className='row'>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  )
}

export default PokemonList
