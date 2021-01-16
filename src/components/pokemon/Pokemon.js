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

    const { front_default } = sprites
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

    

    return (
      <>
        <div>
          { `${id}. ` }
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
          {/* { `${height} Decimeters` } */}
          { '~ ' + 
            (Math.round((height * 0.328084 + 0.0001) * 100) / 100) + ' ft / ' + 
            (Math.round((height * 10.006 + 0.0001) * 100) / 100) + ' cm' 
          }
          <br />
          <br />
          {/* { `${weight} Hectograms` } */}
          { '~ ' + 
            (Math.round((weight * 0.220462 + 0.0001) * 100) / 100) + ' lbs / ' +
            (Math.round((weight * 0.10001 + 0.0001) * 100) / 100) + ' kg' 
          }
          <br />
          <br />
          { types.map((typeInfo) => {
            const { type } = typeInfo;
            const { name } = type;
            return <div 
              key={name}
            >
              {`${name
                  .toLowerCase()
                  .split(' ')
                  .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                  .join(' ')
                }`
              }
            </div>
          }) }
          <br />
          <br />
          { abilities.map((abilityInfo) => {
            const { ability } = abilityInfo;
            const { name } = ability;
            return <div
              key={name}
            >
              {`${name
                  .toLowerCase()
                  .split('-')
                  .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                  .join('-')
                }`
              }
            </div>
          }) }
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
