import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonCard = ({ pokemon, url }) => {
  const [sprite, setSprite] = useState('')

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon)
      .then (res => {
        setSprite(res.data.sprites.front_default)
      })
  }, [pokemon])

  // const name = this.props.name;
  console.log(pokemon)
  return (
    <div className='col-md-3 col-sm-6 mb-5'>
      <div className='card'>
        <div className='card-header'>
            {pokemon}
            <br />
            <img src={sprite} alt='Pokémon Sprite' />
        </div>
      </div>
    </div>
  )
  
}

export default PokemonCard
