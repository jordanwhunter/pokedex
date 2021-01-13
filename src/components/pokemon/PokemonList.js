import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import Pagination from '../layout/Pagination';
import axios from 'axios';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [loading, setLoading] = useState(true)
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()

  const fetchData = async () => {
    setLoading(true)
    let cancel
    await axios.get(currentPageUrl, {
      // to avoid a race condition (in the event the user calls multiple times before request completes), we need to use a cancelToken so requests are not overridden. cancelToken is built into axios.
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      // change loading setting to false since initial loading setting is true - telling the app that the page needs to be loaded
      setLoading(false)
      console.log(res.data.results)
      setPokemon(res.data.results)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
    })

    return () => cancel()
  }

  useEffect(() => {
    
    fetchData();

    // every time currentPageUrl changes, this will trigger the useEffect hook and refresh the application
  }, [currentPageUrl])

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  }

  const goToPrevPage = () => {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading Your Pokémon..."

  return (
    <>
      {pokemon ? (
        <div className='row'>
          {pokemon.map((i) => (
            <PokemonCard
              key={i.name} 
              pokemon={i.name}
              url={i.url}
            />
          ))}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
        <div className='row'>
          <Pagination
            goToNextPage={nextPageUrl ? goToNextPage : null}
            goToPrevPage={prevPageUrl ? goToPrevPage : null}
          />
        </div>  
    </>
  )
}

export default PokemonList
