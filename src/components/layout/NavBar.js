import React from 'react';

const NavBar = () => {

  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top flex-container'>
        <a 
          href='/' 
          className='navbar-text navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'
        >
          Pokédex
        </a>
      </nav>
    </div>
  )
}

export default NavBar
