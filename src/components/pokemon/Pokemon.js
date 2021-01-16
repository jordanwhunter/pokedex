import React, { useState, useEffect } from 'react';
import axios from 'axios';
import gif from '../../loading-wheel.gif';

const Pokemon = (props) => {
  const { match } = props
  const { params } = match
  const { indexNum } = params
  
  const [pokemon, setPokemon] = useState(undefined)

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

  const loadPokemonJsx = () => {
    const { 
      name, 
      id, 
      abilities, 
      species, 
      height, 
      weight, 
      eggGroup, 
      genderRatioMale, 
      genderRatioFemale, 
      evs, 
      hatchSteps, 
      types, 
      stats, 
      sprites
    } = pokemon

    // const { stat } = stats

    const { front_default } = sprites
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

    

    return (
      <>
        <div>
          { `${id}.` }
          { name
            .toLowerCase()
            .split(' ')
            .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
            .join(' ')
          }
          <img
            src={ front_default }
            alt='Pokémon Sprite' 
          />
          <br />
          <br />
          { `${height} decimeters` }
          <br />
          <br />
          { weight }
          <br />
          <br />
          <img
            src={ fullImageUrl }
            alt='Pokémon Large Pic' 
          />
        </div>
      </>
    )
  }

  return (
    <> 
      {pokemon === undefined && 
        <img 
          src={gif}
          alt='Loading'
        />
      }
      {pokemon !== undefined && pokemon && loadPokemonJsx(pokemon)}
      {pokemon === false && <h1> Pokemon not found</h1>} 
    </>
  )
}

export default Pokemon
