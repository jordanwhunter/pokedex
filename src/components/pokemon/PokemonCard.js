import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ pokemon, url }) => {
  const [sprite, setSprite] = useState('')
  const [indexNum] = useState(url.split('/')[url.split('/').length - 2])

  const fetchSprites = async () => {
    await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon)
      .then (res => {
        setSprite(res.data.sprites.front_default)
      })
  }

  useEffect(() => {
    fetchSprites()
  }, [pokemon])

  // const name = this.props.name;
  console.log(pokemon)
  return (
    <div className='col-md-3 col-sm-6 mb-5'>
      <div className='card'>
        <p className='card-header'>{indexNum}</p>
        <div className='card-body'>
            <center>
              <h6>
                {pokemon
                  .toLowerCase()
                  .split(' ')
                  .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                  .join(' ')
                }
              </h6>
              {/* <br /> */}
              <img 
              src={sprite} 
              alt='Pokémon Sprite' 
              />
            </center>
        </div>
      </div>
    </div>
  )
  
}

export default PokemonCard
