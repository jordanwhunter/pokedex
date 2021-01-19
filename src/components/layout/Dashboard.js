import React from 'react';
import PokemonList from '../pokemon/PokemonList';

const Dashboard = () => {
  return (
    <div className='row'>
      <div 
        className='col'
        style={{
          marginTop: '25px'
        }}
      >
        <PokemonList />
      </div>
      
    </div>
  )
}

export default Dashboard
