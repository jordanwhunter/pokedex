import React from 'react';
import pokedex from '../../pokedex.png';

const NavBar = () => {

  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top flex-container'>
        <a 
          href='/pokedex/' 
          className='navbar-text navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'
        >
          <img
            src={pokedex}
            alt='Pokédex Logo'
            style={{
              height: '40px',
            }}
          />
        </a>
      </nav>
    </div>
  )
}

export default NavBar
