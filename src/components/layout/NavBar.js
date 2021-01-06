import React from 'react';
// import styled from 'styled-components';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a 
          href="https://www.pokemon.com/us/pokedex/" 
          className="navbar-text navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
        >
          Pokédex
        </a>
      </nav>
    </div>
  )
}

export default NavBar
