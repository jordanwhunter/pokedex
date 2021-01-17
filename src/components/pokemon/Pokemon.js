import React, { useState, useEffect } from 'react';
import axios from 'axios';
import gif from '../../loading-wheel.gif';

const Pokemon = (props) => {
  const { match } = props
  const { params } = match
  const { indexNum } = params
  
  const [pokemon, setPokemon] = useState(undefined)
  const [bio, setBio] = useState()
  const [healthPoints, setHealthPoints] = useState()
  const [genderRatioMale, setGenderRatioMale] = useState()
  const [genderRatioFemale, setGenderRatioFemale] = useState()
  const [catchRate, setCatchRate] = useState()
  const [eggGroups, setEggGroups] = useState()
  const [hatchSteps, setHatchSteps] = useState()


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

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${indexNum}/`)
      .then(res => {
        const { data } = res
        let description = '';
        console.log(data)
        data.flavor_text_entries
          .some(flavor => {
            const { flavor_text, language } = flavor
            const { name } = language
            if (name === 'en') {
              description = flavor_text
              console.log(description)
              setBio(description)
              return description;
            }
          })

        const femaleRate = data.gender_rate
        setGenderRatioFemale(12.5 * femaleRate)
        setGenderRatioMale(12.5 * (8 - femaleRate))

        setCatchRate(data.capture_rate)

        setEggGroups(data.egg_groups)

        setHatchSteps(255 * (data.hatch_counter) + 1)
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
      // eggGroup, 
      // genderRatioMale, 
      // genderRatioFemale,  
      // hatchSteps, 
      types, 
      stats, 
      sprites
    } = pokemon

    const { front_default } = sprites
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

    // stats.map(stat => {
    //   switch (stat.stat.name) {
    //     case 'hp':
    //       const hp = stat['base_stat'];
    //       console.log(`HP: ${hp}`)
    //       break;
    //     case 'attack':
    //       let attack = stat['base_stat'];
    //       console.log(`ATK: ${attack}`)
    //       break;
    //     case 'defense':
    //       let defense = stat['base_stat'];
    //       console.log(`DEF: ${defense}`)
    //       break;
    //     case 'speed':
    //       let speed = stat['base_stat'];
    //       console.log(`SPEED: ${speed}`)
    //       break;
    //     case 'special-attack':
    //       let specialAttack = stat['base_stat'];
    //       console.log(`SP. ATK: ${specialAttack}`)
    //       break;
    //     case 'special-defense':
    //       let specialDefense = stat['base_stat'];
    //       console.log(`SP. DEF: ${specialDefense}`)
    //       break;
    //     default:
    //       break;
    //   }
    // })

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
          { types.map(typeInfo => {
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
          { abilities.map(abilityInfo => {
            const { ability } = abilityInfo;
            const { name } = ability;
            return `${name
              .toLowerCase()
              .split('-')
              .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
              .join('-')
            }`
          }).join(', ') }
          <br />
          <br />
          { stats.filter(stat => {
            if (stat.effort > 0) {
              return true;
            }
            return false;
          }) 
          .map(statInfo => {
            const { effort, stat } = statInfo
            const { name } = stat

            return `${effort} ${name
              .toLowerCase()
              .split(' ')
              .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
              .join(' ')
            }`
          }).join(', ') }
          <br />
          <br />
          { bio }
          <br />
          <br />
          { `Catch Rate: ${catchRate}%` }
          <br />
          <br />
          { eggGroups.map(group => {
            const { name } = group
            return `${name
              .toLowerCase()
              .split(' ')
              .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
              .join(' ')
            }`
          }).join(', ') }
          <br />
          <br />
          { `Hatch Steps: ${hatchSteps}`}
          <br />
          <br />
          { stats.map(statInfo => {
            const { base_stat, stat } = statInfo
            const { name } = stat
            return `${name
              .toLowerCase()
              .split(' ')
              .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
              .join(' ')
            }: ${base_stat}`
          }).join(', ') }
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
      {pokemon === false && <h1> Pokémon Not Found</h1>} 
    </>
  )
}

export default Pokemon
