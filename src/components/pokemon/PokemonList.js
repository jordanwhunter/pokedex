import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      // to avoid a race condition (in the event the user calls multiple times before request completes), we need to use a cancelToken so requests are not overridden. cancelToken is built into axios.
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      // change loading setting to false since initial loading setting is true - telling the app that the page needs to be loaded
      setLoading(false)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()

  // every time currentPageUrl changes, this will trigger the useEffect hook and refresh the application
  }, [currentPageUrl])

  if (loading) return "Loading Your Pokémon..."

  return (
    <>
      {pokemon ? (
        <div className='row'>
          {pokemon.map(() => (
            <PokemonCard
              key={pokemon.name} 
              pokemon={pokemon}
              url={pokemon.url}
            />
          ))}
        </div>
      ) : (
        <h1>Loading</h1>
      )}  
    </>
  )
}

export default PokemonList
